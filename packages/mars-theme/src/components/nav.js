import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    <StyledLink link="/">
      <Title>{state.frontity.title}</Title>
    </StyledLink>
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <Navigation>
          <NavItem key={name}>
            {/* If link url is the current page, add `aria-current` for a11y */}
            <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
              {name}
            </Link>
          </NavItem>
        </Navigation>
      );
    })}
    <Icons>
      <FaFacebookSquare color="#4267b2" />
      <FaTwitterSquare color="blue" />
      <FaInstagramSquare color="#ea4d89" />
    </Icons>
  </NavContainer>
);

export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 749px) {
    display: none;
  }
`;



const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;

const Title = styled.nav`
  font-size: 45px;
  padding: 0 3.7em 0 2.3em;
  margin: 10px;
`;

const NavItem = styled.div`
  padding: 10px 5px 0 5px;
  margin: 0 16px;
  color: #3d4f7a;
  font-size: 1.4em;
  
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

const Icons = styled.nav`
  font-size: 25px;
  padding: 15px 30px;
  margin: 0 50px;

  svg {
    padding-right: 10px;
  }
`;

const Navigation = styled.nav`
  padding-left: 5px;
`;