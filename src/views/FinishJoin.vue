<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" :value="name">
      </div>
    </div>
    <div class="field">
      <label class="label">Address</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" :value="address">
      </div>
    </div>
    <div class="field">
      <label class="label">Date of Birth</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" :value="dateOfBirth">
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

export default {
  data: () => JoinCredentials
}
</script>
<style lang="scss">

</style>
