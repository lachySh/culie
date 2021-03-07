import React from "react";
import './role-match.scss';

function App() {
  return (
    <Rolematching
      companycardProps={RolematchingData.companycardProps}
      group39Props={RolematchingData.group39Props}
      compatibilityProps={RolematchingData.compatibilityProps}
      topiconsProps={RolematchingData.topiconsProps}
      otherjobsProps={RolematchingData.otherjobsProps}
    />
  );
}

export default App;


function Rolematching(props) {
  const { companycardProps, group39Props, compatibilityProps, topiconsProps, otherjobsProps } = props;

  return (
    <div className="role-matching">
      <div className="overlap-group">
        <div className="rectangle-80"></div>
        <Companycard {...companycardProps} />
        <Group39 {...group39Props} />
        <Compatibility {...compatibilityProps} />
        <Topicons
          profileIcon={topiconsProps.profileIcon}
          x77={topiconsProps.x77}
          ellipse10={topiconsProps.ellipse10}
          notifIcon={topiconsProps.notifIcon}
        />
        <Otherjobs
          text11={otherjobsProps.text11}
          text12={otherjobsProps.text12}
          image12={otherjobsProps.image12}
          image16={otherjobsProps.image16}
          text13={otherjobsProps.text13}
          jobcardtwoProps={otherjobsProps.jobcardtwoProps}
          jobcardtwo2Props={otherjobsProps.jobcardtwo2Props}
        />
      </div>
    </div>
  );
}


function Companycard(props) {
  const { text1, cultureValues, workLifeBalance, text2, benefits, beeCompany, linkedin, aboutBee, text3 } = props;

  return (
    <div className="company-card">
      <div className="overlap-group1">
        <div className="card1"></div>
        <div className="company-scores">
          <div className="opportunities">
            <div className="overlap-group2">
              <div className="progress-bar1-1"></div>
              <div className="rectangle-46"></div>
              <div className="text-1 mulish-bold-granite-gray-18px">{text1}</div>
            </div>
          </div>
          <div className="culture">
            <div className="culture-values mulish-bold-granite-gray-18px">{cultureValues}</div>
            <div className="overlap-group3">
              <div className="rectangle-47"></div>
            </div>
          </div>
          <div className="work-life-balance">
            <div className="work-life-balance-1 mulish-bold-granite-gray-18px">{workLifeBalance}</div>
            <div className="overlap-group6">
              <div className="rectangle-48"></div>
            </div>
          </div>
          <div className="diversity">
            <div className="overlap-group5">
              <div className="progress-bar1-1"></div>
              <div className="rectangle-49"></div>
              <div className="text-2 mulish-bold-granite-gray-18px">{text2}</div>
            </div>
          </div>
          <div className="perks">
            <div className="overlap-group4">
              <div className="progress-bar1"></div>
              <div className="rectangle-50"></div>
              <div className="benefits mulish-bold-granite-gray-18px">{benefits}</div>
            </div>
          </div>
        </div>
        <div className="bee-company">{beeCompany}</div>
        <div className="linked-in mulish-bold-mountain-mist-20px">{linkedin}</div>
        <div className="about-bee mulish-bold-mountain-mist-20px">{aboutBee}</div>
        <h1 className="text-3">{text3}</h1>
      </div>
    </div>
  );
}


function Group39(props) {
  const {
    productDesigner,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    text5,
    applyNow,
    vector,
    jobtag1Props,
    jobtag2Props,
  } = props;

  return (
    <div className="group-39">
      <div className="overlap-group7">
        <div className="role-desc">
          <div className="overlap-group1-2">
            <div className="overlap-group2-2">
              <div className="x-product-designer">{productDesigner}</div>
              <div className="text-4">
                <span className="span">{spanText}</span>
                <span className="span-1">{spanText2}</span>
                <span className="span">{spanText3}</span>
                <span className="span-1">{spanText4}</span>
                <span className="span">{spanText5}</span>
              </div>
            </div>
            <div className="text-5 mulish-bold-granite-gray-18px">{text5}</div>
            <div className="apply-button">
              <div className="overlap-group3-2">
                <div className="rectangle-78 smart-layers-pointers "></div>
                <div className="apply-now">{applyNow}</div>
              </div>
            </div>
          </div>
        </div>
        <Jobtag1 seniorLevelI9762={jobtag1Props.seniorLevelI9762} />
        <Jobtag2 text6={jobtag2Props.text6} />
        <div className="icons8-bookmark-1">
          <img className="vector" src={vector} />
        </div>
      </div>
    </div>
  );
}


