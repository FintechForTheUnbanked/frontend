<template>
  <div class="content">
    
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Name of your Group">
      </div>
    </div>
    <h3>Goals</h3>
    <ul>
      <li><a class="button is-small is-primary">select</a> Costco Membership
        <ul>
          <li>Individual Contribution: €15</li>
          <li>Interval: 30 days</li>
        </ul>
      </li><br /><br />
      <li><a class="button is-small is-primary">select</a> Netflix Subscription
        <ul>
          <li>Individual Contribution: €5</li>
          <li>Interval: 30 days</li>
        </ul>
      </li><br />
      <li><a class="button is-small is-primary">select</a> Car Loan
        <ul>
          <li>Individual Contribution: €75</li>
          <li>Interval: 30 days</li>
        </ul>
      </li><br />
      <li><a class="button is-small is-primary">select</a> Swimming Pool Membership
        <ul>
          <li>Individual Contribution: €5</li>
          <li>Interval: 30 days</li>
        </ul>
      </li><br />
    </ul>

    <br />
    <router-link class="button is-primary" to="Goal">Finish</router-link>
  </div>
</template>
<script>
import Steps from "../StepsComponent.vue"
export default {
  components: {
    Steps: Steps
  }
}
</script>
<style lang="scss">

</style>
