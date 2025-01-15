import React, { useState, useEffect } from "react";

const Navbar = ({ onToggleSidebar, onToggleTheme, onChangeView, isDarkMode }) => {
  const [currentView, setCurrentView] = useState("list");

  const handleViewToggle = () => {
    const newView = currentView === "list" ? "grid" : "list";
    setCurrentView(newView);
    onChangeView(newView);
  };

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-gray-200 dark:bg-gray-800">
      {/* Hamburger Icon */}
      <button
        className="text-2xl"
        onClick={onToggleSidebar}
        aria-label="Toggle Sidebar"
      >
        ☰
      </button>

      {/* Logo */}
      <h1 className="text-lg font-bold text-gray-800 dark:text-white">ToDo</h1>

      {/* Right-Side Icons */}
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <button className="text-gray-800 dark:text-white text-xl" aria-label="Search">
          🔍
        </button>

        {/* View Options */}
        <button
          className="text-gray-800 dark:text-white text-xl"
          onClick={handleViewToggle}
          aria-label={currentView === "list" ? "Switch to Grid View" : "Switch to List View"}
        >
          {currentView === "list" ? "⊞" : "📋"}
        </button>

        {/* Theme Toggle */}
        <button
          className="text-gray-800 dark:text-white text-xl"
          onClick={onToggleTheme}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? "🔆" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
