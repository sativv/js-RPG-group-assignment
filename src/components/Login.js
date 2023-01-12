import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const checkUsername = (users) => {
    const user = users.find((user) => user.username === username);
    if (user.username === username) return user;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await axios
      .get("https://localhost:6001/users")
      .then((res) => checkUsername(res.data, username))
      .catch((error) => {
        alert("Faulty login");
      });

    console.log(user);
    console.log(user.email);

    if (user.username === username) {
      alert("Success!");
      /// CHANGE THIS TO REDIRECT TO GAME SCREEN ON LOGIN
      localStorage.setItem("user", JSON.stringify(user.id));
    }
  };
  return (
    <form>
      <div className="form">
        <h1 className="game-name">GAME NAME</h1>
        <input
          onChange={handleChange}
          type="text"
          value={username}
          placeholder="Username"
          className="input-field"
        />
        <input
          onChange={handleChange}
          type="text"
          //   value={password}
          placeholder="Password"
          className="input-field"
        />

        <button type="submit" onClick={handleSubmit} className="form-btn">
          Log In
        </button>
        <button
          type="submit"
          className="form-btn"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
      ;
    </form>
  );
};

export default Login;
