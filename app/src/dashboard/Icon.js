import styled from 'styled-components'
import google from '../assets/dashboard/logos/Google.png'
import save from '../assets/dashboard/Vector.png'
const Icon = (props) => {
    return (


            <Card>
                <Image src={props.img}/>
                <Title>
                    {props.role}
                </Title>
                <Subtitle>
                    {props.company}
                </Subtitle>
                <Tag>
                    {props.tag1}
                    </Tag>
                <Tag2>
                    {props.tag2}
                </Tag2>
                <Tag3>
                    {props.tag3}
                </Tag3>
                <Description>
                    {props.description}

                </Description>
                <Learn>

                   Learn more
                </Learn>


            </Card>



    )



}
const Vector = styled.img`
  position: absolute;
  width: 39px;
  height: 32px;
  left: 254px;
  top: 252px;

  border-radius: 20px;

`
const Card = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  padding: 15px;

  background: #FFFFFF;
  box-shadow: 0px 10px 20px 4px rgba(0, 0, 0, 0.1);
  border-radius: 20px;


`
const Learn = styled.div`
  position: absolute;
  width: 214.99px;
  height: 44.8px;
  left: 25px;
  top: 190px;

  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 56px;
  /* or 280% */

  text-decoration-line: underline;

  color: #9EB0FF;

`
const Tag = styled.div`
  position: absolute;
  width: 60.18px;
  height: 20.12px;
  left: 25px;
  top: 75px;
  text-align: center;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 20px;
  background: #D2DAFF;
  border-radius: 20px;

`
const Tag2 = styled.div`
  position: absolute;
  width: 60.18px;
  height: 20.12px;
  left: 90px;
  top: 75px;
  text-align: center;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 20px;
  background: #D2DAFF;
  border-radius: 20px;

`
const Tag3 = styled.div`
  position: absolute;
  width: 60.18px;
  height: 20.12px;
  left: 155px;
  top: 75px;
  text-align: center;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 20px;
  background: #D2DAFF;
  border-radius: 20px;

`

const Image  = styled.img`
  position: absolute;
  width: 39px;
  height: 39px;
  left: 20px;
  top: 28px;


`
const Title = styled.a`
  position: absolute;
  width: 214.99px;
  height: 44.8px;
  left: 68px;
  top: 25px;

  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  /* or 224% */


  color: #666666;

`

const Subtitle = styled.a`
  position: absolute;
  width: 51px;
  height: 56px;
  left: 68px;
  top: 44px;

  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 30px;
  /* identical to box height, or 373% */


  color: #BFBFBF;

`


const Description = styled.div`
  position: absolute;
  width: 200px;
  height: 80px;
  left: 26px;
  top: 100px;

  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 25px;
  /* or 179% */


  color: #666666;


`


export default Icon

