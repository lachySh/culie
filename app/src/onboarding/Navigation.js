import {Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Button, FormControl} from "@material-ui/core";
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import styled from "styled-components"
import logo from '../assets/landing/culie.png'
const Navigation = () => {
    return (
        <>
            <Container >
                <Navbar bg="bg-transparent" >
                    <a className="navbar-brand" >
                        <Logo src={logo} alt='this image is not available'/>
                    </a>


                </Navbar>


            </Container>

        </>




    )


}
const Logo = styled.img`
  max-height: 150px;

  
`

const Container = styled.div`
    padding-right: 50px;
    padding-bottom: 50px;
    padding-left: 50px;
    max-height:100px


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

