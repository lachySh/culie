import React from "react";
import styled from "styled-components";
import {Button, Col, Row} from "react-bootstrap";
import '../index.css'
class Roleselection extends React.Component {
    constructor(props){
       super(props)
        this.state = {
           role:"",
            showDiv:true
        }
        this.roles = {
            'Development': ["Front-end", "Backend", "Systems"],
            'Design': ["UI", "UX", "Market research"],
            'Engineering': ["Platforms", "Cloud",],
            'Data': ["Data engineering", "Data science", "Big data"],
            'Admin': ["Networking", "Systems"],
            'Product': ["Product owner", "Product design", "Marketing"],
            'People': ["Human resourcing", "Scrum Master", "Project Management"],
            "":[]

        }


    }


    setRole = (role) => {
        this.setState({
            ...this.state,
            role:role,
        })
    }


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
                                    <a href="#" id={item} type={item} className="btn btn-custom m-3 btn-block " aria-pressed="true"  onClick={() => this.setRole(item)}>


                                        {item}

                                    </a>

                                </Col>

                            })


                        }

                    </Row>



                </Row>
                <Title>
                    Select your relevant roles

                </Title>
                <Row className="pb-3">

                    <Row>
                        {
                            this.roles[this.state.role].map((item,index) => {
                                return <Col className="p-1 m-0" >
                                    <a href="#" id={item} type={item} className="btn btn-custom m-3 btn-block " aria-pressed="true"  >

                                        {item}

                                    </a>

                                </Col>

                            })


                        }

                    </Row>



                </Row>
                {this.state.showDiv && <Divide/>}





            </TContainer>
        )


    }


}
const Divide = styled.div`
  padding-top: 50px;


`


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
