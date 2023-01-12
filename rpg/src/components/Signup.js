import { useState } from "react";
import axios from "axios";
import "../index.css"
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({...user, [name]: value});
    }

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);

        const value = e.target.value;
        setEmail(e.target.value)
        
        if (
            !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
              value
            )
          ) {
            setError("Invalid Email");
          } else {
            setError("");
          }


        // axios.post("https://localhost:6001/users", user).then(alert("User Has Been Made!"))       
    
    };
    


    return (
        <form>
            <div className="form">
                <div>
                    <input 
                        className="input-container"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{error && error}</p>
                </div>
                <div> 
                    <input 
                        className="input-container"
                        type="text"
                        placeholder="Username"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{error && error}</p>
                </div>
                <div>
                    <input
                        className="input-container"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{error && error}</p>
                </div>
                <button className="signup-btn" type="submit" onClick={handleSubmit}>Sign Up</button>
            </div>
        </form>
    );
};

export default Signup;