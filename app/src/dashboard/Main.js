import React from "react";
import styled from "styled-components";
import {Card, Col, Container, Row} from "react-bootstrap";
import Icon from "./Icon";
const Main = () => {
    return (
        <Box>
            <Container className="pl-0">




                    <Welcome>
                        Hi Julie, welcome to your dashboard.

                    </Welcome>
                    <Subtitle>
                        Here are your listings

                    </Subtitle>
                    <Subsubtitle>
                        Jobs for you:

                    </Subsubtitle>

                    <Icon>


                    </Icon>


            </Container>

        </Box>
    );
};


const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-left:100px;
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

  padding-top: 25px;


  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size:18px;
  line-height: 56px;
  /* identical to box height, or 233% */


  color: #8E95B9;


`

export default Main;
