import React from "react";
import './Landing2.scss'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

function App() {
  return <Onboarding1 {...onboarding1Data} />;
}

export default App;


function Onboarding1(props) {
  const { img, text2, text3, getStarted, spanText, spanText2, spanText3, spanText4, spanText5, logo } = props;
  let history = useHistory();

  const goToOnboarding1 = () => {
    history.push('/onboarding/1')
  }

  return (
    <div className="onboarding-1">
      <div className="auto-flex">
        <img className="img" src={img} />
        <div className="overlap-group">
          <div className="text-2 mulish-bold-granite-gray-48px">{text2}</div>
          <h1 className="text-3 mulish-bold-black-90px">{text3}</h1>
        </div>
        <div className="overlap-group1">
          <div className="get-started">
            <div className="overlap-group2">
              <div className="rectangle-35"></div>
              <button onClick={goToOnboarding1} className="get-started-1 mulish-bold-blueberry-28px">{getStarted}</button>
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
      <img className="logo" src={logo} />
    </div>
  );
}
const onboarding1Data = {
    img: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6043041eb240a3cf30940a85/img/image-4@2x.png",
    text2: (<>Hi there! Welcome to <br />Culie.</>),
    text3: "👋",
    getStarted: "Get Started",
    spanText: "We want to help you find a job with the best ",
    spanText2: "culture fit",
    spanText3: " but first, we need some ",
    spanText4: "basic information ",
    spanText5: (<>about your preferences. <br /><br /></>),
    logo: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6043515c550d896f1a9671d4/img/logo@1x.png",
};

