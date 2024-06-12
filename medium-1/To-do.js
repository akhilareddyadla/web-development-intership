document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('taskbtn');
    const taskInput = document.getElementById('addtask');
    const taskList = document.getElementById('tasklist');

    addTaskButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'complete-btn';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit-btn';
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit your task:', li.firstChild.textContent);
            if (newTaskText) {
                li.firstChild.textContent = newTaskText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(completeButton);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
});
