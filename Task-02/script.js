document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const deadlineInput = document.getElementById("deadline-input");
    const priorityInput = document.getElementById("priority-input");
    const labelInput = document.getElementById("label-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const deadline = deadlineInput.value;
        const priority = priorityInput.value;
        const labels = labelInput.value.split(',');

        if (taskText !== "") {
            const listItem = document.createElement("li");
            const progress = document.createElement("progress");
            progress.max = 100; // Set the maximum progress value
            progress.value = 0; // Initial progress value

            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <span class="deadline">Deadline: ${deadline}</span>
                <span class="priority">Priority: ${priority}</span>
                <span class="labels">Labels: ${labels.join(', ')}</span>
            `;

            listItem.appendChild(progress); // Add the progress element
            taskList.appendChild(listItem);
            taskInput.value = "";
            deadlineInput.value = "";
            priorityInput.value = "low";
            labelInput.value = "";
        }
    });
});
