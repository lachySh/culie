import React from "react";
import './Login.scss'
import '@material-ui/core/TextField'
import TextField from "@material-ui/core/TextField";
import FirebaseManager from "../Utils/FirebaseManager";
import { firestore } from "firebase-admin";

let firebaseManager = new FirebaseManager()

var userEmail = ""
var userPassword = ""

function LoginPage() {
  return (
    <Login
      image7="https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/60430150ca4cc51e53d83f7e/img/image-7@1x.svg"
      login="Login"
      signIn="Sign in"
      emailProps={LoginData.emailProps}
      email2Props={LoginData.email2Props}
    />
  );
}

export default LoginPage;


function Login(props) {
  const { image7, login, signIn, emailProps, email2Props } = props;

  const loginUser = async () => {
    let fbPass = await firebaseManager.getPasswordForUID(userEmail)

    if (fbPass) {
      if (userPassword == fbPass) {
        console.log("IN")
      } else {
        document.getElementById("passwordField").style.color = "red"
      }
    } else {
      document.getElementById("emailField").style.color = "red"
    }
  }

  return (
    <div className="login">
      <img className="image-7" src={image7} />
      <div className="group-36">
        <h1 className="login mulish-bold-black-48px">{login}</h1>
        <Email eMailAddress={emailProps.eMailAddress} />
        <Password eMailAddress={email2Props.eMailAddress} className="password">
        </Password>
        <div className="sign-in-button">
          <button className="overlap-group" onClick={loginUser}>
            <div className="sign-in mulish-bold-pot-pourri-23px">{signIn}</div>
          </button>
        </div>
      </div>
    </div>
  );
}


function Email(props) {
  const { eMailAddress, className } = props;

  const updateEmail = (value) => {
    userEmail = value.target.value
    document.getElementById("emailField").style.color = "black"
  }

  return (
    <div className={`email ${className || ""}`}>
      <div id="emailField"  className="e-mail-address mulish-bold-black-23px">{eMailAddress}</div>
      <div className="rectangle-3">
      <TextField className="passwordInput" onChange={updateEmail} inputProps={{type: "password"}, {style: {width: "460px", paddingLeft: "15px", paddingTop: "15px"}}} InputProps={{style: {fontSize: 25},disableUnderline: true}}></TextField>
      </div>
    </div>
  );
}

function Password(props) {
  const { eMailAddress, className } = props;

  const updatePassword = (value) => {
    userPassword = value.target.value
    document.getElementById("passwordField").style.color = "black"
  }

  return (
    <div className={`email ${className || ""}`}>
      <div id="passwordField" className="e-mail-address mulish-bold-black-23px">{eMailAddress}</div>
      <div className="rectangle-3">
      <TextField className="passwordInput" onChange={updatePassword} inputProps={{style: {width: "460px", paddingLeft: "15px", paddingTop: "15px"}, type: "password"}} InputProps={{style: {fontSize: 25},disableUnderline: true}}></TextField>
      </div>
    </div>
  );
}
const emailData = {
    eMailAddress: "E-mail Address",
};

const email2Data = {
    eMailAddress: "Password",
};

const LoginData = {
    emailProps: emailData,
    email2Props: email2Data,
};

