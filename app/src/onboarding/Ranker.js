import React from 'react';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import {Col, Container, Row} from "react-bootstrap";
import minus from '../assets/onboarding/buttons/minus-1.png'
class Ranker extends React.Component {

    render() {
        return(

            <Rectangle>
                <Row>

                    <Col xs="6">
                        <Textbox>
                            <Text>
                               Career Opportunities
                            </Text>

                        </Textbox>

                    </Col>
                    <Col xs="6">
                        <Plusminus>
                            <Row>
                                <Col/>

                                <Col className='pl-0 pr-0 m-0'>

                                    <Button src={minus}/>

                                </Col>
                                <Col className='pl-1 m-0'>
                                    <Countertext>
                                        1
                                    </Countertext>

                            </Col>
                                <Col className='p-0 m-0'>
                                    <Button src={minus}/>
                            </Col>
                            </Row>

                        </Plusminus>

                    </Col>


                </Row>

            </Rectangle>

        )


    }


}

export default Ranker

const Button = styled.img`
  max-height: 40px;


`

const Rectangle = styled.div`

  width: 450px;
  height: 50px;

  border: none;
  margin: 0 auto;

  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0px 14px 9px -15px rgba(0,0,0,0.25);
  padding: 0 1rem


    `
const Textbox = styled.div`
  vertical-align: middle;
  padding-top: 20px;
  padding-left: 15px;

`

const Plusminus = styled.div`
  vertical-align: middle;
  padding-top: 5px;
  padding-left: 0 ;
  padding-right: 0 ;
  margin-left: 0 ;
  margin-right: 0 ;
`



const Text = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 10px;



`


const Countertext = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 10px;
  margin-top: 15px;
  text-align: center;
`

