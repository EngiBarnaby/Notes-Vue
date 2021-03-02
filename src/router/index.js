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
        path : 'notes2',
        name : "notes2",
        component : () => import('@/components/note/NoteList2.vue'),
        props : true,
        children : [
          {
            path : 'note2/NoteId:NoteId',
            name : "note2",
            component : () => import('@/components/note/NoteDetail2.vue'),
            props : true,
          },
        ]
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
      {
        path : "/test-note",
        component: () => import('@/components/note/TestNote.vue'),
      }
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
    path : "/projects",
    component : () => import('../views/Projects.vue'),
    children : [
      {
        path : "",
        name : "projects",
        component : () => import("../components/project/projectsList.vue")
      },
      {
        path : "project-detail/:projectId",
        name : "project-detail",
        component : () => import("../components/project/projectDetail.vue"),
        props : true,
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
      },
    ]
  },

  {
    path : "/profile",
    component: () => import('../views/Profile.vue'),
    children : [
      {
        path : "",
        name : "user-profile",
        component : () => import('@/components/profile/mainPage'),
      },
      {
        path : "profile-stats",
        name : "profile-stats",
        component : () => import('@/components/profile/profileStats'),
      },
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
      // {
      //   path: 'userProfile',
      //   name: 'userProfile',
      //   component: () => import('@/components/test/jwt-django-test.vue')
      // },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
