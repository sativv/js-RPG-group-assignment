import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");

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
      </div>
      ;
    </form>
  );
};

export default Login;
