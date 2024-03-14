import { useAuthStore } from '@/stores/authStore'
import type { IAdmin } from '@/interfaces/auth/admin'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export const navigationGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const authStore = await useAuthStore()
    const auth: boolean = await authStore.isAuth
    const user: IAdmin | null = await authStore.user

    if (to.name === 'Login' && auth && user) {
        next({ name: 'Ana Sayfa' })
        return false
    }

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (auth && user) {
            next()  
        } else {
            next({ name: 'Login' })  
        }
    } else {
        next()  
    }
}