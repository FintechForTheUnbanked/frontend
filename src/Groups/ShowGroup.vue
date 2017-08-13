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
    <br>
<strong>Location:</strong> Berlin Mitte

    <div class="container">
    <strong>Description:</strong>  {{ group.description }}
    </div>
<br>


        <div class="columns is-mobile">
        <div class="column"><figure class="image is-48x48">
      <img src="1.jpg">
    </figure>
    </div>
    <div class="column"><figure class="image is-48x48">
      <img src="2.jpg"></figure>
    </div>
        <div class="column"><figure class="image is-48x48">
      <img src="3.jpg"></figure>
    </div>
        <div class="column"><figure class="image is-48x48">
      <img src="4.jpg"></figure>
    </div>
    <div class="column"><figure class="image is-48x48">
    <img src="5.jpg"></figure>
    </div>
    </div>

  <div class="card">
    <strong>Individual Contribution:</strong> 20€ <br>
    <strong>Term:</strong> 6 months <br>
    <strong>Ends:</strong> June 2017 <br>
    <strong>No. of slots remaining:</strong> 1
  </div>
  <br>
  <div class="columns is-mobile is-centered">
    <div class="column is-half is narrow">
      <p class="control">
        <a class="button is-primary">
        Join this group
        </a>
      </p>
    </div>
    <div class="column is-half " v-if="!member">
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
