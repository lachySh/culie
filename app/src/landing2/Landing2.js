import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    useHistory,
  } from 'react-router-dom';
import './Landing2.scss'
import img1 from '../assets/img1.png'
import fullLogo from '../assets/full_logo.png'


function Landing2() {
  return <Onboarding1 {...onboarding1Data} />;
}

export default Landing2;


function Onboarding1(props) {

    let history = useHistory();

    const closeUpload = () =>{
        history.push('/landing2');
    }

    const { img, text2, text3, getStarted, spanText, spanText2, spanText3, spanText4, spanText5, logo } = props;

    return (
      <div className="onboarding-1">
        <div className="auto-flex">
          <img className="img" src={img} alt ="logo" />
          <div className="overlap-group1">
            <div className="text-2 mulish-bold-granite-gray-48px">{text2}</div>
            <h1 className="text-3 mulish-bold-black-90px">{text3}</h1>
          </div>
          <div className="overlap-group">
            <div className="get-started">
              <div className="overlap-group2">
                <div className="rectangle-35"></div>
                <div className="get-started-1 mulish-bold-blueberry-28px">{getStarted}</div>
              </div>
            </div>
            <div className="text-1 mulish-bold-white-25px">
              <span className="span">{spanText}</span>
              <span className="span-1">{spanText2}</span>
              <span className="span">{spanText3}</span>
              <span className="span-1">{spanText4}</span>
              <span className="span">{spanText5}</span>
            </div>
          </div>
        </div>
        <img className="logo" src={logo} alt="mainpicture"  />
      </div>
    );
  }
  const onboarding1Data = {
      img: fullLogo,
      text2: (<>Hi there! Welcome to <br />Culie.</>),
      text3: "👋",
      getStarted: "Get Started",
      spanText: "We want to help you find a job with the best ",
      spanText2: "culture fit",
      spanText3: " but first, we need some ",
      spanText4: "basic information ",
      spanText5: (<>about your preferences. <br /><br /></>),
      logo: img1,
  };
  