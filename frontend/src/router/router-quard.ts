import router from '@/router'

// TODO: localStorage dan alinan token ve expires verilerine gore yapilacak daha sonra backend ile baglanacak
router.beforeEach((to, from, next) => {
    // to.name !== 'Login' && !'isAuthenticated' ? next({ name: 'Login' }) : next()
    // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    // else next()

})