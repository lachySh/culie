import React, {useState} from 'react';
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from "./Navigation"
import {Col, Container, Row} from "react-bootstrap";
import Description from "./Description";
import Ranker from "./Ranker";
import {Link} from "react-router-dom";
const Rank = () => {
    const [count, setState] = useState(15)






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
                            <div className="pt-md-5">
                            </div>
                            <div className="pt-md-5">
                            </div>
                            <div className="pt-md-5">
                            </div>
                            <div className="pt-md-5">
                            </div>

                        <Rectangle>
                            <Points>
                                {count} Points left

                            </Points>

                        </Rectangle>


                                <Ranker handler = {setState} name="Career Opportunities" color="#375AFB"/>

                            <Ranker handler = {setState} name="Culture & Values" color="#375AFB"/>

                            <Ranker handler = {setState} name="Work Life Balance" color="#375AFB"/>

                            <Ranker handler = {setState} name="Diversity" color="#375AFB"/>

                            <Ranker handler = {setState} name="Perks" color="#375AFB"/>
                            <Rectangle>

                                <Donebox>

                                    <Done>
                                        <Link to="/onboarding/2">I'm done {'>'}</Link>
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
  padding-top: 20px;
  text-align: right;

`
const Points = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 0px;
  margin-top: -70px;
  /* identical to box height, or 156% */
  text-align:right;

  color: #9EB0FF;
  

`
const Rectangle = styled.div`
  border: none;
  margin: 0 auto;

  border-radius: 20px;
  width: 430px;
  height: 20px;
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
  

`


const OuterContainer = styled.div`
    padding-right:70px;
    padding-left:70px;

`


export default Rank

