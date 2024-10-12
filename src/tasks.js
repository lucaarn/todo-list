import { computed, reactive, watch } from 'vue'

const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []

const taskData = reactive({
    tasks: storedTasks.length
        ? storedTasks
        : [
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

watch(
    () => taskData.tasks,
    (newTasks) => {
        localStorage.setItem('tasks', JSON.stringify(newTasks))
    },
    { deep: true }
)

const allTasks = computed(() => taskData.tasks)
const completedTasks = computed(() =>
    taskData.tasks.filter((task) => task.completed)
)
const pendingTasks = computed(() =>
    taskData.tasks.filter((task) => !task.completed)
)

export { taskData, allTasks, completedTasks, pendingTasks }
