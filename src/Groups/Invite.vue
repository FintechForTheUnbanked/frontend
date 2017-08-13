<template>
  <div class="content">
    
    <h2>{{group.name}}</h2>
    <h4>Goal:</h4>
    <h4>Payment Interval:</h4>

    <div class="field has-addons">
      <div class="control has-icons-left">
        <input class="input" type="text" placeholder="Search for a member">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </div>
      <div class="control">
          <router-link class="button is-primary" to="Goal">Invite</router-link>
      </div>
    </div>


  </div>
</template>
<script>

import Groups from '../fixtures/groups.json'

export default {
  data() {
    return {
      group: Groups.filter(g => g.id === this.$route.params.groupId)[0]
    }
  }
}
</script>
<style lang="scss">

</style>
