import { BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./components/Signup"
import Usermade from "./components/Usermade"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/Usermade" element={<Usermade />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
        </Routes>
    </BrowserRouter>
  )
}



export default App;
