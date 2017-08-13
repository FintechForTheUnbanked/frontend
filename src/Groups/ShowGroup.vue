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
