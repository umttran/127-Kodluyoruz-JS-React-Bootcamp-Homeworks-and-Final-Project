import React, { useContext, useState } from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";
import "./Login.css";

import Input from "../Chat/components/Input";
import { UserContext } from "../../context/login";

function Login() {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const {user, login} = useContext(UserContext);
  const {pathname} = useLocation();

  // const handleSubmitLogin = () => {
  //   login({
  //     id: Math.random(),
  //     userName,
  //     firstName,
  //     lastName
  //   });
  // }

  // If user exist redirect to Chat Page
  if(user && pathname ==="/login") return <Redirect to="/chat" />

  // const {push} =useHistory();

  const handleSubmitLogin = (e) => {
    if (userName && firstName && lastName) {
      login({
        id: Math.random(),
        userName,
        firstName,
        lastName,
      });
    }

    e.preventDefault();
  };




  return (

    <div className="login">
      <div className="login-container">
      <form id="login-form" className="login-form">

          <h3>Log in to your account</h3>

          <input type="text" className="user-name" placeholder="Username"
            
            onChange={ e => {
              setUserName(e.target.value);
            }}
          />


          <input type="text" className="first-name" placeholder="First Name"
            
            onChange={ e => {
              setFirstName(e.target.value);
            }}
          />


          <input type="text" className="last-name" placeholder="Last Name"
          
            onChange= { e => {
              setLastName(e.target.value)
            }}
          />


          <button type="submit" className="login-button"
              onClick={handleSubmitLogin}>LOGIN
          </button>
          
          
          {/* <button type="submit" className="login-button" onClick={(e) => {
            e.preventDefault();
            console.log(username + " "  + firstname  + " "  + lastname);

            push("/chat");

          }}>LOGIN</button> */}
        </form>
      </div>
    </div>
  )

}

export default Login;