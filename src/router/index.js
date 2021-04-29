import Vue from 'vue';
import {store} from '../store';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import loginPage from '../pages/loginPage.vue'



function auth(to){
    const login=to.path=="/login"? true:store.state.Authentication
    return login
}

 const routes =[
    {
        path:'/login',
        component:loginPage,
        name:'login',
        meta:{
            title:'hi',
        }
      
    }
]

export const router = new VueRouter({
    routes,
    mode:'history'
  })
  router.beforeEach((to, from, next) => {
    let auuth =auth(to)
    console.log(to);
    document.title= to.meta.title?to.meta.title:'Task-Management'
   if(auuth){
       next();
   }else{
       router.push('/login')
   }
  })