import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/admin/Home.vue'
import Products from '@/pages/admin/product/Products.vue'
import Reviews from '@/pages/admin/Reviews.vue'
import Customers from '@/pages/admin/Customers.vue'
import Invoices from '@/pages/admin/Invoices.vue'
import Reports from '@/pages/admin/Reports.vue'
import Settings from '@/pages/admin/Settings.vue'
import Login from '@/pages/auth/Login.vue'
import ProductCreate from '@/pages/admin/product/ProductCreate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Ana sayfa',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/urunler',
      name: 'Ürünler',
      component: Products,
      meta: { requiresAuth: true }
    },
    {
      path: '/urun-yukleme',
      name: 'Ürün Ekle',
      component: ProductCreate,
      meta: { requiresAuth: true }
    },
    {
      path: '/incelemeler',
      name: 'İncelemeler',
      component: Reviews,
      meta: { requiresAuth: true }
    },
    {
      path: '/musteriler',
      name: 'Müşteriler',
      component: Customers,
      meta: { requiresAuth: true }
    },
    {
      path: '/faturalar',
      name: 'Faturalar',
      component: Invoices,
      meta: { requiresAuth: true }
    },
    {
      path: '/raporlar',
      name: 'Raporlar',
      component: Reports,
      meta: { requiresAuth: true }
    },
    {
      path: '/ayarlar',
      name: 'Ayarlar',
      component: Settings,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

export default router
