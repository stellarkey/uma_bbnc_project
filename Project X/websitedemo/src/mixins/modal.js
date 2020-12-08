export const modal = {
  methods: {
    showModal() {
      this.$root.$emit('bv::show::modal', 'errorModal', '#btnShow')
    },
    hideModal() {
      this.$root.$emit('bv::hide::modal', 'errorModal', '#btnShow')
    }
  }
}