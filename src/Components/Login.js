import {  useNavigate } from "react-router-dom";
import "./Login.css"
import { useState } from "react";

const Login = (props) => {
  const navigate = useNavigate();

  const [Email, setEmail] =  useState('');
  const [Password, setPassword] =  useState('');
  const [isError, setIsError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const { userDetails } = props;

    console.log('email:', Email);
    console.log('Password', Password);

    if (Email && Password) {
      if (userDetails.Email === Email && userDetails.Password === Password) {
       
      } else {
        setIsError(false);
      
        console.log('Email/password is not matching')
        
        
     }
    }
  }


  return (
    <div>
      
      <h1>Login</h1>
      <div className="login">
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            className="loginInput"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Password</label>
          <input
            type="Password"
            className="loginInput"
            placeholder="Enter your Password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <button className="loginButton" type="submit">
            submit
          </button>
          {isError && <div className="error">wrong password</div>}
          <div className="Forgotpassword">
            <a class="link"href="/Forgotpassword">
              <h6>Forgot password</h6>
            </a>
          </div>
        </form>
        <br></br>
         <button className="SingUpButton">
            <a className="link"href="/SignUp">
              SignUp
            </a>
          </button> 
      </div>
    </div>
  );
        

    
}
export default Login;