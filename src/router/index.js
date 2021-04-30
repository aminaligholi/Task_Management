import Vue from 'vue';
import {store} from '../store';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import loginPage from '../pages/loginPage.vue'
import homePage from '../pages/homePage.vue'



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
            title:'login',
            headerType:'Title'
        }
      
    },
    {
        path:'/homePage',
        component:homePage,
        name:'home',
        meta:{
            title:'homePage',
            headerType:'Menu'
        }
      
    }
]

export const router = new VueRouter({
    routes,
    mode:'history'
  })
   router.beforeEach((to, from, next) => {
    let Authentication =auth(to);
    store.state.headerType=to.meta.headerType;
    console.log( store.state.headerType);
    console.log( to.meta.headerType);
    document.title= to.meta.title?to.meta.title:'Task-Management';
   if(Authentication){
       next();
   }else{
       next({name:'login'})
   }
  })