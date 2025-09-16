import { addTaskData, deleteTaskData } from "./taskService.js";
import { renderTasks } from "./domRenderer.js";
import { openEditModal, saveEditModal, closeEditModal } from "./modal.js";

export function initEvents() {
    document.getElementById("addTaskBtn").addEventListener("click", () => {
        const title = document.getElementById("taskTitle").value.trim();
        const desc = document.getElementById("taskDescription").value.trim();
        if (!title) return alert("Please enter a task title");
        addTaskData(title, desc);
        renderTasks();
        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDescription").value = "";
    });

    document.getElementById("taskTitle").addEventListener("keypress", (e) => {
        if (e.key === "Enter") document.getElementById("addTaskBtn").click();
    });

    document.getElementById("closeEditModal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeEditModal();
    });

    document.getElementById("saveEditBtn")?.addEventListener("click", saveEditModal);

    document.addEventListener("click", (e) => {
        const btn = e.target.closest("button");
        if (!btn) return;
        if (btn.dataset.action === "edit") openEditModal(btn.dataset.id);
        if (btn.dataset.action === "delete") {
            if (confirm("Delete this task?")) {
                deleteTaskData(btn.dataset.id);
                renderTasks();
            }
        }
    });
}
