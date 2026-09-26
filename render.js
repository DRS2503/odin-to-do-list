export let selectedProject = 0;

export function renderMain(object){
    //Set project header name
    const projectName = document.querySelector('.project-header');
    projectName.textContent = object.title;

    //copies the task list from object
    const taskList = object.getTaskList();

    //main container that all the tasks will go into
    const taskContainer = document.getElementById('task-container');
    taskContainer.textContent = '';
    
    //makes each card div and fills content
    for(const tasks in taskList){     
        //Adding task card container to the task container
        const taskCard = document.createElement('div');
        taskCard.id = tasks;
        taskCard.classList.add('task-card');
        taskContainer.append(taskCard);

        //Radio button and task header
        const taskNameDiv = document.createElement('div');
        const radioInput = document.createElement('input');
        const taskNameHeader = document.createElement('h2');
        taskNameDiv.classList.add('flex');
        radioInput.type = 'radio';
        taskNameHeader.textContent = taskList[tasks].title;
        taskCard.append(taskNameDiv);
        taskNameDiv.append(radioInput, taskNameHeader);

        //Date
        const taskContentContainer = document.createElement('div');
        const dateLabel = document.createElement('p');
        const dateData = document.createElement('p');
        taskContentContainer.classList.add('task-content-container');
        dateLabel.classList.add('label-text');
        dateData.classList.add('data-text');
        dateLabel.textContent = 'Target';
        dateData.textContent = taskList[tasks].date;
        taskCard.append(taskContentContainer);
        taskContentContainer.append(dateLabel, dateData);

        //Priority
        const taskContentContainer2 = document.createElement('div');
        const priorityLabel = document.createElement('p');
        const priorityData = document.createElement('p');
        taskContentContainer2.classList.add('task-content-container');
        priorityLabel.classList.add('label-text');
        priorityData.classList.add('data-text');
        priorityLabel.textContent = 'Priority';
        priorityData.textContent = taskList[tasks].priority;
        taskCard.append(taskContentContainer2);
        taskContentContainer2.append(priorityLabel, priorityData);

        //Drop down
        const taskContentContainer3 = document.createElement('div');
        const svgText = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>'
        taskContentContainer3.classList.add('task-content-container');
        taskCard.append(taskContentContainer3);
        taskContentContainer3.innerHTML = svgText;

        //event listener for drop down
    
    }

}

export function renderNav(objectList){
    const unorderedList = document.querySelector('ul');
    unorderedList.textContent = '';

    for(const project in objectList){
        const projectListItem = document.createElement('li');
        const projectButton = document.createElement('button');
        projectButton.id = project;
        projectButton.classList.add('nav-button');
        projectButton.textContent = objectList[project].title;;
        unorderedList.append(projectListItem);
        projectListItem.append(projectButton);

        projectButton.addEventListener('click', () => {
            const target = objectList[project];
            selectedProject = projectButton.id;
            renderMain(target);
        })
    }
}