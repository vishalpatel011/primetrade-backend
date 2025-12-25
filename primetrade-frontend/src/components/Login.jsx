import { useState } from "react";
import api from "../api/axios";

export default function Login({ onLogin, goToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      onLogin();
    } catch (err) {
      setMsg(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
  <div className="page">
    <div className="container">
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="primary" onClick={submit}>
        Login
      </button>

      <p>{msg}</p>

      <p style={{ textAlign: "center" }}>
        Don’t have an account?
        <button className="small" onClick={goToRegister}>
          Register
        </button>
      </p>
    </div>
  </div>
);
}