import React from 'react';
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from "./Navigation"
import {Col, Container, Row} from "react-bootstrap";
import Description from "./Description";
import Ranker from "./Ranker";
import {Link} from "react-router-dom";
import Roleselection from "./Roleselection";
const Roles = () => {
    return(
        <>
            <Navigation>


            </Navigation>
            <OuterContainer>

                <Container fluid>

                    <Row>
                        <Col  md="6">
                            <Description description= "Select your roles" title="Select the company that best suits you" emoji="💻️"/>
                        </Col>
                        <Col md="6">


                            <Roleselection/>
                            <Rectangle>

                                <Donebox>

                                    <Done>
                                        <Link to="/onboarding/3">Next</Link>
                                    </Done>

                                </Donebox>

                            </Rectangle>

                        </Col>



                    </Row>
                </Container>


            </OuterContainer>

        </>




    )


}


const Donebox = styled.div`
  text-align: right;

`

const Rectangle = styled.div`
  border: none;
  margin: 0 auto;

  border-radius: 20px;
  width: 430px;
  height: 50px;
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
  text-align:right;
  padding-right:15px 

`


const OuterContainer = styled.div`
    padding-right:70px;
    padding-left:70px;

`


export default Roles

