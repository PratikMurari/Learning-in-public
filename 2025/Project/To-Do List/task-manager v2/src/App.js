import React, { useState } from "react";
import {
  Trash2,
  Plus,
  CheckCircle2,
  Circle,
  Calendar,
  AlertCircle,
  Zap,
} from "lucide-react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("medium");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (title.trim()) {
      const newTask = {
        id: Date.now(),
        title,
        deadline,
        priority,
        completed: false,
        createdAt: new Date().toLocaleDateString(),
      };
      setTasks([newTask, ...tasks]);
      setTitle("");
      setDeadline("");
      setPriority("medium");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case "active":
        return tasks.filter((t) => !t.completed);
      case "completed":
        return tasks.filter((t) => t.completed);
      case "urgent":
        return tasks.filter((t) => !t.completed && t.priority === "high");
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-500 bg-red-50";
      case "medium":
        return "text-yellow-500 bg-yellow-50";
      case "low":
        return "text-green-500 bg-green-50";
      default:
        return "text-gray-500 bg-gray-50";
    }
  };

  const getPriorityLabel = (priority) => {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  const isOverdue = (deadline) => {
    if (!deadline) return false;
    return (
      new Date(deadline) < new Date() &&
      new Date(deadline).toDateString() !== new Date().toDateString()
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Task Manager
            </h1>
            <p className="text-gray-600">Stay organized and productive</p>
            {totalCount > 0 && (
              <div className="mt-4 flex items-center gap-4">
                <div className="text-sm font-semibold text-gray-700">
                  Progress:{" "}
                  <span className="text-indigo-600">
                    {completedCount}/{totalCount}
                  </span>
                </div>
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 transition-all"
                    style={{
                      width: `${
                        totalCount > 0 ? (completedCount / totalCount) * 100 : 0
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Section */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Add a new task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTask()}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <button
                  onClick={addTask}
                  className="bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2 font-semibold"
                >
                  <Plus size={20} />
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {["all", "active", "completed", "urgent"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  filter === f
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Tasks List */}
          <div className="space-y-3">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-12">
                <Zap className="mx-auto text-gray-300 mb-4" size={48} />
                <p className="text-gray-500 text-lg">
                  {filter === "all" && "No tasks yet. Add one to get started!"}
                  {filter === "active" && "No active tasks. Great work!"}
                  {filter === "completed" && "No completed tasks yet."}
                  {filter === "urgent" && "No urgent tasks. You're all set!"}
                </p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={`p-4 rounded-lg border-2 transition ${
                    task.completed
                      ? "bg-gray-50 border-gray-200"
                      : "bg-white border-indigo-100 hover:border-indigo-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="mt-1 transition"
                    >
                      {task.completed ? (
                        <CheckCircle2 className="text-green-500" size={24} />
                      ) : (
                        <Circle
                          className="text-gray-300 hover:text-indigo-600"
                          size={24}
                        />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-lg font-semibold ${
                          task.completed
                            ? "line-through text-gray-500"
                            : "text-gray-800"
                        }`}
                      >
                        {task.title}
                      </p>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        {task.deadline && (
                          <span
                            className={`inline-flex items-center gap-1 text-sm px-2 py-1 rounded ${
                              isOverdue(task.deadline) && !task.completed
                                ? "bg-red-100 text-red-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            <Calendar size={14} />
                            {new Date(task.deadline).toLocaleDateString()}
                            {isOverdue(task.deadline) && !task.completed && (
                              <AlertCircle size={14} />
                            )}
                          </span>
                        )}
                        <span
                          className={`inline-flex items-center gap-1 text-sm px-3 py-1 rounded font-medium ${getPriorityColor(
                            task.priority
                          )}`}
                        >
                          {getPriorityLabel(task.priority)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary Footer */}
          {totalCount > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600 text-center">
              <p>
                {tasks.filter((t) => !t.completed).length} active •{" "}
                {completedCount} completed
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
