
<template>
  <div>

    <Steps step="3" steps="3" />
    <h2 class="subtitle">City of Angels</h2>
    <div class="inviation-list">
      <ul>
        <li v-for="(address, key) in addresses">
          <input class="input" type="email" placeholder="Em@il.address of your friend" @change="addresses[key]=$event.target.value">
        </li>
      </ul>
    </div>
    <router-link to="/Group/city-of-angels" class="button is-primary">Invite them</router-link>
  </div>
</template>
<script>
import Steps from "../StepsComponent.vue"
export default {
  components: {
    Steps: Steps
  },


  data() { return{
    addresses: [
      "","",""
    ],
  }},
}
</script>
<style lang="scss">

</style>
