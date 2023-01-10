import { authenticate } from "../data";
import { Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const auth = authenticate();
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
