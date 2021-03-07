import React from "react";
import profile from '../assets/dashboard/profile.png'
import styled from "styled-components";
import logo from '../assets/landing/logo.png'
const Sidebar = () => {
    return (
        <Container>


            <LogoWrapper>
                <img src={profile} />

                <h1>
                    Julie
                </h1>
                <h2>
                    📍Melbourne
                </h2>
                <h4>
                    🏢 Product Designer
                </h4>


            <div className="pt-4">
                <h4>
                    ⭐️ My Dashboard
                </h4>
                <h4>
                    📃 My Documents
                </h4>
                <h4>
                    ✅ My Matched Jobs
                </h4>
                <h4>
                    ✏️ Edit My Profile
                </h4>
            </div>

            </LogoWrapper>
        </Container>
    );
};

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }
  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
    align-content: center;
  }
  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }
  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 350px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  text-align: center;
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
  h1 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 56px;
    /* or 233% */

    text-align: center;
    color: #666666;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
  h2 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    /* or 280% */

    text-align: center;

    color:#666666;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
    h3 {
      font-family: Mulish;
      font-style: normal;
      font-weight: bold;
      font-size: 13px;
      /* or 280% */

      text-align: center;

      color: #AEA6A6;

      span {
        color: #ff8d8d;
        cursor: pointer;
      }
    }
  h4 {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    /* or 280% */

    text-align: center;

    color: #AEA6A6;
    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }

`;




export default Sidebar
