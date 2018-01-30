// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Jquery from 'jquery'
import Bootstrap from 'bootstrap'
import './assets/styles/global.styl'
import './assets/images/bg.jpg'
Vue.config.productionTip = false

const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
  render: (h)=> h(App)
}).$mount(root)
Vue.use(Jquery)
Vue.use(Bootstrap);
