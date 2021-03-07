import React from 'react';
import styled from "styled-components"


class Description extends React.Component {

    render() {
        return(
            <LeftContainer>
                <Emoji>
                    {this.props.emoji}
                </Emoji>
                <Padding/>

                <Title>
                    {this.props.title}
                </Title>
                <Subtitle>
                    {this.props.description}
                </Subtitle>
            </LeftContainer>


        )


    }


}


export default Description
const Padding = styled.div`
  padding:5px;

`
const Emoji = styled.p`
  font-family: Mulish,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 56px;
    
    `
const Title = styled.p`
  font-family: Mulish,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;


  color: #666666;
`

const Subtitle = styled.p`
  font-family: Mulish,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;


  color: #ABA6A6;

`


const LeftContainer = styled.div`
    padding-top:45%;
    padding-left:10%;
    padding-bottom:35%;



`
