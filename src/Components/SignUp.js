import { useState } from "react";
import "./SignUp.css"

const SignUp = (props) => {

  //const navigate = useNavigate();
  
  const [Username, setUsername] = useState("");
const [Email, setEmail] = useState("");
const [Password, setPassword] = useState("");
const [isError, setIsError] = useState(false);
const handleSubmit = (e) => {
  e.preventDefault();

  const { userDetails } = props;

  console.log("email:", Email);
  console.log("Password", Password);

  if (Email && Password) {
    if (userDetails.Email === Email && userDetails.Password === Password) {
    } else {
      setIsError(false);

      console.log("Email/password is not matching");
    }
  }
};


    return (
      <div>
        <h1>SignUp</h1>

        {/* <div class="register"><span class="registerTitle">Register</span> */}

        <form class="SignUpForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            class="SignUpInput"
            placeholder="Enter your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Email</label>
          <input
            type="text"
            class="SignUpInput"
            placeholder="Enter your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <label>Password</label>
          <input
            type="password"
            class="SignUpInput"
            placeholder="Enter your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <button class="SignUpButton" type="submit">
            SignUp
          </button>
        </form>
      </div>
    );




}
export default SignUp;