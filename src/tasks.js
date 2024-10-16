import { computed, reactive, watch } from 'vue'

const storedTasks = JSON.parse(localStorage.getItem('tasks')) || []

const taskData = reactive({
    tasks: storedTasks.length
        ? storedTasks
        : [
              {
                  id: crypto.randomUUID(),
                  title: 'Finish application',
                  category: 'Work',
                  dueDate: new Date('2024-10-17'),
                  completed: false,
              },
              {
                  id: crypto.randomUUID(),
                  title: 'Go shopping',
                  category: 'Personal',
                  dueDate: new Date('2024-10-18'),
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
