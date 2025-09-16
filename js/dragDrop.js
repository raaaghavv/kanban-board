import { findTask, updateTask } from "./taskService.js";
import { renderTasks } from "./domRenderer.js";

export function initDragDrop() {
    let draggedTask = null;

    document.addEventListener("dragstart", (e) => {
        if (e.target.classList.contains("task")) {
            draggedTask = e.target;
            e.target.classList.add("dragging");
        }
    });

    document.addEventListener("dragend", (e) => {
        if (e.target.classList.contains("task")) {
            e.target.classList.remove("dragging");
            document.querySelectorAll(".column").forEach((col) =>
                col.classList.remove("drag-over")
            );
        }
    });

    document.addEventListener("dragover", (e) => {
        e.preventDefault()
        if (e.target.classList.contains("task")) {
            e.target.classList.remove("dragging");
            document.querySelectorAll(".column").forEach((col) =>
                col.classList.remove("drag-over")
            );
        }
    });

    document.addEventListener("dragenter", (e) => {
        const column = e.target.closest(".column");
        if (column) column.classList.add("drag-over");
    });

    document.addEventListener("dragleave", (e) => {
        if (
            e.target.classList.contains("column") &&
            !e.target.contains(e.relatedTarget)
        ) {
            e.target.classList.remove("drag-over");
        }
    });

    document.addEventListener("drop", (e) => {
        e.preventDefault();
        const column = e.target.closest(".column");
        if (column && draggedTask) {
            const newStatus = column.dataset.status;
            const taskId = draggedTask.dataset.id;
            const task = findTask(taskId);
            if (task && task.status !== newStatus) {
                updateTask(taskId, { status: newStatus });
                renderTasks();
            }
        }
        draggedTask = null;
    });
}
