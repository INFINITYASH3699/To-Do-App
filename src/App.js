import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState("list");
  const [isDarkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode === "true";
  });
  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy groceries", completed: false, important: false },
    { id: 2, name: "Clean the house", completed: true, important: true },
    { id: 3, name: "Prepare meeting notes", completed: false, important: false },
  ]);
  const [selectedTask, setSelectedTask] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleCheck = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleStar = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, important: !task.important } : task
      )
    );
  };

  const handleAddTask = (taskName) => {
    const newTask = {
      id: tasks.length + 1,
      name: taskName,
      completed: false,
      important: false,
      createdOn: new Date().toLocaleDateString(),
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCloseDetails = () => {
    setSelectedTask(null);
  };

  const handleUpdateTask = (id, updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setSelectedTask(null);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setDarkMode(!isDarkMode);

  // Adjust width based on sidebar and task details state
  const sidebarWidth = isSidebarOpen ? "250px" : "0px";
  const taskDetailsWidth = selectedTask ? "400px" : "0px"; // Task details panel width
  const mainContentWidth = selectedTask
    ? `calc(100% - ${taskDetailsWidth} - ${sidebarWidth})` // Shrink for task details panel
    : `calc(100% - ${sidebarWidth})`; // Normal width when task details is not open

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <Navbar
        onToggleSidebar={toggleSidebar}
        onToggleTheme={toggleTheme}
        onChangeView={setViewMode}
        isDarkMode={isDarkMode}
      />

      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          user={{ name: "Yash", profilePic: "assets/Profile.png" }}
          taskStats={{
            pending: tasks.filter((t) => !t.completed).length,
            completedPercentage:
              (tasks.filter((t) => t.completed).length / tasks.length) * 100,
          }}
        />
        <main
          className="flex-1 p-4 relative transition-all"
          style={{
            marginLeft: sidebarWidth, // Resizing when the sidebar is open
            width: mainContentWidth, // Resizing when task details or view is changed
          }}
        >
          <h1 className="text-2xl font-bold mb-4">
            {viewMode === "list" ? "Tasks (List View)" : "Tasks (Grid View)"}
          </h1>
          <AddTask onAdd={handleAddTask} />
          <TaskList
            tasks={tasks}
            viewMode={viewMode}
            onCheck={handleCheck}
            onStar={handleStar}
            onClickTask={handleTaskClick}
          />
          {selectedTask && (
            <div
              className="task-details-panel"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: taskDetailsWidth,
                height: "100vh",
                backgroundColor: "#f5f5f5",
                zIndex: 1000,
                transition: "right 0.3s ease-in-out",
                right: selectedTask ? 0 : "-400px", // Slide in/out based on task selection
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Shadow for styling
              }}
            >
              <TaskDetails
                task={selectedTask}
                onClose={handleCloseDetails}
                onToggleComplete={handleCheck}
                onDelete={handleDeleteTask}
                onUpdateTask={handleUpdateTask}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
