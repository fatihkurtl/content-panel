import { supabase } from '@/plugins/supabaseClient'

class AuthService {
    async login(__email: string, __password: string): Promise<boolean> {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: __email,
            password: __password
        })
        console.log(data)
        if (error) {
            return false
        } else {
            return true
        }
    }

    async logout(): Promise<boolean> {
       await supabase.auth.signOut()
       return true
    }

    async getUser(): Promise<any> {
        const { data } = await supabase.auth.getUser()
        const user = data.user
        return {
            id: user?.id,
            displayName: user?.email
        }
    }

    async isAuth(): Promise<boolean> {
        const { data } = await supabase.auth.getSession()
        if (data.session) {
            return true
        } else {
            return false
        }
    }
}

export default new AuthService()