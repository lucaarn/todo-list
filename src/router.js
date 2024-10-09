import { createRouter, createWebHistory } from 'vue-router'
import AllTasks from './views/AllTasks.vue'
import CompletedTasks from './views/CompletedTasks.vue'
import PendingTasks from './views/PendingTasks.vue'

const routes = [
    { path: '/', component: AllTasks },
    { path: '/completed', component: CompletedTasks },
    { path: '/pending', component: PendingTasks },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
