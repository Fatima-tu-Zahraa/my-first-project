 const taskInput = document.getElementById("taskInput");
const addbtn = document.getElementById("addbtn");
const tasklist = document.getElementById("tasklist");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
    tasklist.innerHTML = "";
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            ${task}
            <button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">X</button>
        `;
        tasklist.appendChild(li);
    });
}

addbtn.addEventListener("click", () => {
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    showTasks();
});

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

showTasks();
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addbtn.click();
    }
});
