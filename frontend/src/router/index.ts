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
import { navigationGuard } from '@/router/router-quard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
      meta: { requiresAuth: true }
    },
    {
      path: '/product-add',
      name: 'Add Product',
      component: ProductCreate,
      meta: { requiresAuth: true }
    },
    {
      path: '/reviews',
      name: 'Reviews',
      component: Reviews,
      meta: { requiresAuth: true }
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers,
      meta: { requiresAuth: true }
    },
    {
      path: '/invoices',
      name: 'Invoices',
      component: Invoices,
      meta: { requiresAuth: true }
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'Settings',
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

router.beforeEach(navigationGuard)


export default router
