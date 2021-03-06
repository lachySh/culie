import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components"
import background from "../assets/landing/background.png"
import {Box, Button, Grid} from "@material-ui/core";
import Navigation from "./Navigation";

const Landing = () =>{



   return (

           <Container>
               <Navigation>


               </Navigation>
               {/*<Content>*/}
               {/*    <h1> Landing Page</h1>*/}
               {/*    <Grid container justify="center">*/}
               {/*        <Button component = { Link } to="/login" variant="contained" color="primary">*/}
               {/*            Join Now*/}
               {/*        </Button>*/}
               {/*    </Grid>*/}

               {/*</Content>*/}



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
    background: #ECEFF1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: center;
    align-items:center;

`;


const Content = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    align-items:center;


`






export default Landing

