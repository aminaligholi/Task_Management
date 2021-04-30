import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import VueRouter from 'vue-router'
import {router} from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import '../public/Css/global.css'

Vue.use(VueRouter)
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el:'#app',
  store,
  router,


})
