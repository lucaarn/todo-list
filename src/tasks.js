import { computed, reactive } from 'vue'

const taskData = reactive({
    tasks: [
        {
            id: 1,
            title: 'Finish application',
            category: 'Work',
            completed: false,
        },
        {
            id: 2,
            title: 'Go shopping',
            category: 'Personal',
            completed: true,
        },
    ],
})

const allTasks = computed(() => taskData.tasks)
const completedTasks = computed(() =>
    taskData.tasks.filter((task) => task.completed)
)
const pendingTasks = computed(() =>
    taskData.tasks.filter((task) => !task.completed)
)

export { taskData, allTasks, completedTasks, pendingTasks }
