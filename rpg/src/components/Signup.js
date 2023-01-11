import {useState} from "react";
import axios from "axios";
import "../index.css"

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({...user, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);


        // axios.post("https://localhost:3000/users", user)
        //     .then(alert("User created!"));

        setUser({
            name: "",
            email: "",
            password: "",
        })        
    }   
    // const [email, setEmail] = useState('');
    // const [emailValidError, setEmailValidError] = useState('');

    // const handleValidEmail = val => {
    //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    //         // !/[a-z0-9!#$%&'*+/=?^_`{|}∼-]
    //     if (val.length === 0) {
    //       setEmailValidError('email address must be enter');
    //     } else if (reg.test(val) === false) {
    //       setEmailValidError('enter valid email address');
    //     } else if (reg.test(val) === true) {
    //       setEmailValidError('');
    //     }
    //     };


    return (
        <form>
            <div className="form">
                {/* <div>
                    <input 
                        className="input-container"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div> */}
                <div> 
                    <input 
                        className="input-container"
                        type="text"
                        placeholder="Username"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
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
                </div>
                <button className="signup-btn" type="submit" onClick={handleSubmit}>Sign Up</button>
            </div>
        </form>
    );
};

export default Signup;