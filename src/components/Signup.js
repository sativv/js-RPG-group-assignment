import { useState } from "react";
import axios from "axios";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await axios
      .get("/users")
      .then((res) => checkEmail(res.data, email));

    if (user) {
      alert("User already exists!");
    } else {
      const newUser = { username, email, password };
      axios.post("/users", newUser).then(alert("User created!"));
    }

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form className="form">
      <div>
        <input
          className="input-container"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          className="input-container"
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          className="input-container"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="signup-btn" type="submit" onClick={handleSubmit}>
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
