import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components"
import background from "../assets/landing/background.png"
import {Box, Button, Grid} from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from "./Navigation"
import {Col, Container, Row} from "react-bootstrap";
import Description from "./Description";
const Onboarding = () => {
    return(
        <>
            <Navigation>


            </Navigation>
            <OuterContainer>

                <Container fluid>

                    <Row>
                        <Col  lg="4">
                            <Description description= "What matters the most to you?" title="Rank the qualities." emoji="⛰️"/>
                        </Col>
                        <Col lg="2">
                           empty space

                        </Col>
                        <Col lg="6">
                            form
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


export default Onboarding

