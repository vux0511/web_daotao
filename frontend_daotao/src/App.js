import { Routes, Route } from "react-router-dom";


import HomePage from "./pages/HomePage" ; 
import Login from "./pages/sv/Login" ; 
import Register from "./pages/sv/Register";
import HomeSV from "./pages/sv/HomeSV";
import UpdateProfile from "./pages/sv/UpdateProfile" ;  
import NotFound from "./pages/NotFound";

import "./css/Reponsive.css" ;
import {URL_} from "./config/constants" ; 

function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path={URL_.SV_LOGIN} element={<Login />} />
          <Route path={URL_.SV_REGISTER} element={<Register />} />
          <Route path={URL_.SV_HOME} element={<HomeSV />} />

          <Route path={URL_.UPDATE_PROFILE} element={<UpdateProfile />} />

          <Route path={URL_.NOT_FOUND} element={<NotFound />} />
          
      </Routes>
    </div>
  );
}

export default App;
