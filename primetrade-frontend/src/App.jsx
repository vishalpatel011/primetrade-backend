import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("token")
  );
  const [authPage, setAuthPage] = useState("login"); // login | register

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setLoggedIn(false);
    setAuthPage("login");
  };

  if (!loggedIn) {
    return authPage === "login" ? (
      <Login
        onLogin={() => setLoggedIn(true)}
        goToRegister={() => setAuthPage("register")}
      />
    ) : (
      <Register goToLogin={() => setAuthPage("login")} />
    );
  }

  return <Dashboard onLogout={logout} />;
}
