import { Routes, Route } from "react-router-dom";


import HomePage from "./pages/HomePage" ; 
import Login from "./pages/Login" ; 
import Register from "./pages/Register";
import HomeSV from "./pages/sv/HomeSV";
import UpdateProfile from "./pages/sv/UpdateProfile" ;  
import "./css/Reponsive.css" ;
function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/home" element={<HomeSV />} />
          <Route path="/user/update-profile" element={<UpdateProfile />} />

          
      </Routes>
    </div>
  );
}

export default App;
