import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',              name: 'home',     component: () => import('../views/home.vue') },
  { path: '/catalogo',      name: 'catalogo', component: () => import('../views/Catalogo.vue') },
  { path: '/producto/:id',  name: 'producto', component: () => import('../views/detalleProducto.vue') },
  { path: '/login',         name: 'login',    component: () => import('../views/login.vue') },
  { path: '/register',      name: 'register', component: () => import('../views/Registrer.vue') },
  { path: '/catalago/carrito', name: 'catalago-carrito', component: () => import('../views/carrito.vue')},
  { path: '/historial/cotizaciones', name: 'historial', component: () => import('../views/historialCotizacion.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router