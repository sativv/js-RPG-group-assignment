import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <div className="container">
      <form className="form">
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

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();
//   const handleChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const checkUsername = (users) => {
//     const user = users.find((user) => user.username === username);
//     if (user.username === username) return user;
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const user = await axios
//       .get("https://localhost:6001/users")
//       .then((res) => checkUsername(res.data, username))
//       .catch((error) => {
//         alert("Faulty login");
//       });

//     console.log(user);
//     console.log(user.email);

//     if (user.username === username) {
//       alert("Success!");
//       /// CHANGE THIS TO REDIRECT TO GAME SCREEN ON LOGIN
//       localStorage.setItem("user", JSON.stringify(user.id));
//     }
//   };
//   return (
//     <form>
//       <div className="form">
//         <h1 className="game-name">GAME NAME</h1>
//         <input
//           onChange={handleChange}
//           type="text"
//           value={username}
//           placeholder="Username"
//           className="input-field"
//         />
//         <input
//           onChange={handleChange}
//           type="text"
//           //   value={password}
//           placeholder="Password"
//           className="input-field"
//         />

//         <button type="submit" onClick={handleSubmit} className="form-btn">
//           Log In
//         </button>
//         <button
//           type="submit"
//           className="form-btn"
//           onClick={() => navigate("/signup")}
//         >
//           Sign Up
//         </button>
//       </div>
//       ;
//     </form>
//   );
// };

// export default Login;
