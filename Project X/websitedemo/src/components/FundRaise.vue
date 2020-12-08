<template>
  <div>
    <h2>Top fundraisers</h2>
    <b-card-group deck>
      <b-card title="Reforestation in Dongjiang" img-src="./project3.png" img-height="250px" img-alt="Reforestation in Dongjiang" img-top>
        <b-card-text>
          Join us to restore a forest that has been harmed by farming and commercial activities.
        </b-card-text>
        <b-card-text>
          <strong>Location:</strong> Inner Mongolia
        </b-card-text>
        <b-card-text>
          <strong>Associated vendors/organization:</strong><br>
          China Green Carbon Foundation
        </b-card-text>
        <b-progress :value="30" :max="100" variant="success" height="0.25rem"></b-progress>
        <div class="show-for-medium"><strong>¥120,000 raised</strong> of ¥400,000</div>
      </b-card>

      <b-card title="Qinghai Senior Care Project" img-src="./project1.png" img-alt="Qinghai Senior Care Project" img-height="250px" img-top>
        <b-card-text>
          Give our senior members better quality of their remaining life.
        </b-card-text>
        <b-card-text>
          <strong>Location:</strong> Qinghai
        </b-card-text>
        <b-card-text>
          <strong>Associated vendors/organization:</strong><br>
          Healthcare
        </b-card-text>
        <b-progress :value="3" :max="100" variant="success" height="0.25rem"></b-progress>
        <div class="show-for-medium"><strong>¥100000 raised</strong> of ¥75,000,000</div>
      </b-card>

      <b-card title="Yangtze River Flooding Rescue" img-src="./project2.png" img-alt="Yangtze River Flooding Rescue" img-height="250px" img-top>
        <b-card-text>
          Let's contribute to help our friends who lost their homes, family, and jobs due to the recent Yangtze flooding.
        </b-card-text>
        <b-card-text>
          <strong>Location:</strong> Jiangxi
        </b-card-text>
        <b-card-text>
          <strong>Associated vendors/organization:</strong><br>
          Blue Sky Rescue Group
        </b-card-text>
        <b-progress :value="2" :max="100" variant="success" height="0.25rem"></b-progress>
        <div class="show-for-medium"><strong>¥1000 raised</strong> of ¥80,000</div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
}
</script>
