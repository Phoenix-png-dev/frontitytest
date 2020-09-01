import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { FaDiscord, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Foot>
      <Icons>
        <a href="https://discord.gg/pz8NdeS">
          <FaDiscord color="#2a5ee7" />
        </a>
        <a href="https://twitter.com/thementalgeek">
          <FaTwitterSquare color="#34a1f2" />
        </a>
        <a href="https://www.instagram.com/mental_geek/">
          <FaInstagramSquare color="#ea4d89" />
        </a>
      </Icons>
      <p>&copy;{new Date().getFullYear()} Mental Geek || All Rights Reserved</p>
    </Foot>
  );
};

export default connect(Footer);

const Foot = styled.div`
  height: 8rem;
  text-align: center;
  background: black;
  display: grid;
  place-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;

  p {
    color: white;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-size: 20px;
  }
`;

const Icons = styled.div`
  font-size: 30px;
  text-align: center;
  padding-top: 18px;
  svg {
    padding-right: 10px;
  }
`;
