import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/contact.vue'
import AproposView from '../views/apropos.vue'
import ProjetsView from '../views/projets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/apropos',
      name: 'Apropos',
      component: AproposView
    },
    {
      path: '/projets',
      name: 'Projets',
      component: ProjetsView
    },
  ]
})

export default router
