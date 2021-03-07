import React from "react";
import './Registration.scss'
import '@material-ui/core/TextField'
import TextField from "@material-ui/core/TextField";
import FirebaseManager from '../Utils/FirebaseManager'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

function RegistrationPage() {
  return <Createaccount {...createaccountData} />;
}

export default RegistrationPage;

let firebaseManager = new FirebaseManager()
var userName = "";
var userEmail = "";
var userPassword = "";


function Createaccount(props) {
  let history = useHistory();

    const register = async () =>{
      let obj = {
        name: userName,
        email: userEmail,
        password: userPassword,
        completedOnboarding: false
      }

      await firebaseManager.registerNewUser(userEmail, obj)

      FirebaseManager.userName = await firebaseManager.getName(userEmail)

      history.push('/onboarding/1');

    }

    const updateName = (value) => {
      userName = value.target.value
    }

    const updateEmail = (value) => {
      userEmail = value.target.value
    }

    const updatePassword = (value) => {
      userPassword = value.target.value
    }

  const {
    culieLogo,
    layer2,
    createAccount,
    yourName,
    rectangle34,
    eMailAddress,
    password,
    reEnterPassword,
    signUp,
  } = props;

  return (
    <div className="create-account">
      <div className="auto-flex">
        <img className="culie-logo" src={culieLogo} />
        <div className="example-scene-3-1">
          <img className="layer-2" src={layer2} />
        </div>
      </div>
      <div className="auto-flex2">
        <h1 className="create-account mulish-bold-black-48px">{createAccount}</h1>
        <div className="your-name">
          <div className="your-name-1 mulish-bold-black-23px your-name">{yourName}</div>
          <div className="rectangle-34" src={rectangle34}>
          <TextField className="passwordInput" onChange={updateName} inputProps={{type: "password"}, {style: {width: "460px", paddingLeft: "15px", paddingTop: "15px"}}} InputProps={{style: {fontSize: 25},disableUnderline: true}}></TextField>
            </div>
        </div>
        <div className="email-address">
          <div className="e-mail-address mulish-bold-black-23px">{eMailAddress}</div>
          <div className="rectangle-37">
          <TextField className="passwordInput" onChange={updateEmail} inputProps={{type: "password"}, {style: {width: "460px", paddingLeft: "15px", paddingTop: "15px"}}} InputProps={{style: {fontSize: 25},disableUnderline: true}}></TextField>
          </div>
        </div>
        <div className="auto-flex1">
          <div className="password">
            <div className="password-1 mulish-bold-black-23px">{password}</div>
            <div className="rectangle-35"><TextField onChange={updatePassword} inputProps={{style: {width: "200px", paddingLeft: "15px", paddingTop: "15px"}, type: "password"}} InputProps={{style: {fontSize: 25},disableUnderline: true}}></TextField></div>
          </div>
          <div className="re-enter">
            <div className="re-enter-password mulish-bold-black-23px">{reEnterPassword}</div>
            <div className="rectangle-39"><TextField inputProps={{style: {width: "200px", paddingLeft: "15px", paddingTop: "15px"}, type: "password"}} InputProps={{style: {fontSize: 25},disableUnderline: true}}></TextField></div>
          </div>
        </div>
        <div className="sign-up">
          <button className="overlap-group" onClick={register}>
            <div className="sign-up-1 mulish-bold-bon-jour-23px">{signUp}</div>
          </button>
        </div>
      </div>
    </div>
  );
}
const createaccountData = {
    culieLogo: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6043041eb240a3cf30940a85/img/image-5@2x.png",
    layer2: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6043515c550d896f1a9671d4/img/layer-2@1x.png",
    createAccount: "Create Account",
    yourName: "Your Name",
    rectangle34: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6043515c550d896f1a9671d4/img/rectangle-34@2x.png",
    eMailAddress: "E-mail Address",
    password: "Password",
    reEnterPassword: "Re-enter Password",
    signUp: "Sign Up",
};