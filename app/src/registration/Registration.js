import React from "react";
import './Registration.scss'
import '@material-ui/core/TextField'
import TextField from "@material-ui/core/TextField";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import { firebase } from '@firebase/app';

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBcfxz80OLEXeDWWFyJUw30nSOldxA08_o",
    authDomain: "culie-88088.firebaseapp.com",
    databaseURL: "https://culie-88088-default-rtdb.firebaseio.com",
    projectId: "culie-88088",
    storageBucket: "culie-88088.appspot.com",
    messagingSenderId: "876071240737",
    appId: "1:876071240737:web:0f309f25c48cf37b260f60",
    measurementId: "G-X8JW6HS7W1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function RegistrationPage() {
  return <Createaccount {...createaccountData} />;
}

export default RegistrationPage;

var userName = "";
var userEmail = "";
var userPassword = "";


function Createaccount(props) {
  let history = useHistory();

    const register = async () =>{
        let db = firebase.firestore()
        const cityRef = db.collection('users').doc(userEmail);
        const doc = await cityRef.set({
          name: userName,
          email: userEmail,
          password: userPassword,
          completedOnboard: false
        })
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