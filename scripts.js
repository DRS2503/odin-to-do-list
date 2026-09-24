const projects = [];

function project(title, date){
    const taskList = []

    const getTaskList = () =>{
        return taskList
    }

    const addTask = (object) => {
        taskList.push(object)
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

function render(object){
    const taskList = object.getTaskList();
    const taskContainer = document.getElementById('task-container');
    
    for(const tasks in taskList){     
        //Adding task card container to the task container
        const taskCard = document.createElement('div');
        taskCard.id = tasks;
        taskCard.classList.add('task-card');
        taskContainer.append(taskCard);

        //Radio button and task header (Inner Left)
        const taskNameDiv = document.createElement('div');
        const radioInput = document.createElement('input');
        const taskNameHeader = document.createElement('h2');
        taskNameDiv.classList.add('flex');
        radioInput.type = 'radio'
        taskNameHeader.textContent = taskList[tasks].title;
        taskCard.append(taskNameDiv);
        taskNameDiv.append(radioInput, taskNameHeader);

        //Date (inner center)
        const taskContentContainer = document.createElement('div')
        const dateLabel = document.createElement('p');
        const dateData = document.createElement('p');
        taskContentContainer.classList.add('task-content-container');
        dateLabel.classList.add('label-text');
        dateData.classList.add('data-text');
        dateLabel.textContent = 'Target';
        dateData.textContent = taskList[tasks].date
        taskCard.append(taskContentContainer);
        taskContentContainer.append(dateLabel, dateData);

        const taskContentContainer2 = document.createElement('div')
        const priorityLabel = document.createElement('p');
        const priorityData = document.createElement('p');
        taskContentContainer.classList.add('task-content-container2');
        priorityLabel.classList.add('label-text');
        priorityData.classList.add('data-text');
        priorityLabel.textContent = 'Priority';
        priorityData.textContent = taskList[tasks].priority;
        taskCard.append(taskContentContainer2);
        taskContentContainer2.append(priorityLabel, priorityData);


    
    }

}

const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', () => {
    console.log('New Project Clicked');
})

const newTaskBtn = document.getElementById('new-task-btn');
newTaskBtn.addEventListener('click', () => {
    console.log('New Task Clicked');
})


const project1 = project('Home Chores', 'none');

const task1 = task('Dishes', 'today', 'high', 'take dishes out and reload dishwasher');
const task2 = task('Mow The Lawn', 'tomorrow', 'Low', 'Cut the grass its getting long');

project1.addTask(task1);
project1.addTask(task2);

render(project1);


