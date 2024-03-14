import router from '@/router'
import { useAuthStore } from '@/stores/authStore'
import type { IAdmin } from '@/interfaces/auth/admin'

export const navigationGuard = async () => {
    const authStore = await useAuthStore()
    const auth: boolean = await authStore.isAuth
    const user: IAdmin | null = await authStore.user

    if (auth && user) {
        return true
    } else {
        router.push({ name: 'Login' }) 
        return false
    }
}





// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isAuthenticated()) {
//       next({ name: 'Login' })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

// router.beforeEach((to, from, next) => {
//     to.name !== 'Login' && !'isAuthenticated' ? next({ name: 'Login' }) : next()
//     if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//     else next()
// })
// const localStorageData = JSON.parse(localStorage.getItem('sb-epbtebamtqimsmucehpb-auth-token')!)
// if (localStorageData !== null) {
// const accessToken = localStorageData.access_token
// const tokenType = localStorageData.token_type
// const expiresIn = localStorageData.expires_in
// const expiresAt = localStorageData.expires_at
// const refreshToken = localStorageData.refresh_token
// const userId = localStorageData.user.id
// const userEmail = localStorageData.user.email

// console.log('Access Token:', accessToken)
// console.log('Token Type:', tokenType)
// console.log('Expires In:', expiresIn)
// console.log('Expires At:', expiresAt)
// console.log('Refresh Token:', refreshToken)
// console.log('User ID:', userId)
// console.log('User Email:', userEmail)
// }