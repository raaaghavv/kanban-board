import { state } from "./state.js";
import { setEditingTaskId } from "./state.js";
import { findTask, updateTask } from "./taskService.js";
import { renderTasks } from "./domRenderer.js";

export function openEditModal(id) {
    const task = findTask(id);
    if (!task) return;
    setEditingTaskId(id);
    document.getElementById("editTitle").value = task.title;
    document.getElementById("editDescription").value = task.description || "";
    document.getElementById("editModal").classList.add("active");
}

export function closeEditModal() {
    document.getElementById("editModal").classList.remove("active");
    setEditingTaskId(null);
}

export function saveEditModal() {
    const title = document.getElementById("editTitle").value.trim();
    const description = document.getElementById("editDescription").value.trim();
    if (!title) return alert("Please enter a task title");
    updateTask(state.editingTaskId, { title, description });
    renderTasks();
    closeEditModal();
}
