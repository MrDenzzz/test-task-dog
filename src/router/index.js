import Vue from 'vue'
import Router from 'vue-router'
import ListDogs from '@/components/ListDogs'
import ListFavourites from '@/components/ListFavourites'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ListAllDogs',
      component: ListDogs
    },
    {
      path: '/favourites',
      name: 'ListFavourites',
      component: ListFavourites
    },
    {
      path: '/:breed',
      name: 'ListBreedDogs',
      component: ListDogs
    }
  ]
})
