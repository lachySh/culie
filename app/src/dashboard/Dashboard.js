import React from "react";
import {Col, Row} from "react-bootstrap";
import styled from 'styled-components'
import Sidebar from "./Sidebar";
import bgImg from "../assets/landing/background.png";
import logo from "../assets/landing/logo.png";
import Main from "./Main";
class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:"Julie",
            location:"Melbourne",
            occupation:"Product Designer"

        }
    }
    render(){
        return(
            <>
                <Container>
                    <Wrapper>
                        <Sidebar />
                        <Main />
                    </Wrapper>
                </Container>

            </>
        )
    }


}


const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default Dashboard


