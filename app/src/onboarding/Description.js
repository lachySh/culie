import React from 'react';
import styled from "styled-components"


class Description extends React.Component {

    render() {
        return(
            <>
                <Emoji>
                    {this.props.emoji}
                </Emoji>
                <Title>
                    {this.props.title}
                </Title>
                <Subtitle>
                    {this.props.description}
                </Subtitle>
            </>


        )


    }


}


export default Description

const Emoji = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 90px;
  line-height: 56px;
    
    `
const Title = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;


  color: #666666;
`

const Subtitle = styled.p`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 35px;


  color: #ABA6A6;




`
