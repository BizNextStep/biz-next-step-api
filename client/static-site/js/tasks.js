document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/tasks')
    .then(response => response.json())
    .then(data => {
      const tasksList = document.getElementById('tasks-list');
      tasksList.innerHTML = '';
      data.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = `${task.task} - Due: ${task.dueDate}`;
        tasksList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error fetching tasks:', error);
    });
});

