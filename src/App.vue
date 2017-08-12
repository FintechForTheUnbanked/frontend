<template>
  <div id="app">
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
