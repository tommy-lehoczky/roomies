import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import ChoresBuddy from './components/ChoresBuddy.vue'
import SharedFridge from './components/SharedFridge.vue'
import PartyPlanner from './components/PartyPlanner.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: "/", component: Dashboard },
  { path: "/chores-buddy", component: ChoresBuddy },
  { path: "/shared-fridge", component: SharedFridge },
  { path: "/party-planner", component: PartyPlanner },
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
