<template>
  <div>
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
