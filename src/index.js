document.addEventListener('DOMContentLoaded', () => {
  // Select the form and task list elements
  const taskForm = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  // Add an event listener for form submission
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    // Get input values
    const description = document.getElementById('new-task-description').value.trim();
    const user = document.getElementById('task-user').value.trim();
    const duration = document.getElementById('task-duration').value.trim();
    const dueDate = document.getElementById('task-date').value.trim();
    const priorityLevel = document.getElementById('priority-dropdown').value;

    // Validate input
    if (description === "") {
      alert('Task description cannot be empty!');
      return;
    }

    // Create task item
    const taskItem = document.createElement('li');

    // Create a span to display task details
    const taskDetails = document.createElement('span');
    taskDetails.innerHTML = `
      <strong>${description}</strong> 
      (Assigned to: ${user || 'N/A'}, Duration: ${duration || 'N/A'} mins, Due: ${dueDate || 'N/A'})
    `;

    // Apply color based on priority level
    if (priorityLevel === 'High') {
      taskDetails.style.color = 'red';
    } else if (priorityLevel === 'Medium') {
      taskDetails.style.color = 'orange';
    } else if (priorityLevel === 'Low') {
      taskDetails.style.color = 'green';
    }

    // Create Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    // Create Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';

    // Edit button functionality
    editButton.addEventListener('click', () => {
      const editDescription = prompt('Edit description:', description);
      const editUser = prompt('Edit assigned user:', user);
      const editDuration = prompt('Edit duration (mins):', duration);
      const editDueDate = prompt('Edit due date:', dueDate);

      if (editDescription) {
        taskDetails.innerHTML = `
          <strong>${editDescription}</strong> 
          (Assigned to: ${editUser || 'N/A'}, Duration: ${editDuration || 'N/A'} mins, Due: ${editDueDate || 'N/A'})
        `;
      }
    });

    // Delete button functionality
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    // Append elements to the task item
    taskItem.appendChild(taskDetails);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);

    // Add task item to the task list
    taskList.appendChild(taskItem);

    // Clear form fields
    taskForm.reset();
  });
});
