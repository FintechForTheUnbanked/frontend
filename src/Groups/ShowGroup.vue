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
