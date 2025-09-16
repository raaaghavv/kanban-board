import { state } from "./state.js";

export function renderTasks() {
  const columns = {
    todo: document.getElementById("todo-tasks"),
    inprogress: document.getElementById("inprogress-tasks"),
    done: document.getElementById("done-tasks")
  };

  ["todo", "inprogress", "done"].forEach(status => {
    const filtered = state.tasks.filter(t => t.status === status);
    columns[status].innerHTML = filtered.length
      ? filtered.map(createTaskCard).join("")
      : `<div class="empty-message">No ${status} tasks</div>`;
  });
}

function createTaskCard(task) {
  return `
    <div class="task" draggable="true" data-id="${task.id}">
      <div class="task-title">${task.title}</div>
      ${task.description ? `<div class="task-description">${task.description}</div>` : ""}
      <div class="task-actions">
        <button class="btn btn-edit btn-small" data-action="edit" data-id="${task.id}">Edit</button>
        <button class="btn btn-delete btn-small" data-action="delete" data-id="${task.id}">Delete</button>
      </div>
    </div>
  `;
}
