import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logo from "../images/logo.svg"


const Header = ({ state }) => {
  return (
    <>
      <Nav />
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
      <Content>
        <img src={logo} alt="Logo" />
        <h2>A Mental Health Community</h2>
      </Content>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0;
  color: #fff;
  background-color: #f1f5f8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  color: black;
  float: left;
  display: none;

  @media only screen and (max-width: 749px) {
  margin: 25px;
  margin-bottom: 16px;
  color: black;
  float: left;
      display: inline;
      justify-content: center;
    }
  }
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  display: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Content = styled.div`
  width: 80%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0;
  color: #fff;
  background-color: #f1f5f8;
  display: inline-block;
  flex-direction: column;
  justify-content: space-around;
  img {
    width: 30%;
    float: left;
    padding-right: 14%;
    margin-bottom: -40px;
  }
  h2 {
    color: #102a42;
    font-size: 3.7rem;
    
    @media screen and (max-width: 800px) {
    & {
      font-size: 1.5rem;
    }
  }
`;