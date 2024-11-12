function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (input.value.trim() === '') return;

    const li = document.createElement('li');
    li.className = 'task-item';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed');
    });

    const taskText = document.createElement('span');
    taskText.textContent = input.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    input.value = '';
}

// Add ability to submit with Enter key
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
}); 