import React from "react";
import styled from "styled-components";
import {Card, Col, Container, Row} from "react-bootstrap";
import Icon from "./Icon";
import Savedicon from "./Savedicon";
import atlassian from "../assets/dashboard/logos/atlassian-logo.png";
import auspost from "../assets/dashboard/logos/aus-post.png";
import google from "../assets/dashboard/logos/google-icon.png";
import medipass from "../assets/dashboard/logos/Medipass.png";
import pwc from "../assets/dashboard/logos/pwc.png";
import telstra from "../assets/dashboard/logos/telstra-icon.png";
import xero from "../assets/dashboard/logos/xero-logo.png";
import FirebaseManager from "../Utils/FirebaseManager";
import job from "./jobs.json"
const Main = (props) => {
    return (
        <Box>
            <Container className="pl-0">

                    <Welcome>
                        Hi {FirebaseManager.userName}, welcome to your dashboard.

                    </Welcome>
                    <Subtitle>
                        Here are your listings

                    </Subtitle>
                    <Subsubtitle>
                        Jobs for you:

                    </Subsubtitle>
                    <Iconwrapper>
                        <Row>
                            {
                                job.jobs.map((item) => {
                                    var image = google
                                    console.log(item.company)
                                    if (item.company == "Atlassian") {
                                        image = atlassian
                                    }
                                    if (item.company == "Australian Post") {
                                        image = auspost
                                    }
                                    if (item.company == "Xero") {
                                        image = xero
                                    }
                                    console.log(image)
                                    return (
                                        <Col md="3">
                                            <Icon img={image}
                                                  role = {item.title}
                                                  company={item.company}
                                                  tag1 = {item.tags[0]}
                                                  tag2={item.tags[1]}
                                                  tag3={item.tags[2]}
                                                  description={item.description}

                                            />
                                        </Col>

                                    )

                                })

                            }

                        </Row>

                    </Iconwrapper>


                <Subsubtitle>
                    Your saved Jobs

                </Subsubtitle>
                <Iconwrapper>
                    <Row>
                        {
                            [1,2,3,3].map((item) => {
                                return (
                                    <Col md="3">
                                        <Savedicon
                                            img={google}
                                            role = "Product Designer"
                                            company="Google"
                                            description="
As a product designer at Google, design solutions to complex problems in the form of consumer products.
                              "
                                            days="4"

                                        />
                                    </Col>

                                )

                            })

                        }

                    </Row>


                </Iconwrapper>

            </Container>

        </Box>
    );
};


const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-left:2%;
  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;
    @media (max-width: 900px) {
      display: none;
    }
  }
`;
const Subtitle = styled.div`
  height: 56px;
  padding-top: 25px;

  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 28px;
  text-align: left;
  /* identical to box height, or 280% */


  color: #C2C7DD;


`
const Iconwrapper = styled.div`
  height: 250px;


`
const Welcome = styled.div`

  padding-top: 50px;
  padding-bottom:25px;
  height: 50px;

  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 56px;
  /* identical to box height, or 187% */


  color: #8E95B9;

`

const Subsubtitle = styled.div`

  padding-top: 16px;


  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size:18px;
  line-height: 56px;
  /* identical to box height, or 233% */


  color: #8E95B9;


`

export default Main;
