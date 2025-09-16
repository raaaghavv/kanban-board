import { state, setTasks } from "./state.js";
import { generateId } from "./utils.js";

export function findTask(id) {
  return state.tasks.find(t => t.id === id);
}

export function addTaskData(title, description) {
  const newTask = {
    id: generateId(),
    title,
    description,
    status: "todo",
    createdAt: new Date().toISOString()
  };
  setTasks([newTask, ...state.tasks]);
  return newTask;
}

export function updateTask(id, updates) {
  const updated = state.tasks.map(t =>
    t.id === id ? { ...t, ...updates, updatedAt: new Date().toISOString() } : t
  );
  setTasks(updated);
}

export function deleteTaskData(id) {
  setTasks(state.tasks.filter(t => t.id !== id));
}
