import {Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Button, FormControl} from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import styled from "styled-components"
import logo from '../assets/landing/logo.png'
const Navigation = () => {
    return (
        <>
            <Container>
                <Navbar bg="bg-transparent" >
                    <a className="navbar-brand" >
                        <img src='landing/Logo.svg' alt='this image is not available'/>
                    </a>


                </Navbar>


            </Container>

        </>




    )


}


const Container = styled.div`
    padding-top: 50px;
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;


`
const Image = styled.div`
  padding-right: 10px;
  padding-left: 10px; 


`

const Employers = styled.div`
  font-family: Mulish,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 56px;
  /* identical to box height, or 243% */


  color: rgba(31, 21, 52, 0.5);

  mix-blend-mode: normal;

`


export default Navigation

