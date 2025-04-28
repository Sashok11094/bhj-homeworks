const taskInput = document.querySelector('.tasks__input')
const tasksAdd = document.querySelector('.tasks__add')
const tasksList = document.querySelector('.tasks__list')

tasksAdd.addEventListener('click', addTask)

taskInput.addEventListener('keypress', (e) => {
    if(e.key === 'enter') {
        addTask()
    }
})


function createNewTaskElement (taskText) {
    const task = document.createElement('div')
    task.className = 'task'

    const taskTitle = document.createElement('div')
    taskTitle.className = 'task__title'
    taskTitle.textContent = taskText

    const taskRemove = document.createElement('a')
    taskRemove.className = 'task__remove'
    taskRemove.innerHTML = '&times'
    taskRemove.addEventListener('click', () => task.remove())

    task.appendChild(taskTitle)
    task.appendChild(taskRemove)
    return task
} 

function addTask (e) {
    e.preventDefault()
    const taskText = taskInput.value.trim()
    if (taskText) {
        const taskEl = createNewTaskElement(taskText)
        tasksList.appendChild(taskEl)
        taskInput.value = ''
     }
}