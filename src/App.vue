<template>
  <div id="app">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <router-link to="home">Home</router-link>
    <router-link to="settings">Settings</router-link>
    <router-view></router-view>
    <div id="mainNav" class="tabs">
      <ul>
        <li :class="{'is-active': $route.path == '/Home'}">
          <router-link to="Home">Overview</router-link>
        </li>
        <li :class="{'is-active': $route.path == '/Groups'}">
          <router-link to="Groups">Groups</router-link>
        </li>
        <li :class="{'is-active': $route.path == '/Settings'}">
          <router-link to="Settings">Settings</router-link>
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
  position: absolute;
  bottom: 0;
}

</style>
