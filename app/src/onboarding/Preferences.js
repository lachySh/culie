import React from 'react';
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from "./Navigation"
import {Col, Container, Row} from "react-bootstrap";
import Description from "./Description";
import {Link} from "react-router-dom";
import {FormControl, InputLabel, makeStyles, MenuItem, Select} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Onboarding = () => {
    const classes = useStyles();



    return(
        <>
            <Navigation>


            </Navigation>
            <OuterContainer>

                <Container fluid>

                    <Row>
                        <Col  md="6">
                            <Description description= "Let's get details about your ideal working environment" title="Job Preferences" emoji="️🚀"/>
                        </Col>
                        <Col md="6">
                            <div className="pt-md-5">
                            </div>
                            <div className="pt-md-5">
                            </div>
                            <div className="pt-md-5">
                            </div>
                            <div className="pt-md-5">
                            </div>


                            <Formbox className="pl-6 align-right">
                                <Text>
                                    Size of company
                                </Text>
                                <FormControl className={classes.formControl} style={{minWidth: 400}}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                    >
                                        <MenuItem value={10} component={Text}>1-20 employees</MenuItem>
                                        <MenuItem value={20}>21-100 employees</MenuItem>
                                        <MenuItem value={30}>101-200 employees</MenuItem>
                                        <MenuItem value={30}>201-500 employees</MenuItem>
                                        <MenuItem value={30}>501+ employees</MenuItem>
                                    </Select>
                                </FormControl>


                                <Text>
                                    How many years of experience do you have?
                                </Text>
                                <FormControl className={classes.formControl} style={{minWidth: 400,}}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                    >
                                        <MenuItem value={10}>Entry-level/Graduate</MenuItem>
                                        <MenuItem value={20}>Junior(1-2 years)</MenuItem>
                                        <MenuItem value={30}>Mid-level(3-4 years)</MenuItem>
                                        <MenuItem value={30}>Senior(5-8 years)</MenuItem>
                                        <MenuItem value={30}>9+ years</MenuItem>
                                    </Select>
                                </FormControl>


                                <Text>
                                    Where do you want to work?
                                </Text>
                                <FormControl className={classes.formControl} style={{minWidth: 400}}>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                    >
                                        <MenuItem value={30}>Remotely</MenuItem>
                                        <MenuItem value={10}>Sydney</MenuItem>
                                        <MenuItem value={20}>Melbourne</MenuItem>
                                        <MenuItem value={30}>Queensland</MenuItem>
                                        <MenuItem value={10}>Western Australia</MenuItem>
                                        <MenuItem value={20}>Tasmania</MenuItem>
                                        <MenuItem value={30}>Adelaide</MenuItem>

                                    </Select>
                                </FormControl>
                                <Rectangle>

                                    <Donebox>

                                        <Done>
                                            <Link to="/dashboard">Next</Link>
                                        </Done>

                                    </Donebox>

                                </Rectangle>

                            </Formbox>








                        </Col>


                    </Row>
                </Container>


            </OuterContainer>

        </>




    )


}

const Formbox = styled.div`
 align-content: center;
  align-items: center;
  margin-left:50px;
`

const Donebox = styled.div`
  padding-top: 80px;
  text-align: right;

`
const Points = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height:48px;
  /* identical to box height, or 156% */
  text-align:right;

  color: #9EB0FF;
  

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

const Text = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 18px;
  padding-left: 10px;
  padding-bottom: 0;
  padding-top: 20px;

`

export default Onboarding

