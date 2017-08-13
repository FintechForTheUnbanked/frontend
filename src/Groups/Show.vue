<template>
  <div>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="email" placeholder="Search">
      <span class="icon is-small is-left">
        <i class="fa fa-search"></i>
      </span>
    </div>
    <router-link class="button is-outlined" to="Groups/create">Create a new Group</router-link>
    <div v-for="group in Groups">
      <group-component :group="group"></group-component>
    </div>
  </div>
</template>
<script>
import GroupTile from './GroupTile.vue'
import Groups from '../fixtures/groups.json'

export default {
  components: {
    'group-component': GroupTile
  },
  data() {
    return {
      Groups
    }
  }
}
</script>
<style lang="scss">

</style>
