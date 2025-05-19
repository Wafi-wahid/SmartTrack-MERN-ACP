import "../styles/task.css";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FaUserCircle } from "react-icons/fa";

const Task = () => {
  const [tasks, setTasks] = useState({
    Today: [
      {
        name: "Finish monthly reporting",
        stage: "In progress",
        priority: "High",
        team: "Marketing 02",
        isEditing: false,
      },
      {
        name: "Contract signing",
        stage: "In progress",
        priority: "Medium",
        team: "Operations",
        isEditing: false,
      },
      {
        name: "Market overview keynote",
        stage: "In progress",
        priority: "High",
        team: "Customer Care",
        isEditing: false,
      },
    ],
    Tomorrow: [
      {
        name: "Brand proposal",
        stage: "Not started",
        priority: "High",
        team: "Marketing 02",
        isEditing: false,
      },
      {
        name: "Social media review",
        stage: "In progress",
        priority: "Medium",
        team: "Operations",
        isEditing: false,
      },
      {
        name: "Report - Week 30",
        stage: "Not started",
        priority: "Low",
        team: "Operations",
        isEditing: false,
      },
    ],
    "This Week": [
      {
        name: "Order check-ins",
        stage: "In progress",
        priority: "Medium",
        team: "Retails",
        isEditing: false,
      },
      {
        name: "HR reviews",
        stage: "Not started",
        priority: "Medium",
        team: "People",
        isEditing: false,
      },
      {
        name: "Report - Week 30",
        stage: "Not started",
        priority: "Low",
        team: "Development",
        isEditing: false,
      },
    ],
  });

  const [newTask, setNewTask] = useState({
    section: "Today", // default section to add task in
    name: "",
    stage: "",
    priority: "",
    team: "",
  });

  const updateTaskList = (section, updater) => {
    setTasks((prev) => ({ ...prev, [section]: updater(prev[section]) }));
  };

  const handleDelete = (section, index) => {
    updateTaskList(section, (list) => list.filter((_, i) => i !== index));
  };

  const handleEditToggle = (section, index) => {
    updateTaskList(section, (list) =>
      list.map((task, i) =>
        i === index ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const handleFieldChange = (section, index, field, value) => {
    updateTaskList(section, (list) =>
      list.map((task, i) => (i === index ? { ...task, [field]: value } : task))
    );
  };

  const handleAddTask = () => {
    if (!newTask.name || !newTask.stage || !newTask.priority || !newTask.team) {
      alert("Please fill in all fields to add a task.");
      return;
    }
    const { section, ...taskData } = newTask;
    updateTaskList(section, (list) => [
      ...list,
      { ...taskData, isEditing: false },
    ]);
    setNewTask({
      section: "Today",
      name: "",
      stage: "",
      priority: "",
      team: "",
    });
  };

  const TaskSection = ({ title, tasks }) => (
    <div className="taskSection">
      <h3 className="sectionTitle">{title}</h3>
      <table className="taskTable">
        <thead>
          <tr>
            <th>Task</th>
            <th>Due Date</th>
            <th>Stage</th>
            <th>Priority</th>
            <th>Team</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>
                {task.isEditing ? (
                  <input
                    type="text"
                    value={task.name}
                    onChange={(e) =>
                      handleFieldChange(title, index, "name", e.target.value)
                    }
                  />
                ) : (
                  task.name
                )}
              </td>
              <td>
                {title === "Today"
                  ? "Today"
                  : title === "Tomorrow"
                  ? "Tomorrow"
                  : "This Week"}
              </td>
              <td>
                {task.isEditing ? (
                  <select
                    value={task.stage}
                    onChange={(e) =>
                      handleFieldChange(title, index, "stage", e.target.value)
                    }
                  >
                    <option value="Not started">Not started</option>
                    <option value="In progress">In progress</option>
                  </select>
                ) : (
                  <span
                    className={`badge stage ${task.stage
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    {task.stage}
                  </span>
                )}
              </td>
              <td>
                {task.isEditing ? (
                  <select
                    value={task.priority}
                    onChange={(e) =>
                      handleFieldChange(
                        title,
                        index,
                        "priority",
                        e.target.value
                      )
                    }
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                ) : (
                  <span
                    className={`badge priority ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>
                )}
              </td>
              <td>
                {task.isEditing ? (
                  <input
                    type="text"
                    value={task.team}
                    onChange={(e) =>
                      handleFieldChange(title, index, "team", e.target.value)
                    }
                  />
                ) : (
                  task.team
                )}
              </td>
              <td>
                <div className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => handleEditToggle(title, index)}
                  >
                    {task.isEditing ? "Update" : "Edit"}
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(title, index)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="Task">
      <Sidebar />

      <main className="main-content">
        <div className="header">
          <h1 className="title">My tasks</h1>
          <div className="header-right">
            <input className="search-input" placeholder="Search..." />
            <FaUserCircle className="icon profile-icon" />
          </div>
        </div>

        {/* Add Task Section */}
        <div className="add-task-section">
          <h2>Add New Task</h2>
          <select
            value={newTask.section}
            onChange={(e) =>
              setNewTask({ ...newTask, section: e.target.value })
            }
          >
            {Object.keys(tasks).map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Task Name"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
          <select
            value={newTask.stage}
            onChange={(e) => setNewTask({ ...newTask, stage: e.target.value })}
          >
            <option value="">Select Stage</option>
            <option value="In progress">In progress</option>
            <option value="Not started">Not started</option>
          </select>
          <select
            value={newTask.priority}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input
            type="text"
            placeholder="Team"
            value={newTask.team}
            onChange={(e) => setNewTask({ ...newTask, team: e.target.value })}
          />
          <button className="save-btn" onClick={handleAddTask}>
            Add Task
          </button>
        </div>

        <div className="taskContainer">
          {Object.entries(tasks).map(([section, items]) => (
            <TaskSection key={section} title={section} tasks={items} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Task;
