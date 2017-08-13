<template>
  <div>
    <steps-component step="2" steps="2"></steps-component>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" :value="name">
      </div>
    </div>
    <div class="field">
      <label class="label">Address</label>
      <div class="control">
        <input class="input" type="text" :value="address">
      </div>
    </div>
    <div class="field">
      <label class="label">Date of Birth</label>
      <div class="control">
        <input class="input" type="text" :value="dateOfBirth">
      </div>
    </div>
    <div class="field">
      <label class="label">Credit Card</label>
      <div class="control">
        <input class="input" type="text" :value="creditCard">
      </div>
    </div>
    <router-link class="button is-primary" to="home">
      <span>Finish Registration</span>
      <span class="icon">
        <i class="fa fa-check"></i>
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
