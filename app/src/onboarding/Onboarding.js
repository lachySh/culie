import React from 'react';
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from "./Navigation"
import {Col, Container, Row} from "react-bootstrap";
import Description from "./Description";
import Ranker from "./Ranker";
import {Link} from "react-router-dom";
const Onboarding = () => {
    return(
        <>
            <Navigation>


            </Navigation>
            <OuterContainer>

                <Container fluid>

                    <Row>
                        <Col  md="6">
                            <Description description= "What matters the most to you?" title="Rank the qualities." emoji="⛰️"/>
                        </Col>

                        <Col md="6" className="pr-5">
                            <div className="pt-5">
                            </div>
                            <div className="pt-5">
                            </div>
                            <div className="pt-5">
                            </div>

                                <Ranker name="Career Opportunities" color="#375AFB"/>
                            <div className="pt-3">
                            </div>
                            <Ranker name="Career Opportunities" color="#375AFB"/>
                            <div className="pt-3">
                            </div>
                            <Ranker name="Career Opportunities" color="#375AFB"/>
                            <div className="pt-3">
                            </div>
                            <Ranker name="Career Opportunities" color="#375AFB"/>
                            <div className="pt-3">
                            </div>
                            <Ranker name="Career Opportunities" color="#375AFB"/>
                            <Link to="/onboarding/3"/>
                            <Donebox>
                                <Done>
                                    <Link to="/react">I'm done</Link>
                                </Done>

                            </Donebox>

                        </Col>

                    </Row>
                </Container>



            </OuterContainer>

        </>




    )


}
const Donebox = styled.div`
  padding-top: 80px;
  padding-left: 380px;


`


const Done = styled.a`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height:48px;
  /* identical to box height, or 156% */

  text-decoration-line: underline;

  color: #9EB0FF;
  



`


const OuterContainer = styled.div`
    padding-right:70px;
    padding-left:70px;

`


export default Onboarding

