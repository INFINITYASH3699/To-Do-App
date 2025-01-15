import React from "react";

const TaskCard = ({ task, onCheck, onStar, onClick }) => {
  return (
    <div
      className="flex items-center justify-between bg-white p-4 rounded-md shadow-md hover:shadow-lg transition cursor-pointer"
      onClick={onClick} // Make the entire card clickable
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onCheck(task.id)}
        className="w-5 h-5"
      />

      {/* Task Name */}
      <span
        className={`flex-1 mx-4 ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.name}
      </span>

      {/* Star Icon for Important Task */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent the card click event from triggering
          onStar(task.id); // Toggle importance when clicked
        }}
        className="text-xl"
        aria-label={task.important ? "Unmark as important" : "Mark as important"}
      >
        {task.important ? (
          <span className="text-yellow-500">⭐</span> // Filled Star
        ) : (
          <span className="text-gray-400">☆</span> // Empty Star
        )}
      </button>
    </div>
  );
};

export default TaskCard;
