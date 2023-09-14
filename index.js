import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ConceptsView from '../views/ConceptsView.vue'
import CrudView from '../views/CrudView.vue'
import ExamplePage from '../views/ExamplePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/concepts',
      name: 'concepts',
      component: ConceptsView
    },
    {
      path: '/crud',
      name: 'crud',
      component: CrudView
    },
    {
      path: '/new',
      name: 'new',
      component: ExamplePage
    },
  ]
})

export default router
