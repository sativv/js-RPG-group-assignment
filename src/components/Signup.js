import { useState } from "react";
import axios from "axios";
import "../index.css"
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

    const handleSubmit = async () => {
        const user = await axios
            .get("/users")
            .then((res) => checkEmail(res.data, email));

            if (user) {
                alert("User already exsist!")
            } else {
                const user = { username, email, password};
                axios.post("/users", user).then(alert("User Has Been Made!"))
            }


            // FIXA ERRORMEDDELANDET
            // const value = e.target.value;
            // setEmail(e.target.value)
        
            // if (
            //     !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
            //     value
            //     )
            // ) {
            //     setError("Invalid Email");
            // } else {
            //     setError("");
            // }
    }


    return (
        <form>
            <div className="form">
                <div>
                    <input 
                        className="input-container"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                        
                </div>
                <div> 
                    <input 
                        className="input-container"
                        type="text"
                        placeholder="Username"
                        name="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className="input-container"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                    <button className="signup-btn" type="submit" onClick={handleSubmit}>Sign Up</button>
            </div>
        </form>
        );
};
    





export default Signup;