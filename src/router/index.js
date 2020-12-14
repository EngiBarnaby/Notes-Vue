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
      },
      {
        path : 'note',
        name : "note",
        component : () => import('@/components/note/NoteDetail.vue'),
        props : true,
      },
      {
        path : 'add-note',
        name : "add-note",
        component : () => import('@/components/note/AddNote.vue'),
        props : true,
      },
    ]
  },

  {
    path: '/todo',
    component: () => import('../views/Todo.vue'),
    children : [
      {
        path : '',
        name : "todo-list",
        component : () => import('@/components/todo/todoList.vue'),
      }
    ]
  },

  {
    path : "/account",
    name : "account",
    component: () => import('../views/Account.vue'),
    children : [
      {
        path : "login",
        name : "login",
        component : () => import('@/components/account/loginUser.vue'),
      },

      {
        path : "register",
        name : "register",
        component : () => import('@/components/account/registerUser.vue'),
      }
    ]
  },

  {
    path: '/test',
    component: () => import('../views/Test.vue'),
    children : [
      {
        path: '',
        name: 'instanceAxious',
        component: () => import('@/components/test/instanceAxios.vue')
      },
      {
        path: 'userProfile',
        name: 'userProfile',
        component: () => import('@/components/test/jwt-django-test.vue')
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
