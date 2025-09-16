export const state = {
  tasks: JSON.parse(localStorage.getItem("kanban-tasks")) || [],
  editingTaskId: null
};

export function setTasks(newTasks) {
  state.tasks = newTasks;
  saveTasks();
}

export function saveTasks() {
  localStorage.setItem("kanban-tasks", JSON.stringify(state.tasks));
}

export function setEditingTaskId(id) {
  state.editingTaskId = id;
}
