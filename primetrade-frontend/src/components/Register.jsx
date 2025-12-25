import { useState } from "react";
import api from "../api/axios";

export default function Register({ goToLogin }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const submit = async () => {
    try {
      await api.post("/auth/register", form);
      setMsg("Registered successfully. Please login.");
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
    }
  };

  return (
  <div className="page">
    <div className="container">
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button className="primary" onClick={submit}>
        Register
      </button>

      <p>{msg}</p>

      <p style={{ textAlign: "center" }}>
        Already have an account?
        <button className="small" onClick={goToLogin}>
          Login
        </button>
      </p>
    </div>
  </div>
);
}