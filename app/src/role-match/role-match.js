import React from "react";
import './role-match.scss'

function App() {
  return (
    <Rolematching
      compatibilityProps={RolematchingData.compatibilityProps}
      companycardProps={RolematchingData.companycardProps}
      topiconsProps={RolematchingData.topiconsProps}
      group39Props={RolematchingData.group39Props}
      component1Props={RolematchingData.component1Props}
    />
  );
}

export default App;


function Rolematching(props) {
  const { compatibilityProps, companycardProps, topiconsProps, group39Props, component1Props } = props;

  return (
    <div className="role-matching">
      <Compatibility {...compatibilityProps} />
      <Companycard {...companycardProps} />
      <div className="auto-flex">
        <Topicons
          profileIcon={topiconsProps.profileIcon}
          x77={topiconsProps.x77}
          ellipse10={topiconsProps.ellipse10}
          notifIcon={topiconsProps.notifIcon}
        />
        <Group39
          productDesigner={group39Props.productDesigner}
          spanText={group39Props.spanText}
          spanText2={group39Props.spanText2}
          text8={group39Props.text8}
          applyNow={group39Props.applyNow}
          jobtag1Props={group39Props.jobtag1Props}
          jobtag12Props={group39Props.jobtag12Props}
        />
        <Component1 text26={component1Props.text26} jobssuggestProps={component1Props.jobssuggestProps} />
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
    button1Props,
    button2Props,
    button3Props,
  } = props;

  return (
    <div className="compatibility">
      <div className="overlap-group6">
        <img className="image-5" src={image5} />
        <div className="your-compatibility">{yourCompatibility}</div>
        <img className="x78" src={x78} />
        <div className="text-4">
          <span className="span">{spanText}</span>
          <span className="span1-x26ZQC">{spanText2}</span>
          <span className="span">{spanText3}</span>
        </div>
        <Button1 rectangle61={button1Props.rectangle61} text5={button1Props.text5} />
        <Button2 rectangle74={button2Props.rectangle74} text6={button2Props.text6} />
        <Button3 rectangle75={button3Props.rectangle75} text7={button3Props.text7} />
      </div>
    </div>
  );
}


function Button1(props) {
  const { rectangle61, text5 } = props;

  return (
    <div className="button-1">
      <div className="overlap-group-1">
        <img className="rectangle-61" src={rectangle61} />
        <div className="text-5 mulish-bold-blueberry-18px">{text5}</div>
      </div>
    </div>
  );
}


function Button2(props) {
  const { rectangle74, text6 } = props;

  return (
    <div className="button-2">
      <div className="overlap-group-1">
        <img className="rectangle-74" src={rectangle74} />
        <div className="text-6">{text6}</div>
      </div>
    </div>
  );
}


function Button3(props) {
  const { rectangle75, text7 } = props;

  return (
    <div className="button-3">
      <div className="overlap-group2">
        <img className="rectangle-75" src={rectangle75} />
        <div className="text-7 mulish-bold-blueberry-18px">{text7}</div>
      </div>
    </div>
  );
}


