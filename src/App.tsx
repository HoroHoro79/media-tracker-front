import { useState } from "react";
import Login from "./components/Login";
import Index from "./components/Index";
import "./app.css";

function App() {
  const [user, setUser] = useState<string | null>(null);

  const handleLogin = async (
    username: string,
    password: string,
    setErrorMessage: (msg: string) => void
  ) => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/media-tracker/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: username, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        if (data.details && Array.isArray(data.details)) {
          setErrorMessage(data.details.join("\n"));
        } else if (data.message) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage("Error desconocido al iniciar sesión");
        }
        return;
      }

    localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("user", username);

      setUser(username);
    } catch (error) {
      console.error("Error haciendo login:", error);
      setErrorMessage("Error al conectar con el servidor");
    }
  };

const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return user ? (
    <Index user={user} onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
}

export default App;
