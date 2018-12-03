import Vue from 'vue'
import Router from 'vue-router'
import salarytip from '@/components/salarytip'
import index from '@/components/index'
import ceshi from '@/components/ceshi'
import tip from '@/components/tip'
import toolbar from '@/components/toolbar'
import tiph from '@/components/tiph'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index,  
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: ceshi, 
    },
    {
      path: '/ceshi/salarytip',
      name: 'salarytip',
      component: salarytip
    },
    {
      path: '/tip',
      name: 'tip',
      component: tip,
    },
    {
      path: '/tip/tiph',
      name: 'tiph',
      component: tiph
    }, 
    {
      path: '/toolbar',
      name: 'toolbar',
      component: toolbar
    },
    
  ]
})
