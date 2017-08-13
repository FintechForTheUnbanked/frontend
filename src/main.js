import Vue from 'vue'
import Buefy from 'buefy'

import App from './App.vue'

import Home from './Home.vue'
import Settings from './Settings.vue'

import CreateGroup from './Groups/Create.vue'
import ShowGroups from './Groups/Show.vue'
<<<<<<< HEAD
import CreateGroupGoal from './Groups/Create.Goal.vue'
import CreateGroupInvitation from './Groups/Create.Invitation.vue'
=======
>>>>>>> 9a81dcf79a0ee2bbf67189d8fb4ae899a01a8ac4
import Group from './Groups/ShowGroup.vue'
import Join from './views/Join.vue'
import FinishJoin from './views/FinishJoin.vue'

import Dashboard from './Dashboard.vue'
import Groupdash from './Groupdash.vue'
import Invite from './Groups/Invite.vue'

import VueRouter from 'vue-router'

import CreateGroupGoal from './Groups/Create.Goal.vue'

import Payout from './Groups/Payout.vue'
import PayoutReceipt from './Groups/PayoutReceipt.vue'

const routes = [
  { path: '/home'    , component: Home, meta:{tab:"Home"}},
  { path: '/settings', component: Settings },


  { path: '/groups/create', component: CreateGroup, meta:{title: "Start a new Group", tab:"Groups"} },
  { path: '/groups/create/goal', component: CreateGroupGoal, meta:{title: "Start a new Group", subtitle:"Pick a Goal", tab:"Groups"} },
<<<<<<< HEAD
  { path: '/groups/create/invitation', component: CreateGroupInvitation, meta:{title: "Start a new Group", subtitle:"Invite friends", tab:"Groups"} },
=======
>>>>>>> 9a81dcf79a0ee2bbf67189d8fb4ae899a01a8ac4
  { path: '/groups', component: ShowGroups,
    meta: {
      title: "Find a Group"
    }
  },
  { path: '/group/:groupId', component: Group, name: 'group'},
  { path: '/group/:groupId/payout', component: Payout, meta: {title: "Group Payout"}},
  { path: '/group/:groupId/payout/receipt', component: PayoutReceipt, meta: {title: "Group Payout Receipt"}},
  { path: '/group/:groupId/invite', component: Invite, meta:{title: "Invite Members", tab:"Groups"} },
  { path: '/groupdash', component: Groupdash },
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
