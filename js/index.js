import { state } from "./state.js";
import { setTasks } from "./state.js";
import { generateId } from "./utils.js";
import { renderTasks } from "./domRenderer.js";
import { initEvents } from "./events.js";
import { initDragDrop } from "./dragDrop.js";

renderTasks();
initEvents();
initDragDrop();