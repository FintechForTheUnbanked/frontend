<template>
  <div>
    <steps-component step="1" steps="2"></steps-component>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="text" placeholder="Email input" :value="email">
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-warning"></i>
        </span>
      </div>
      <p class="help is-danger">This email is invalid</p>
      <p class="help">You're using this e-mail address to log into Unbanked</p>
    </div>
    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="password" placeholder="">
        <span class="icon is-small is-left">
          <i class="fa fa-key"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fa fa-warning"></i>
        </span>
      </div>
      <p class="help is-danger">This password is insecure</p>
    </div>
    <router-link class="button is-primary" to="finish-join">
      <span>Next Step</span>
      <span class="icon">
        <i class="fa fa-arrow-right"></i>
      </span>
    </router-link>
  </div>
</template>
<script>
import JoinCredentials from '../fixtures/join-credentials.json'

import StepsComponent from '../StepsComponent.vue'

export default {
  components: { 'steps-component': StepsComponent },
  data: () => JoinCredentials
}
</script>
<style lang="scss">

</style>
