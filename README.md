# Kanban Board To-Do App

## Make your first To-Do: [Open](https://kanbanto-do.netlify.app/)

A lightweight Kanban board built with HTML, CSS, and vanilla JavaScript.
Tasks are stored in localStorage so they persist across page refreshes.

## ✨ Features

- Add, edit, delete tasks
- Drag & drop between Todo / In-Progress / Done columns
- LocalStorage persistence
- Simple modular ES-module architecture (no frameworks)

## 📁 Project Structure

```
kanban-board/
├── css/
│   └── style.css
├── js/
│   ├── index.js        # App entry point
│   ├── state.js        # Global state & localStorage
│   ├── taskService.js  # Add/Edit/Delete helpers
│   ├── domRenderer.js  # DOM rendering
│   ├── events.js       # UI event bindings
│   ├── modal.js        # Edit modal logic
│   ├── dragDrop.js     # Drag & drop handling
│   └── utils.js        # Small utilities (ID generator)
├── index.html          # Main HTML entry point
└── README.md
```

## 🛠️ Development Notes

### State Management

- All app data lives in a shared state object (`state.tasks`)
- Always update tasks through `setTasks()` to keep DOM and localStorage in sync

### No Frameworks

- This is pure JS—no React/Vue
- All UI updates are triggered manually via `renderTasks()`