function Companycard(props) {
  const { text1, cultureValues, workLifeBalance, text2, benefits, beeCompany, linkedin, aboutBee, text3 } = props;

  return (
    <div className="company-card">
      <div className="overlap-group">
        <div className="card1"></div>
        <div className="company-scores">
          <div className="opportunities">
            <div className="overlap-group1">
              <div className="progress-bar1-1"></div>
              <div className="rectangle-46"></div>
              <div className="text-1 mulish-bold-granite-gray-18px">{text1}</div>
            </div>
          </div>
          <div className="culture">
            <div className="culture-values mulish-bold-granite-gray-18px">{cultureValues}</div>
            <div className="overlap-group2-1">
              <div className="rectangle-47"></div>
            </div>
          </div>
          <div className="work-life-balance">
            <div className="work-life-balance-1 mulish-bold-granite-gray-18px">{workLifeBalance}</div>
            <div className="overlap-group5">
              <div className="rectangle-48"></div>
            </div>
          </div>
          <div className="diversity">
            <div className="overlap-group4">
              <div className="progress-bar1-1"></div>
              <div className="rectangle-49"></div>
              <div className="text-2 mulish-bold-granite-gray-18px">{text2}</div>
            </div>
          </div>
          <div className="perks">
            <div className="overlap-group3">
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


function Topicons(props) {
  const { profileIcon, x77, ellipse10, notifIcon } = props;

  return (
    <div className="top-icons">
      <div className="overlap-group8">
        <div className="profile-icon" style={{ backgroundImage: `url(${profileIcon})` }}>
          <img className="x77" src={x77} />
        </div>
        <div className="notif-icon">
          <div className="overlap-group-10">
            <img className="ellipse-10" src={ellipse10} />
            <img className="notif-icon-1" src={notifIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}


function Group39(props) {
  const { productDesigner, spanText, spanText2, text8, applyNow, jobtag1Props, jobtag12Props } = props;

  return (
    <div className="group-39">
      <div className="overlap-group7">
        <div className="role-desc">
          <div className="overlap-group-11">
            <div className="overlap-group1-1">
              <div className="x-product-designer">{productDesigner}</div>
              <div className="listed-4-days-ago">
                <span className="span0">{spanText}</span>
                <span className="span1-A3EQqx">{spanText2}</span>
              </div>
            </div>
            <div className="text-8 mulish-bold-granite-gray-18px">{text8}</div>
            <div className="apply-button">
              <div className="overlap-group2-2">
                <div className="rectangle-78 smart-layers-pointers "></div>
                <div className="apply-now">{applyNow}</div>
              </div>
            </div>
          </div>
        </div>
        <Jobtag1 text9={jobtag1Props.text9} />
        <Jobtag1 text9={jobtag12Props.text9} className="job-tag-2" />
      </div>
    </div>
  );
}


function Jobtag1(props) {
  const { text9, className } = props;

  return (
    <div className={`job-tag-1 ${className || ""}`}>
      <div className="overlap-group-2">
        <div className="rectangle-75-1"></div>
        <div className="text- mulish-bold-blueberry-16px">{text9}</div>
      </div>
    </div>
  );
}


function Component1(props) {
  const { text26, jobssuggestProps } = props;

  return (
    <div className="component-1">
      <div className="text-26">{text26}</div>
      <Jobssuggest
        jobcardoneProps={jobssuggestProps.jobcardoneProps}
        jobcardone2Props={jobssuggestProps.jobcardone2Props}
        jobcardone3Props={jobssuggestProps.jobcardone3Props}
      />
    </div>
  );
}


function Jobssuggest(props) {
  const { jobcardoneProps, jobcardone2Props, jobcardone3Props } = props;

  return (
    <div className="jobs-suggest">
      <Jobcardone {...jobcardoneProps} />
      <Jobcardone {...jobcardone2Props} className="job-card-" />
      <Jobcardone {...jobcardone3Props} className="job-card-" />
    </div>
  );
}


function Jobcardone(props) {
  const {
    I93745581,
    text12,
    googleI93745589,
    text14,
    rectangle61,
    text15,
    place,
    text11,
    text13,
    vector,
    className,
  } = props;

  return (
    <div className={`job-card-one ${className || ""}`}>
      <div className="overlap-group-3">
        <div className="overlap-group-4">
          <div className="x-i9374 mulish-bold-black-50px">{I93745581}</div>
          <div className="overlap-group-5">
            <div className="text--1 mulish-bold-granite-gray-25px">{text12}</div>
            <div className="google-i9374 mulish-bold-silver-15px">{googleI93745589}</div>
            <div className="tag1">
              <div className="overlap-group-6">
                <div className="rectangle-60"></div>
                <div className="text--2 mulish-bold-blueberry-12px">{text14}</div>
              </div>
            </div>
            <div className="tag2">
              <div className="overlap-group-7">
                <img className="rectangle-61-1" src={rectangle61} />
                <div className="text-15 mulish-bold-blueberry-12px">{text15}</div>
              </div>
            </div>
          </div>
          <div className="tag3">
            <div className="overlap-group-7">
              <div className="rectangle-62"></div>
              <div className="place mulish-bold-blueberry-12px">{place}</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-8">
          <div className="overlap-group-9">
            <p className="text--3 mulish-bold-granite-gray-14px">{text11}</p>
            <div className="text--4 mulish-bold-perano-20px">{text13}</div>
          </div>
          <div className="icons8-bookmark-1">
            <img className="vector" src={vector} />
          </div>
        </div>
      </div>
    </div>
  );
}
const button1Data = {
    rectangle61: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/60433fa0dd3bd1f21e8999e1/img/rectangle-61@2x.png",
    text5: "Benefits",
};

const button2Data = {
    rectangle74: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/60433fa0dd3bd1f21e8999e1/img/rectangle-74@2x.png",
    text6: "Career Opportunities",
};

const button3Data = {
    rectangle75: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/60433fa0dd3bd1f21e8999e1/img/rectangle-75@2x.png",
    text7: "Culture & Values",
};

const compatibilityData = {
    image5: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/60433fa0dd3bd1f21e8999e1/img/image-5@2x.png",
    yourCompatibility: "Your Compatibility:",
    x78: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/60433fa0dd3bd1f21e8999e1/img/78-@2x.jpg",
    spanText: "Your ideals that align with ",
    spanText2: "Bee’s",
    spanText3: ":",
    button1Props: button1Data,
    button2Props: button2Data,
    button3Props: button3Data,
};

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

const topiconsData = {
    profileIcon: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/ellipse-9@2x.png",
    x77: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/77@2x.png",
    ellipse10: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/ellipse-10@2x.png",
    notifIcon: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/notif-icon@2x.png",
};

const jobtag1Data = {
    text9: "Senior-level",
};

const jobtag12Data = {
    text9: "Senior-level",
};

const group39Data = {
    productDesigner: "✏ Product Designer",
    spanText: "Listed ",
    spanText2: "4 days ago",
    text8: "A product designer is responsible for the design and development of consumer products. Duties of this position include improving existing product designs and analyzing working concepts launched by competitors of similar products to match quality and performance. Depending on the industry, product designers may progress to a senior, or managerial role.",
    applyNow: "Apply Now",
    jobtag1Props: jobtag1Data,
    jobtag12Props: jobtag12Data,
};

const jobcardoneData = {
    I93745581: "🐱‍",
    text12: "Product Designer",
    googleI93745589: "Google",
    text14: "culture",
    rectangle61: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/rectangle-61-1@2x.png",
    text15: "diverse",
    place: "remote",
    text11: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Company Information.",
    text13: "Learn more",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6043041eb240a3cf30940a85/img/vector@2x.png",
};

const jobcardone2Data = {
    I93745581: "🐱‍",
    text12: "Product Designer",
    googleI93745589: "Google",
    text14: "culture",
    rectangle61: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/rectangle-61-1@2x.png",
    text15: "diverse",
    place: "remote",
    text11: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Company Information.",
    text13: "Learn more",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6043041eb240a3cf30940a85/img/vector@2x.png",
};

const jobcardone3Data = {
    I93745581: "🐱‍",
    text12: "Product Designer",
    googleI93745589: "Google",
    text14: "culture",
    rectangle61: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/604338b8550d896f1a96719b/img/rectangle-61-1@2x.png",
    text15: "diverse",
    place: "remote",
    text11: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Company Information.",
    text13: "Learn more",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/6040d25af92984a6a9ce6c6f/releases/6043041eb240a3cf30940a85/img/vector@2x.png",
};

const jobssuggestData = {
    jobcardoneProps: jobcardoneData,
    jobcardone2Props: jobcardone2Data,
    jobcardone3Props: jobcardone3Data,
};

const component1Data = {
    text26: "Other jobs you may like:",
    jobssuggestProps: jobssuggestData,
};

const RolematchingData = {
    compatibilityProps: compatibilityData,
    companycardProps: companycardData,
    topiconsProps: topiconsData,
    group39Props: group39Data,
    component1Props: component1Data,
};

