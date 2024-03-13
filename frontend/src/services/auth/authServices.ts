import { supabase } from '@/plugins/supabaseClient'
import type { IAdmin } from '@/interfaces/auth/admin'

class AuthService {
    async login(__email: string, __password: string): Promise<boolean> {
        const { error } = await supabase.auth.signInWithPassword({
            email: __email,
            password: __password
        })
        if (error) {
            return false
        } else {            
            location.href = '/'
            return true
        }
    }

    async logout(): Promise<boolean> {
       await supabase.auth.signOut()
       return true
    }

    async getUser(): Promise<IAdmin | null> {
        const { data } = await supabase.auth.getUser()
        const user = data?.user
        return {
            id: user?.id,
            displayName: user?.email!
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