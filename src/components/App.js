import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES } from "../data";
import { TASKS as initialTasks } from "../data";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Update selected category filter
  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  // Add new task
  function handleTaskFormSubmit(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  // Delete task by text
  function handleDeleteTask(taskText) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.text !== taskText));
  }

  // Filter tasks based on selected category
  const tasksToDisplay =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />

      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />

      <TaskList tasks={tasksToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
