import React from "react";
import styled from "styled-components";
import {Col, Row} from "react-bootstrap";
import '../index.css'
class Roleselection extends React.Component {

    render(){
        const toproles = ['Development', 'Design', 'Engineering', 'Data','Admin', 'Product', 'People']
        return(
            <TContainer>
                <Title>
                    Select your ideal role

                </Title>
                <Row className="pb-3">

                    <Row>
                        {
                            toproles.map((item,index) => {
                                return <Col md="3" className="p-1 m-0" >
                                    <button type={item} className="btn btn-custom m-3 btn-block " aria-pressed="true">


                                        {item}

                                    </button>

                                </Col>

                            })


                        }

                    </Row>



                </Row>
                <Title>
                    Select your relevant roles

                </Title>



            </TContainer>
        )


    }


}
const Title = styled.div`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 48px;
  color: #888888;
  padding-bottom: 25px;
`


const TContainer = styled.div`
  @media (min-width: 768px) {
    padding-left:75px;
    padding-top:150px;


`
const BContainer = styled.div`
  @media (min-width: 768px) {
    padding-left:75px;
    padding-top:150px;


  }
 


`




export default Roleselection
