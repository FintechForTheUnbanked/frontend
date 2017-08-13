<template>
<div class="">
  <div class="card">
    <div class="card-content" v-if="state === 'asking'">
      <div class="columns">
        <div class="column is-two-thirds">
          <p class="title is-2">{{ group.name }}</p>
          <p class="subtitle is-3">{{ group.goal }}</p>
        </div>
        <div class="column">
          <p class="title is-3">{{ group.amount.value }} {{ group.amount.currency }}</p>
          <p class="subtitle is-6">Payment interval of {{ group.term }} days.</p>
        </div>
      </div>
      <div class="field is-grouped">
        <p class="control">
          <a class="button" disabled>
            Cancel Payment
          </a>
        </p>
        <p class="control">
          <a class="button is-success" v-on:click="processPayment">
            <span class="icon is-small">
              <i class="fa fa-check"></i>
            </span>
            <span>Pay once</span>
          </a>
        </p>
        <p class="control">
          <a class="button is-success" v-on:click="processPayment">
            <span class="icon is-small">
              <i class="fa fa-repeat"></i>
            </span>
            <span>Subscribe</span>
          </a>
        </p>
      </div>
    </div>

    <div class="card-content" v-if="state === 'processing'">
      <p>Please be patient, we're processing your payment.</p>

<progress class="progress is-primary" v-bind:value="Math.round(progressBar * 100)" max="100">0%</progress>
    </div>

    <div class="card-content" v-if="state === 'succeeded'">
      <div class="columns is-mobile is-centered">
        <div class="column is-half is-narrow">
          <p class="notification is-success">
            <span class="title is-3">Yeeehaaaa!</span>
          </p>
        </div>
      </div>
      <p>Your payment was successful!</p>
    </div>

    <div class="card-content" v-if="state === 'failed'">
      <div class="columns is-mobile is-centered">
        <div class="column is-half is-narrow">
          <p class="notification is-danger">
            <span class="title is-3">Oh noo!</span>
          </p>
        </div>
      </div>
      <p>Your payment has failed.</p>
      <p class="control">
        <a class="button is-success" v-on:click="processPayment">
          <span class="icon is-small">
            <i class="fa fa-repeat"></i>
          </span>
          <span>Try it again</span>
        </a>
      </p>
    </div>
  </div>
</div>
</template>
<script>
import Groups from '../fixtures/groups.json'

export default {
  data() {
    return {
      group: Groups.filter(g => g.id === this.$route.params.groupId)[0],
      state: 'asking',
      progressBar: 0.0
    }
  },
  methods: {
    processPayment() {
      if (this.state === 'succeeded' || this.state === 'failed') {
        this.progressBar = 0.0
      }
      if (this.state === 'processing') {
        if (this.progressBar < 1.0) {
          window.setTimeout(() => {
            this.progressBar += Math.random() * 0.2
            if (this.progressBar >= 1.0) {
              if (Math.random() >= 0.5) {
                this.state = 'failed'
              } else {
                this.state = 'succeeded'
              }
            } else {
              this.processPayment()
            }
          }, 100)
        }
      } else {
        this.state = 'processing'
        this.processPayment()
      }
    }
  }
}
</script>
<style lang="scss">

</style>
