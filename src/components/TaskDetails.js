import React from "react";

const TaskDetails = ({
  task,
  onClose,
  onToggleComplete,
  onDelete,
  onUpdateTask,
}) => {
  if (!task) return null;

  const handleUpdate = (field, value) => {
    onUpdateTask(task.id, { ...task, [field]: value });
  };

  return (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
      >
        ✖
      </button>
      {/* Task Title */}
      <h2 className="text-xl font-semibold mb-4">{task.name}</h2>

      {/* Mark as Completed */}
      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="w-4 h-4"
          />
          <span>Mark as Completed</span>
        </label>
      </div>

      {/* Mark as Important */}
      <div className="mb-4">
        <button
          onClick={() => handleUpdate("important", !task.important)}
          className={`px-4 py-2 rounded ${
            task.important
              ? "bg-yellow-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {task.important ? "Unmark as Important" : "Mark as Important"}
        </button>
      </div>

      {/* Add Notes */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Add Notes:</h3>
        <textarea
          value={task.notes || ""}
          onChange={(e) => handleUpdate("notes", e.target.value)}
          placeholder="Write notes here..."
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Set Reminder */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Set Reminder:</h3>
        <input
          type="datetime-local"
          value={task.reminder || ""}
          onChange={(e) => handleUpdate("reminder", e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Set Due Date */}
      <div className="mb-4">
        <h3 className="font-medium mb-2">Set Due Date:</h3>
        <input
          type="date"
          value={task.dueDate || ""}
          onChange={(e) => handleUpdate("dueDate", e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Task Created Date and Delete Button */}
      <div className="flex justify-between mt-6">
        <span className="text-gray-600">
          Created On: {task.createdOn || "Unknown"}
        </span>
        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Delete Task
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