function Jobtag1(props) {
  const { seniorLevelI9762 } = props;

  return (
    <div className="job-tag-1">
      <div className="overlap-group-1">
        <div className="rectangle-75-1"></div>
        <div className="senior-level-i9762 mulish-bold-blueberry-16px">{seniorLevelI9762}</div>
      </div>
    </div>
  );
}


function Jobtag2(props) {
  const { text6 } = props;

  return (
    <div className="job-tag-2">
      <div className="overlap-group-1">
        <div className="rectangle-75-1"></div>
        <div className="text-6 mulish-bold-blueberry-16px">{text6}</div>
      </div>
    </div>
  );
}


function Compatibility(props) {
  const {
    image5,
    yourCompatibility,
    x78,
    spanText,
    spanText2,
    spanText3,
    dontAgree,
    button1Props,
    button2Props,
    button3Props,
  } = props;

  return (
    <div className="compatibility">
      <div className="overlap-group8">
        <img className="image-5" src={image5} />
        <div className="your-compatibility">{yourCompatibility}</div>
        <img className="x78" src={x78} />
        <div className="text-7">
          <span className="span-2">{spanText}</span>
          <span className="span1">{spanText2}</span>
          <span className="span-2">{spanText3}</span>
        </div>
        <Button1 rectangle61={button1Props.rectangle61} text8={button1Props.text8} />
        <Button2 rectangle74={button2Props.rectangle74} text9={button2Props.text9} />
        <Button3 rectangle75={button3Props.rectangle75} text10={button3Props.text10} />
        <div className="dont-agree">{dontAgree}</div>
      </div>
    </div>
  );
}


function Button1(props) {
  const { rectangle61, text8 } = props;

  return (
    <div className="button-1">
      <div className="overlap-group-2">
        <img className="rectangle-61" src={rectangle61} />
        <div className="text-8 mulish-bold-blueberry-18px">{text8}</div>
      </div>
    </div>
  );
}


function Button2(props) {
  const { rectangle74, text9 } = props;

  return (
    <div className="button-2">
      <div className="overlap-group-2">
        <img className="rectangle-74" src={rectangle74} />
        <div className="text-9">{text9}</div>
      </div>
    </div>
  );
}


function Button3(props) {
  const { rectangle75, text10 } = props;

  return (
    <div className="button-3">
      <div className="overlap-group3-3">
        <img className="rectangle-75" src={rectangle75} />
        <div className="text-10 mulish-bold-blueberry-18px">{text10}</div>
      </div>
    </div>
  );
}


