<template>
  <div id="app">
    <link rel="stylesheet" href="static/font-awesome-4.7.0/css/font-awesome.min.css">

    <section class="hero" v-if="$route.meta.title">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{$route.meta.title}}
          </h1>
          <h2 class="subtitle" v-if="$route.meta.subtitle">
            {{$route.meta.subtitle}} &nbsp;
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="section">
        <transition name="slide">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div id="mainNav" class="tabs">
      <ul>
        <li :class="{'is-active': $route.meta.tab == 'Home'}">
          <router-link to="/Home">Home</router-link>
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

}
</script>

<style lang="scss">
@import "~bulma";
@import "~buefy/src/scss/buefy";

#mainNav {
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
