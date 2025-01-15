import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, viewMode, onCheck, onStar, onClickTask }) => {
  return (
    <div
      className={`${
        viewMode === "list" ? "grid grid-cols-1 gap-4" : "grid grid-cols-3 gap-4"
      }`}
    >
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onCheck={onCheck}
          onStar={onStar}
          onClick={() => onClickTask(task)} // Pass task to handle task click
        />
      ))}
    </div>
  );
};

export default TaskList;
