
import  { Routes,Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Login from "./Components/Login.js";
import SignUp from "./Components/SignUp.js";
import Forgotpassword from "./Components/Forgotpassword.js";

import ResetPassword from "./Components/ResetPassword.js"
import { useState } from "react";
import { ToastContainer } from "react-toastify";
function App() {
  

  const [userDetails] = useState({
    name: "rajesh",
    Email: "rajesh@gmail.com",
    Password: "12345",
  });
  const [userLogin] = useState({
    
    username: "rajesh",
    Email: "raj@gmail.com",
    Password: "4576"
    
    
    
  }
)
  
  
  return (
    <div className="App">
      <ToastContainer />
      {/* <Home/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login userDetails={userDetails} />} />
        <Route path="/SignUp" element={<SignUp userLogin={userLogin} />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
