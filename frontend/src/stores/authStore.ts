import { ref } from 'vue'
import { defineStore } from 'pinia'
import authServices from '@/services/auth/authServices'

export const useAuthStore = defineStore('authStore', () => {
    const user = authServices.getUser()
    const isAuth = authServices.isAuth()

    const login = async (email: string, password: string) => {
        return await authServices.login(email, password)
    }

    const logout = async () => {
        await authServices.logout()
    }

    return {
        user,
        isAuth,
        login,
        logout,
    }
})