import { renderMain, renderNav } from './render.js';

const projects = [];

function project(title, date){
    const taskList = []

    const getTaskList = () =>{
        return taskList
    }

    const addTask = (task) => {
        taskList.push(task)
        //Render Again
    }

    const removeTask = (index) => {
        taskList.splice(index, 1)
        //Render Again
    }

    return { title, date, addTask, removeTask, getTaskList }
}

function task(title, date, priority, description){
    return {title, date, priority, description};
}

const projectDialog = document.getElementById('project-dialog');
const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', () => {
    projectDialog.showModal();
})

const newTaskBtn = document.getElementById('new-task-btn');
newTaskBtn.addEventListener('click', () => {
    console.log('New Task Clicked');
})


/* Place Holders */
const project1 = project('Home Chores', 'none');
const project2 = project('Work', 'none');

const task1 = task('Dishes', 'today', 'high', 'take dishes out and reload dishwasher');
const task2 = task('Mow The Lawn', 'tomorrow', 'Low', 'Cut the grass its getting long');
const task3 = task('Dishes', 'today', 'high', 'take dishes out and reload dishwasher');
const task4 = task('Mow The Lawn', 'tomorrow', 'Low', 'Cut the grass its getting long');

project1.addTask(task1);
project1.addTask(task2);
project1.addTask(task3);
project1.addTask(task4);

project2.addTask(task4);
project2.addTask(task1);

projects.push(project1, project2);

renderNav(projects);
renderMain(projects[0]);


