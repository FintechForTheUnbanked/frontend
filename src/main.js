import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import Settings from './Settings.vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '/home'    , component: Home },
  { path: '/settings', component: Settings },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})


Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

