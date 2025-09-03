import { useState } from "react";
import "./css/Login.css";

interface LoginProps {
  onLogin: (
    username: string,
    password: string,
    setErrorMessage: (msg: string) => void
  ) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    onLogin(username, password, setErrorMessage);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="login-field">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && <div className="login-error">{errorMessage}</div>}

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
