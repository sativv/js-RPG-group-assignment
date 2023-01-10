import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import User from "./components/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Login />;
      <Routes>
        <Route />
        <Route />
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
