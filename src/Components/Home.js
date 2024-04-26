import "./Home.css"

const Home = () => {
    
  return (
    <div className="header">
      <h1>Home</h1>
      <div />

      <div class="topRight">
        <ul class="topList">
          <li class="topListItem">
            <a class="link" href="/login">
              <h2>Login</h2>
            </a>
          </li>
          <li class="topListItem1">
            <a class="link" href="/SignUp">
              <h2>SignUp</h2>
            </a>
          </li>
          {/* <li class="topListItem2">
            <a class="link" href="/Forgotpassword">
              <h2>Forgotpassword</h2>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );



 
}
export default Home;
