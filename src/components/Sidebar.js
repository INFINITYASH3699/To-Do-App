import React from "react";

const Sidebar = ({ isOpen, user, taskStats }) => {
  return (
    <aside
      className={`bg-gray-200 p-4 shadow-md h-screen transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} fixed w-64 z-30`}
    >
      {/* Profile Section */}
      <div className="text-center mb-8">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-20 h-20 mx-auto rounded-full mb-2"
        />
        <h2 className="text-lg font-semibold">Hey, {user.name}!</h2>
      </div>

      {/* Menu Options */}
      <ul className="space-y-4">
        <li className="cursor-pointer">📋 All Tasks</li>
        <li className="cursor-pointer">📅 Today</li>
        <li className="cursor-pointer">⭐ Important</li>
        <li className="cursor-pointer">📆 Planned</li>
        <li className="cursor-pointer">🙋 Assigned to Me</li>
        <li className="cursor-pointer">➕ Add List</li>
      </ul>

      {/* Task Stats */}
      <div className="mt-8">
        <h3 className="font-bold">Today's Tasks</h3>
        <div className="text-gray-600 flex items-center gap-2">
          <span>🔍</span>
          <span>{taskStats.pending} Pending</span>
        </div>
        <div className="mt-4">
          <div className="relative w-20 h-20 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <circle
                className="text-gray-300"
                strokeWidth="3"
                fill="none"
                r="16"
                cx="18"
                cy="18"
              />
              <circle
                className="text-green-500"
                strokeWidth="3"
                strokeDasharray={`${taskStats.completedPercentage}, 100`}
                fill="none"
                r="16"
                cx="18"
                cy="18"
              />
            </svg>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
