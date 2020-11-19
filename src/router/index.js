import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/note',
    component: () => import('../views/Note.vue'),
    children : [
      {
        path : '',
        name : "categiries",
        component : () => import('@/components/note/CategoriesList.vue'),
      },
      {
        path : 'notes',
        name : "notes",
        component : () => import('@/components/note/NoteList.vue'),
        props : true,
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
