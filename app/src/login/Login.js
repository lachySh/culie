import React from "react";
import './Login.scss'
import '@material-ui/core/TextField'
import TextField from "@material-ui/core/TextField";

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

  return (
    <div className="login">
      <img className="image-7" src={image7} />
      <div className="group-36">
        <h1 className="login mulish-bold-black-48px">{login}</h1>
        <Email eMailAddress={emailProps.eMailAddress} />
        <Password eMailAddress={email2Props.eMailAddress} className="password">
        </Password>
        <div className="sign-in-button">
          <div className="overlap-group">
            <div className="sign-in mulish-bold-pot-pourri-23px">{signIn}</div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Email(props) {
  const { eMailAddress, className } = props;

  return (
    <div className={`email ${className || ""}`}>
      <div className="e-mail-address mulish-bold-black-23px">{eMailAddress}</div>
      <div className="rectangle-3">
      <TextField className="passwordInput" inputProps={{type: "password"}, {style: {width: "460px", paddingLeft: "15px", paddingTop: "15px"}}} InputProps={{style: {fontSize: 25},disableUnderline: true}}></TextField>
      </div>
    </div>
  );
}

function Password(props) {
  const { eMailAddress, className } = props;

  return (
    <div className={`email ${className || ""}`}>
      <div className="e-mail-address mulish-bold-black-23px">{eMailAddress}</div>
      <div className="rectangle-3">
      <TextField className="passwordInput" inputProps={{style: {width: "460px", paddingLeft: "15px", paddingTop: "15px"}, type: "password"}} InputProps={{style: {fontSize: 25},disableUnderline: true}}></TextField>
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

