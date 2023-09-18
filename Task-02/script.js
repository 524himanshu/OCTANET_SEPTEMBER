document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-button">Delete</button>
            `;

            taskList.appendChild(listItem);
            taskInput.value = "";

            // Add event listener to delete button
            const deleteButton = listItem.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
        }
    });
});
