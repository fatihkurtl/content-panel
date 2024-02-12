import { ref, onMounted } from 'vue'
import router from '@/router'

export default function useProgressBar() {
    const progress = ref<number>(0)

    onMounted(() => {
        const progressInterval = setInterval(() => {
            progress.value += 1
            if (progress.value >= 100) {
                clearInterval(progressInterval)
                progress.value = 0
            }
        }, 10)

        router.beforeEach((to, from, next) => {
            if (to.path !== from.path) {
                progress.value = 0
            }
            next()
        })

        router.afterEach(() => {
            progress.value = 0
        })
    })

    // onUnmounted(() => {
    //     router.beforeEach((to, from, next) => {}) // Clear router guards
    //     router.afterEach(() => {})
    // })

    return {
        progress
    }
}
