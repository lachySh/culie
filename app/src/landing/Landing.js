import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components"
import background from "../assets/landing_page.jpg"


const Landing = () =>{


   return (
       <Container>
            <Content>
                <h1> Landing Page</h1>

            </Content>



       </Container>


   )

}

const Wrapper = styled.div`
    background-image: url(${background});
    background-position: center;
    width: 100%;
    height: 100%;
`;


const Container = styled.div`
    background-image: url(${background});
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    
`;

const Content = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);


`





export default Landing

