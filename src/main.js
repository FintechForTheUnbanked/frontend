import Vue from 'vue'
import Buefy from 'buefy'

import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './Home.vue'
import Settings from './Settings.vue'
import Join from './views/Join.vue'
import FinishJoin from './views/FinishJoin.vue'

const routes = [
  { path: '/home'    , component: Home },
  { path: '/settings', component: Settings },
  { path: '/join', component: Join },
  { path: '/finish-join', component: FinishJoin },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})


Vue.use(VueRouter)

Vue.use(Buefy)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
