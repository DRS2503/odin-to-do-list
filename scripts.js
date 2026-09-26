import { renderMain, renderNav, selectedProject } from './render.js';

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
const projectForm = document.getElementById('project-form');
document.getElementById('new-project-btn').addEventListener('click', () => {
    projectDialog.showModal();
})

document.getElementById('project-reset-button').addEventListener('click', () => {
    projectForm.reset();
    projectDialog.close();
})

document.getElementById('project-submit-button').addEventListener('click', () => {
    const formData = new FormData(projectForm);
    const project1 = new project(formData.get('title'), formData.get('due'));
    projects.push(project1);
    renderNav(projects);
    projectForm.reset();
    projectDialog.close();
})





const taskDialog = document.querySelector('#task-dialog');
const taskForm = document.getElementById('task-form');
document.getElementById('new-task-btn').addEventListener('click', () => {
    taskDialog.showModal();
})

document.getElementById('task-reset-button').addEventListener('click', () => {
    taskForm.reset();
    taskDialog.close();
})

document.getElementById('task-submit-button').addEventListener('click', () => {
    const formData = new FormData(taskForm);
    const task1 = task(formData.get('title'), formData.get('target'), formData.get('priority'), formData.get('description'));
    projects[selectedProject].addTask(task1);
    renderMain(projects[selectedProject]);
    taskForm.reset();
    taskDialog.close();
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


