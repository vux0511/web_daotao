import { Routes, Route } from "react-router-dom";


import HomePage from "./pages/HomePage" ; 
import Login from "./pages/Login" ; 
import Register from "./pages/Register";
import HomeUser from "./pages/HomeUser";

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />

          <Route path="/user/home" element={<HomeUser />} />

      </Routes>
    </div>
  );
}

export default App;
