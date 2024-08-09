
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from './views/LoginPage.vue'
import RegistrationPage from './views/RegistrationPage.vue'



const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/Registrar',
    name: 'RegistrarAcesso',
    component: RegistrationPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
