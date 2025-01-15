import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === "") return;

    onAdd(taskName);
    setTaskName(""); // Clear the input field
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between bg-white p-4 mb-8 rounded-md shadow-md hover:shadow-lg transition"
    >
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 border-none outline-none bg-transparent text-gray-800"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
