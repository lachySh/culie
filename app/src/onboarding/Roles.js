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


                        </Col>



                    </Row>
                </Container>


            </OuterContainer>

        </>




    )


}




const OuterContainer = styled.div`
    padding-right:70px;
    padding-left:70px;

`


export default Roles

