import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Categories = ({ state }) => (
  <NavContainer>
    {state.theme.category.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link;
      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
            {name}
          </Link>
        </NavItem>
      );
    })}
  </NavContainer>
);

export default connect(Categories);

const NavContainer = styled.nav`
  list-style: none;
  width: 50%;
  max-width: 50%;
  box-sizing: border-box;

  margin: 0;
  align-items: center;
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 auto;
  color: black;
  font-size: 1.5em;
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
