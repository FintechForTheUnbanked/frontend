
<template>
  <div>

    <Steps step="2" steps="3" />
    <h2 class="subtitle">City of Angels</h2>
    <div class="goal-selector">
      <div class="box" v-for="goal in goals">
        <div class="content">
          <h3>{{goal.name}}</h3>
          <router-link class="button is-outlined" v-for="option in goal.options" to="invitation">{{option}}</router-link>
            
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Steps from "../StepsComponent.vue"
export default {
  components: {
    Steps: Steps
  },


  data() { return{
    goals: [
      {name: "Costco membership", options:["Total", "monthly", "Terms"]},
      {name: "Netflix Family", options:["Total monthly", "Terms"]},
      {name: "Costco membership", options:["Total monthly", "Terms"]},
      {name: "Costco membership", options:["Total monthly", "Terms"]}
    ]
  }}
}
</script>
<style lang="scss">

</style>
