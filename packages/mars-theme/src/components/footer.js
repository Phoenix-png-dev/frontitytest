import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <Foot>
                <Icons>
                    <FaFacebookSquare color="#4267b2" />
                    <FaTwitterSquare color="blue" />
                    <FaInstagramSquare color="#ea4d89" />
                </Icons>
                <p>
                    &copy;{new Date().getFullYear()} Mental Geek || All Rights Reserved
        </p>
        
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
  font-size: 25px;
  text-align: center;
  padding-top: 18px;
  svg {
    padding-right: 10px;
  }
`;