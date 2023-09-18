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
            listItem.innerHTML = `
                <span>${taskText}</span>
                <span>Deadline: ${deadline}</span>
                <span>Priority: ${priority}</span>
                <span>Labels: ${labels.join(', ')}</span>
            `;

            taskList.appendChild(listItem);
            taskInput.value = "";
            deadlineInput.value = "";
            priorityInput.value = "low";
            labelInput.value = "";
        }
    });
});
