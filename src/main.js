import Vue from 'vue'
import Buefy from 'buefy'

import App from './App.vue'

import Home from './Home.vue'
import Settings from './Settings.vue'

//Groups
import CreateGroup from './Groups/Create.vue'
import ShowGroups from './Groups/Show.vue'
import CreateGroupGoal from './Groups/Create.Goal.vue'
import Group from './Groups/ShowGroup.vue'

import VueRouter from 'vue-router'

import Join from './views/Join.vue'
import FinishJoin from './views/FinishJoin.vue'

import Payout from './Groups/Payout.vue'
import PayoutReceipt from './Groups/PayoutReceipt.vue'

const routes = [
  { path: '/home'    , component: Home, meta:{tab:"Home"}},
  { path: '/settings', component: Settings },

  { path: '/groups/create', component: CreateGroup, meta:{title: "Start a new Group", tab:"Groups"} },
  { path: '/groups/create/goal', component: CreateGroup, meta:{title: "Start a new Group", subtitle:"Pick a Goal", tab:"Groups"} },
  { path: '/groups', component: ShowGroups,
    meta: {
      title: "Find a Group"
    }
  },
  { path: '/group/:groupId', component: Group, name: 'group'},
  { path: '/group/:groupId/payout', component: Payout, meta: {title: "Group Payout"}},
  { path: '/group/:groupId/payout/receipt', component: PayoutReceipt, meta: {title: "Group Payout Receipt"}},
  { path: '/join', component: Join, meta: {title: "Join the Unbanked"}},
  { path: '/finish-join', component: FinishJoin, meta: {title: "Join the Unbanked"}},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `Unbanked - ${to.meta.title}`
  } else {
    document.title = 'Unbanked'
  }
  next()
})

Vue.use(VueRouter)

Vue.use(Buefy)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
