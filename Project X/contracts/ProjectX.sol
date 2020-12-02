pragma solidity >=0.5.0;

contract ProjectX {
    // admin records
    address project_admin;
    uint256 admin_donation_pool;
    
    // Unit informations
    mapping (address => uint) private types;
    mapping (address => bool) private validations;
    mapping (address => bool) private lock;               // admin lock control
    mapping (address => bytes32) private descriptions;    // sha256( description )

    // global records
    mapping (address => uint256) private staking_fund;
    mapping (address => uint256) private donation_record;
    mapping (address => uint256) private NPO_donation_pool;
    mapping (address => uint256) private CrowdFund_donation_pool;
    mapping (address => uint256) private CrowdFund_donation_target;
    mapping (address => uint256) private Vendor_pool;
    mapping (uint256 => uint256) private goods_price;     // goods_number to goods_price
    mapping (uint256 => bytes32) private goods_description;
    mapping (uint256 => address) private goods_providing_vendor;
    
    // type info
    mapping (string => uint) private type_map;
    string[] private type_list = ["default", "Donor", "NPO", "Recipient", "CrowdFund", "Vendor"];
    mapping (string => uint256) private staking_price;

    // initialization
    constructor() {
        // admin settings
        project_admin = msg.sender;
        admin_donation_pool = 0;

        // type settings
        for(uint i = 1; i < type_list.length; i++){
            type_map[ type_list[i] ] = i;
        }

        // staking price initializaions
        staking_price["Recipient"] = 23 * 1e18;
        staking_price["NPO"] = 233 * 1e18;
        staking_price["Vendor"] = 666 * 1e18;
        staking_price["CrowdFund"] = 2333 * 1e18;
    }
    
    function register(uint type_id) public {
        require(types[msg.sender] == uint(0x0), "Can't register twice!");
        require(type_id > 0 && type_id < type_list.length, "Invalid type_id!");
        
        // register basic infos
        types[msg.sender] = type_id;
        validations[msg.sender] = false;
        staking_fund[msg.sender] = 0;

        // Donors is valid by default.
        if(types[msg.sender] == type_map["Donor"]){
            validations[msg.sender] = true;
        }
    }
    
    // staking to ensure safety
    function stake() public payable {
        require(types[msg.sender] != uint(0x0), "Need to register first!");
        
        // One can stake as many times as one wants.
        // // require(staking_fund[msg.sender] == 0, "Only unstaked address can be staked!");

        // But each staking must abide by the following rule
        require(staking_fund[msg.sender] + msg.value > staking_price[ type_list[ types[msg.sender] ] ], "Insufficient staking. Need more tokens!");
        
        require(types[msg.sender] != type_map["Donor"], "Staking is not avaliable for donor.");

        // Theoretically one can staking whatever one wants
        // as long as it's higer than the lowerbound "staking_price"
        // TODO: This can be used in reputation system to evaluate reputation scores
        staking_fund[msg.sender] += msg.value;
    }
    
    // describe an adress's purpose
    function describe(bytes32 encripted_description_hash) public {
        require(types[msg.sender] != uint(0x0), "Need to register first!");

        descriptions[msg.sender] = encripted_description_hash;
    }

    // validate an address
    function validate() public {
        require(!is_locked(msg.sender), "Locked address, can't be validated!");
        require(!is_valid(msg.sender), "Only invalid address can be validated!");
        require(staking_fund[msg.sender] != 0, "Need staking before validation.");
        require(descriptions[msg.sender] != bytes32(0x0), "Need description before validation.");
        
        // TODO: branches to be designed
        validations[msg.sender] = true;
    }
    
    // donation to the contract
    function donate() public payable {
        require(types[msg.sender] == type_map["Donor"], "Only donors can donate!");
        // require(msg.value > 0, "Invalid donation!");
        admin_donation_pool += msg.value;
        donation_record[msg.sender] += msg.value;
    }
    
    // p2p donation
    function donate_to(address payable receiver) public payable {
        require(is_valid(msg.sender), "Invalid sender!");
        require(is_valid(receiver), "Invalid receiver!");

        require(types[receiver] != uint(0x0), "Unregistered receiver!");
        require(types[msg.sender] == type_map["Donor"], "Only donors can donate!");
        require(types[receiver] != type_map["Donor"], "Only NOT donors can be donated to!");
        require(types[receiver] != type_map["Vendor"], "Only NOT vendors can be donated to!");

        require(msg.value > 0, "Invalid donation!");
        
        // Seperate situations
        if(types[receiver] == type_map["Recipient"]){
            // support transferring directly from sender to receiver
            receiver.transfer(msg.value);

            donation_record[msg.sender] += msg.value;
        }
        else if(types[receiver] == type_map["NPO"]){
            NPO_donation_pool[receiver] += msg.value;
            donation_record[msg.sender] += msg.value;
        }
        else if(types[receiver] == type_map["CrowdFund"]){
            require(CrowdFund_donation_pool[receiver] < CrowdFund_donation_target[receiver], "Donation target completed!");
            uint256 lim = CrowdFund_donation_target[receiver] - CrowdFund_donation_pool[receiver];
            if(msg.value > lim){
                // refund the overflowed donations
                msg.sender.transfer(msg.value - lim);
                CrowdFund_donation_pool[receiver] = CrowdFund_donation_target[receiver];
                donation_record[msg.sender] += lim;
            } else{
                CrowdFund_donation_pool[receiver] += msg.value;
                donation_record[msg.sender] += msg.value;
            }
        }
        
    }

    // Buy all kinds of goods from vendors
    function buy_goods(uint256 goods_number, uint quantity){
        require(is_valid(msg.sender), "Invalid sender!");
        require(types[msg.sender] == type_map["Recipient"] || types[msg.sender] == type_map["NPO"], "Only recipients and NPOs can buy goods from vendors!");

        if(types[msg.sender] == type_map["Recipient"]){
            require(msg.value >= goods_price[goods_number] * quantity, "Not enough tokens.");

            Vendor_pool[ goods_providing_vendor[goods_number] ] += goods_price[goods_number] * quantity;
            // refund the overflows
            msg.sender.transfer(msg.value - goods_price[goods_number] * quantity);
        } else{
            require(NPO_donation_pool[msg.sender] >= goods_price[goods_number] * quantity, "Insuffcient NPO's donation pool.");
            NPO_donation_pool[msg.sender] -= goods_price[goods_number] * quantity;
            Vendor_pool[ goods_providing_vendor[goods_number] ] += goods_price[goods_number] * quantity;
            // refund misprovided CFXs (if there are any)
            msg.sender.transfer(msg.value);
        }
    }

    // Only NPO to Recipient
    // all amount'unit is Drip
    function distribute(address receiver, uint256 amount) public{
        require(is_valid(msg.sender), "Invalid sender!");
        require(is_valid(receiver), "Invalid receiver!");

        require(types[msg.sender] == type_map["NPO"], "Only NPOs can redistribute their donations!");
        require(types[receiver] == type_map["Recipient"], "Only recipients can be donated to!");

        require(NPO_donation_pool[msg.sender] >= amount, "Insuffcient NPO's donation pool.");
        
        NPO_donation_pool[msg.sender] -= amount;
        // Another direct transferring, it's out of the system
        receiver.transfer(amount);
    }
    
    // // Only vendors can register goods
    function register_goods(uint256 goods_number, uint256 price, bytes32 description){
        require(types[msg.sender] == type_map["Vendor"], "Only vendors can withdraw!");
        require(is_valid(msg.sender), "Invalid vendor!");
        require(goods_description[goods_number] == bytes32(0x0), "Can't register goods twice.");

        goods_price[goods_number] = price;
        goods_description[goods_number] = description;
        goods_providing_vendor[goods_number] = msg.sender;
    }


    // Only vendors can cash out
    function withdraw(uint256 amount) public {
        require(types[msg.sender] == type_map["Vendor"], "Only vendors can withdraw!");
        require(is_valid(msg.sender), "Invalid vendor!");
        require(Vendor_pool[msg.sender] > amount, "Unsuffcient balance!");

        Vendor_pool[msg.sender] -= amount;
        msg.sender.transfer(amount);
    }

    // cash out all the tokens
    function withdraw_all() public {
        withdraw(Vendor_pool[msg.sender]);
    }

    // cancel validation and get staking tokens back
    function quit() public {
        
    }

    // anyone can sponsor for the transaction fee
    function sponsor() public payable {

    }



    function get_admin_donation_pool() public view returns (uint256){
        return admin_donation_pool;
    }
    function get_donation_record(address a) public view returns (uint256){
        require(types[a] == type_map["Donor"], "Not a donor!");
        return donation_record[a];
    }
    function get_NPO_donation_pool(address a) public view returns (uint256){
        require(types[a] == type_map["NPO"], "Not an NPO!");
        return NPO_donation_pool[a];
    }
    function get_CrowdFund_donation_pool(address a) public view returns (uint256){
        require(types[a] == type_map["CrowdFund"], "Not a crowdfund!");
        return CrowdFund_donation_pool[a];
    }
    function get_CrowdFund_donation_target(address a) public view returns (uint256){
        require(types[a] == type_map["CrowdFund"], "Not a crowdfund!");
        return CrowdFund_donation_target[a];
    }
    function get_Vendor_pool(address a) public view returns (uint256){
        require(types[a] == type_map["Vendor"], "Not a vendor!");
        return Vendor_pool[a];
    }
    function get_type_ID(address a) public view returns(uint) {
        return types[a];
    }
    function get_staked_fund(address a) public view returns(uint256) {
        return staking_fund[a];
    }
    function get_description_hash(address a) public view returns(bytes32) {
        return descriptions[a];
    }
    function get_staking_price(uint type_id) public view returns(uint256) {
        require(type_id > 0 && type_id < type_list.length, "Invalid type_id!");
        return staking_price[type_list[type_id]];
    }

    function is_valid(address a) private view returns(bool) {
        return validations[a];
    }
    function is_locked(address a) private view returns(bool) {
        return lock[a];
    }

    /// admin control
    ///
    // Caution: amount's unit is Drip.
    function set_staking_price(uint type_id, uint256 amount) public {
        require(msg.sender == project_admin, "Admin permission denied.");
        require(type_id > 0 && type_id < type_list.length, "Invalid type_id!");
        staking_price[type_list[type_id]] = amount;
    }
    // admin can lock adresses with suspicious behaviors
    function lock(address a) public {
        require(msg.sender == project_admin, "Admin permission denied.");
        lock[a] = true;
        validations[a] = false;
    }
    function unlock(address a) public {
        require(msg.sender == project_admin, "Admin permission denied.");
        lock[a] = false;
    }

    // test functions
    function get_test_encripted_description_hash(bytes32) public view {
        return sha256("2333. What a miracle!");
    }

}