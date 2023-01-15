import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const checkEmail = (users) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user.email === email && user.password === password) return user;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("All fields are required!");
    }

    const user = await axios
      .get("http://localhost:6001/users")
      .then((res) => checkEmail(res.data, email))
      .then(navigate("/startGame"))
      .catch((error) => {
        alert("Error");
      });

    if (user.email === email && user.password === password) {
      alert("Success!");

      localStorage.setItem("user", JSON.stringify(user.id));
    }
    setEmail("");
    setPassword("");
  };

  // xx
  return (
    <div className="container">
      <form className="form">
        <h1 className="game-name">GAME NAME</h1>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={email}
            placeholder="Email"
            className="input-field"
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            value={password}
            placeholder="Password"
            className="input-field"
          />
        </div>
        <button className="btn form-btn" type="submit" onClick={handleSubmit}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