function Topicons(props) {
  const { profileIcon, x77, ellipse10, notifIcon } = props;

  return (
    <div className="top-icons">
      <div className="overlap-group9">
        <div className="profile-icon" style={{ backgroundImage: `url(${profileIcon})` }}>
          <img className="x77" src={x77} />
        </div>
        <div className="notif-icon">
          <div className="overlap-group1-3">
            <img className="ellipse-10" src={ellipse10} />
            <img className="notif-icon-1" src={notifIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}


function Otherjobs(props) {
  const { text11, text12, image12, image16, text13, jobcardtwoProps, jobcardtwo2Props } = props;

  return (
    <div className="otherjobs">
      <div className="text-11">{text11}</div>
      <div className="auto-flex">
        <div className="text-12 mulish-bold-mountain-mist-40px">{text12}</div>
        <div className="overlap-group10">
          <Jobcardtwo {...jobcardtwoProps} />
          <img className="image-12" src={image12} />
        </div>
        <div className="overlap-group11">
          <Jobcardtwo {...jobcardtwo2Props} />
          <img className="image-16" src={image16} />
        </div>
        <div className="text-13 mulish-bold-mountain-mist-40px">{text13}</div>
      </div>
    </div>
  );
}


function Jobcardtwo(props) {
  const { text19, googleI139130139, text21, rectangle61, text22, place, loremIpsumIsSimpl, text20, vector } = props;

  return (
    <div className="job-card-two">
      <div className="overlap-group7-1">
        <div className="overlap-group1-1">
          <div className="text-1-1 mulish-bold-granite-gray-25px">{text19}</div>
          <div className="google-i139130139 mulish-bold-silver-15px">{googleI139130139}</div>
          <div className="tag1">
            <div className="overlap-group3-1">
              <div className="rectangle-60"></div>
              <div className="text- mulish-bold-blueberry-12px">{text21}</div>
            </div>
          </div>
          <div className="tag2">
            <div className="overlap-group-3">
              <img className="rectangle-61-1" src={rectangle61} />
              <div className="text-22 mulish-bold-blueberry-12px">{text22}</div>
            </div>
          </div>
        </div>
        <div className="tag3">
          <div className="overlap-group-3">
            <div className="rectangle-62"></div>
            <div className="place mulish-bold-blueberry-12px">{place}</div>
          </div>
        </div>
      </div>
      <div className="overlap-group6-1">
        <div className="overlap-group2-1">
          <p className="lorem-ipsum-is-simpl mulish-bold-granite-gray-14px">{loremIpsumIsSimpl}</p>
          <div className="text--1 mulish-bold-perano-20px">{text20}</div>
        </div>
        <div className="icons8-bookmark-1-1">
          <img className="vector-1" src={vector} />
        </div>
      </div>
    </div>
  );
}
const companycardData = {
    text1: "Career Opportunities",
    cultureValues: "Culture & Values",
    workLifeBalance: "Work-Life Balance",
    text2: "Diversity & Inclusion",
    benefits: "Benefits",
    beeCompany: "Bee Company",
    linkedin: "LinkedIn",
    aboutBee: "About Bee",
    text3: "🐝",
};

const jobtag1Data = {
    seniorLevelI9762: "100+ Employees",
};

const jobtag2Data = {
    text6: "Senior-level",
};

const group39Data = {
    productDesigner: "✏ Product Designer",
    spanText: "Listed ",
    spanText2: "4 days ago ",
    spanText3: "|",
    spanText4: " ",
    spanText5: "Melbourne",
    text5: "A product designer is responsible for the design and development of consumer products. Duties of this position include improving existing product designs and analyzing working concepts launched by competitors of similar products to match quality and performance. Depending on the industry, product designers may progress to a senior, or managerial role.",
    applyNow: "Apply Now",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6044362382500d7e0b4d4545/img/vector@2x.png",
    jobtag1Props: jobtag1Data,
    jobtag2Props: jobtag2Data,
};

const button1Data = {
  rectangle61: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/rectangle-61-1@2x.png",
  text8: "Benefits",
};

const button2Data = {
  rectangle74: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/60433fa0dd3bd1f21e8999e1/img/rectangle-74@2x.png",
  text9: "Career Opportunities",
};

const button3Data = {
  rectangle75: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/60433fa0dd3bd1f21e8999e1/img/rectangle-75@2x.png",
  text10: "Culture & Values",
};

const compatibilityData = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/60443a09fdb49a499cfba121/img/image-5-1@2x.png",
    yourCompatibility: "Your Compatibility:",
    x78: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/60433fa0dd3bd1f21e8999e1/img/78-@2x.jpg",
    spanText: "Your ideals that align with ",
    spanText2: "Bee’s",
    spanText3: ":",
    dontAgree: "Dont agree ?",
    button1Props: button1Data,
    button2Props: button2Data,
    button3Props: button3Data,
};

const topiconsData = {
    profileIcon: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/ellipse-9@2x.png",
    x77: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/77@2x.png",
    ellipse10: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/ellipse-10@2x.png",
    notifIcon: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/notif-icon@2x.png",
};

const jobcardtwoData = {
    text19: "Product Designer",
    googleI139130139: "Australia Post",
    text21: "culture",
    rectangle61: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/rectangle-61-1@2x.png",
    text22: "diverse",
    place: "remote",
    loremIpsumIsSimpl: "As a Graphic Designer at Australian Post, you’ll get the chance to help solidfy branding.",
    text20: "Learn more",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6043041eb240a3cf30940a85/img/vector@2x.png",
};

const jobcardtwo2Data = {
    text19: "Product Designer",
    googleI139130139: "Google",
    text21: "culture",
    rectangle61: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/rectangle-61-1@2x.png",
    text22: "diverse",
    place: "remote",
    loremIpsumIsSimpl: "Product Design at Google allows you to be responsible for the user experience of reouned products.",
    text20: "Learn more",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6043041eb240a3cf30940a85/img/vector@2x.png",
};

const otherjobsData = {
    text11: "Other jobs you may like:",
    text12: "<",
    image12: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6044362382500d7e0b4d4545/img/image-12@2x.png",
    image16: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6044362382500d7e0b4d4545/img/image-16@2x.png",
    text13: ">",
    jobcardtwoProps: jobcardtwoData,
    jobcardtwo2Props: jobcardtwo2Data,
};

const RolematchingData = {
    companycardProps: companycardData,
    group39Props: group39Data,
    compatibilityProps: compatibilityData,
    topiconsProps: topiconsData,
    otherjobsProps: otherjobsData,
};

