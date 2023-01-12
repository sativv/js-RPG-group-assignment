import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import User from "./components/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Startscreen from "./components/Startscreen";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startscreen />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/Signup" exact element={<Signup />}/>
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
