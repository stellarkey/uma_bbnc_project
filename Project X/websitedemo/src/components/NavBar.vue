<template>
    <b-navbar toggleable="lg" type="light" variant="light" sticky>
      <b-navbar-brand href="#">Decentralized Charity</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item style="margin-right: 0.7rem"><router-link v-bind:to="{name: 'Home'}">Home</router-link></b-nav-item>
          <b-nav-item style="margin-right: 0.7rem" href="#"><router-link v-bind:to="{name: 'Projects'}">Projects</router-link></b-nav-item>
          <b-nav-item style="margin-right: 0.7rem" href="#"><router-link v-bind:to="{name: 'Npos'}">NPOs</router-link></b-nav-item>
          <b-nav-item style="margin-right: 0.7rem" href="#"><router-link v-bind:to="{name: 'Recipients'}">Recipients</router-link></b-nav-item>
          <b-nav-item style="margin-right: 0.7rem" href="#"><router-link v-bind:to="{name: 'Donations'}">Donations</router-link></b-nav-item>
          <b-nav-item style="margin-right: 0.7rem" href="#"><router-link v-bind:to="{name: 'Donations'}">Hall of Fame</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" placeholder="Search"></b-form-input>
          </b-nav-form>
          <b-nav-item-dropdown right text="John" v-if="status.isLoggedIn">
            <b-dropdown-item v-on:click="signout"><span>Sign Out</span></b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item right v-else><router-link v-bind:to="{name: 'SignIn'}">Log in</router-link></b-nav-item>
          <b-nav-item right v-if="status.isLoggedIn"><router-link v-bind:to="{name: 'Account'}">Account</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('account', ['user', 'status']),
    username: function() {
      if (this.user) {
        return this.user.data.firstname + " " + this.user.data.lastname
      }
      return ''
    }
  },

  methods: {
    ...mapActions('account', ['signOut']),
    async signout() {
      this.signOut().then(() => {
        this.$router.push({name: "Home"})
      }).catch(() => {
        this.$router.push({name: "SignIn"})
      })
    }
  }
}
</script>

<style scoped>

.sign-in-user-avatar img {
  display: inline-block;
  border-radius: 100%;
  transition: all 0.2s ease;
  max-height: 40px;
}

</style>
