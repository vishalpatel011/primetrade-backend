import { useEffect, useState, useCallback } from "react";
import api from "../api/axios";

export default function Dashboard({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = useCallback(async () => {
    const res = await api.get("/tasks");
    setTasks(res.data.tasks);
  }, []);

  const createTask = async () => {
    if (!title.trim()) return;
    await api.post("/tasks", { title });
    setTitle("");
    loadTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <div className="page">
    <div className="container">
      {/* LOGOUT */}
      <div className="logout">
        <button className="danger small" onClick={onLogout}>
          Logout
        </button>
      </div>

      <h2>My Tasks</h2>

      <input
        placeholder="Enter new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="primary" onClick={createTask}>
        Add Task
      </button>

      <div style={{ marginTop: "20px" }}>
        {tasks.length === 0 && (
          <p style={{ textAlign: "center", color: "#777" }}>
            No tasks yet
          </p>
        )}

        {tasks.map((t) => (
          <div key={t._id} className="task">
            <span>{t.title}</span>
            <button
              className="danger cross"
              onClick={() => deleteTask(t._id)}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

}
