<template>
  <div id="app">

    <section class="hero" v-if="$route.meta.title">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{$route.meta.title}}
          </h1>
          <h2 class="subtitle">
            {{$route.meta.subtitle}} &nbsp;
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="section">
        <router-view></router-view>
      </div>
    </div>
    <div id="mainNav" class="tabs">
      <ul>
        <li :class="{'is-active': $route.meta.tab == 'Home'}">
          <router-link to="/Home">Overview</router-link>
        </li>
        <li :class="{'is-active': $route.meta.tab == 'Groups'}">
          <router-link to="/Groups">Groups</router-link>
        </li>
        <li :class="{'is-active': $route.meta.tab == 'Settings'}">
          <router-link to="/Settings">Settings</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
@import "~bulma";
@import "~buefy/src/scss/buefy";

#mainNav{
  width: 100%;
  background-color: white;
  position: fixed;
  bottom: 0;

  border-top: 1px solid $primary;

  & a {
    color: $primary;

    &:hover {
      color: white;
      background-color: $primary;
    }
  }
}

</style>
