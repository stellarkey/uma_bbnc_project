<template>
  <div class="register">
    <div class="title">{{ $t("register.title") }}</div>
    <div class="solid-line mb2x"></div>
    <b-form @submit.prevent="register">
      <b-form-group label-cols="0" label-for="firstname">
        <b-form-input
          id="firstname"
          name="user.firstname"
          v-model="user.firstname"
          v-validate="{ required: true, min:2 }"
          :state="validateState('user.firstname')"
          aria-describedby="firstname-feedback"
          :placeholder="$t('register.input_text.firstname')"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="firstname-feedback">
          {{ errors.first('user.firstname') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-cols="0" label-for="lastname">
        <b-form-input
          id="lastname"
          name="user.lastname"
          v-model="user.lastname"
          v-validate="{ required: true, min:2 }"
          :state="validateState('user.lastname')"
          aria-describedby="lastname-feedback"
          :placeholder="$t('register.input_text.lastname')"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="lastname-feedback">
          {{ errors.first('user.lastname') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-cols="0" label-for="email">
        <b-form-input
          id="email"
          name="user.email"
          v-model="user.email"
          v-validate="'required|email'"
          :state="validateState('user.email')"
          aria-describedby="email-feedback"
          :placeholder="$t('register.input_text.email')"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="email-feedback">
          {{ errors.first('user.email') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-cols="0" label-for="password">
        <b-form-input
          id="password"
          name="user.password"
          type="password"
          v-model="user.password"
          v-validate="{ required: true, min: 8 }"
          :state="validateState('user.password')"
          aria-describedby="password-feedback"
          :placeholder="$t('register.input_text.password')"
          ref="password"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="password-feedback">
          {{ errors.first('user.password') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label-cols="0" label-for="confirmPassword">
        <b-form-input
          id="confirmPassword"
          type="password"
          name="user.confirmPassword"
          v-model="user.confirmPassword"
          v-validate="'required|min:8|confirmed:password'"
          :state="validateState('user.confirmPassword')"
          aria-describedby="confirmPassword-feedback"
          :placeholder="$t('register.input_text.confirm_password')"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="confirmPassword-feedback">
          {{ errors.first('user.confirmPassword') }}
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button variant="outline-success" type="submit" :disabled="errors.any()">
        <strong>{{ $t("register.buttons.register") }}</strong>
      </b-button>&nbsp;&nbsp;
      <b-button variant="outline-danger" type="reset">
        <strong>{{ $t("register.buttons.reset") }}</strong>
      </b-button>
      &nbsp;&nbsp;{{ $t("register.text.registered") }}<b-link @click.prevent="signin">{{ $t("register.links.signin") }}</b-link>
    </b-form>

    <b-button @click.prevent="showModal" ref="btnShow" hidden></b-button>
    <b-modal id="errorModal" hide-footer :title="$t('register.error.title')">
      <div class="d-block">
        <span>{{ $t("register.error.message") }}</span>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click.prevent="hideModal">{{ $t("register.error.close") }}</b-button>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { modal, validation } from '@/mixins'

export default {
  metaInfo: {
    title: 'Sign Up',
    titleTemplate: '%s - Decentralized Charity!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  mixins: [modal, validation],
  data() {
    return {
      user: {}
    }
  },
  methods: {
    ...mapActions('account', ['signUp']),
    signin() {
      this.$router.push({name: "SignIn"})
    },
    register() {
      this.$validator.validate().then(valid => {
        if (valid) {
          const user = this
          this.signUp(user).then(() => {
            this.$router.push({name: "SignIn"})
          }).catch(error => {
            this.$log.debug(error)
            this.showModal()
          })
        }
      })
    }
  }
}
</script>

<style scoped>

.register {
  background-color: #ffffff;
  padding: 2rem 1rem;
  margin-left: 380px;
  margin-right: 380px;
}

</style>
