<template>
  <div>
    <h1>Find a Group</h1>
    <div v-for="group in Groups">
      <group-component props="group"></group-component>
    </div>
  </div>
</template>
<script>
import Group from '../components/Group.vue'
import Groups from '../fixtures/groups.json'

export default {
  components: {
    'group-component': Group
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
