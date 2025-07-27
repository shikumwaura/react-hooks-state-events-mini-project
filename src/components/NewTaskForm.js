import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0] || "");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!text.trim()) return;
    onTaskFormSubmit({ text: text.trim(), category });
    setText("");
    setCategory(categories[0] || "");
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Task details"
          aria-label="Details"
          required
        />
      </label>

      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={handleCategoryChange}
          aria-label="Category"
          required
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
