<template>
  <div class="">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/groups">Groups</router-link></li>
        <li><router-link :to="{ name: 'group', params: { userId: this.$route.params.groupId } }">{{ group.name }}</router-link></li>
      </ul>
    </nav>
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ group.name }}
          </h1>
          <h2 class="subtitle">
            {{ group.goal }}
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      {{ group.description }}
    </div>
    <div class="container" v-if="!member">
      <a class="button is-primary" v-on:click="showPayModal" >
        <span class="icon is-small">
          <i class="fa fa-check"></i>
        </span>
        <span>Pay</span>
      </a>
      <div class="modal" v-bind:class="{ 'is-active': payModal.isActive }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <payment-tile :group-id="group.id"></payment-tile>
        </div>
        <button class="modal-close is-large" aria-label="close" v-on:click="closePayModal"></button>
      </div>
    </div>
  </div>
</template>
<script>
import Groups from '../fixtures/groups.json'

import PaymentTile from '../views/PaymentTile.vue'

export default {
  components: {
    'payment-tile': PaymentTile
  },
  data() {
    return {
      group: Groups.filter(g => g.id === this.$route.params.groupId)[0],
      member: false,
      payModal: {
        isActive: false
      }
    }
  },
  methods: {
    showPayModal() {
      this.payModal.isActive = true
    },
    closePayModal() {
      this.payModal.isActive = false
    }
  }
}
</script>
<style lang="scss">

</style>
