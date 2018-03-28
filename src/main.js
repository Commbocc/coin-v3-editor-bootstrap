// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SidebarIcons from './components/SidebarIcons.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  el: '#vueapp',
  render: h => h(App)
})

new Vue({
  el: '#sidebar',
  render: h => h(SidebarIcons)
})
