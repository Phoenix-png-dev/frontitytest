import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Categories from "./categories";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import Mailchimp from "react-mailchimp-form";
 

const SideContent = () => {
  return (
    <Side>
      <div>
        <p className="subtitle fancy">
          <span>Subscribe</span>
        </p>

        <Mailchimp
          action="https://gmail.us17.list-manage.com/subscribe/post?u=9b30d52d578714069d2892613&amp;id=6c002e3c91"
          //Adding multiple fields:
          fields={[
            {
              name: "EMAIL",
              placeholder: "Email",
              type: "email",
              required: true
            }
          ]}
          // Change predetermined language
          messages={{
            sending: "Sending...",
            success: "Thank you for subscribing!",
            error: "An unexpected internal error has occurred.",
            empty: "You must write an e-mail.",
            duplicate: "Too many subscribe attempts for this email address",
            button: "Subscribe!"
          }}
          // Add a personalized class
          className="SignUp"
        />

        <p className="subtitle fancy">
          <span>Follow Us</span>
        </p>
        <Icons>
          <a href="https://www.facebook.com/mentalgeek/">
            <FaFacebookSquare color="#4267b2" />
          </a>
          <a href="https://twitter.com/thementalgeek">
            <FaTwitterSquare color="#34a1f2" />
          </a>
          <a href="https://www.instagram.com/mental_geek/">
            <FaInstagramSquare color="#ea4d89" />
          </a>
        </Icons>
        <p className="subtitle fancy">
          <span>Categories</span>
        </p>
        <Categories />
      </div>
    </Side>
  );
};

export default connect(SideContent);

const Side = styled.div`
  display: inline-flex;
  float: right;
  padding-top: 20px;
  width: 20%;
  background-color: white;
  div {
    margin: 0 auto;
    align-items: center;
  }

  h3 {
    color: green;
    text-align: center;
  }

  .SignUp {
    width: 0;
    display: inline-block;
    margin-left: -60px;
    input {
      width: 200px;
      padding: 10px;
      margin: 2px;
    }
    button {
      margin-top: 2px;
      margin-left: 2px;
      padding: 10px;
      width: 225px;
    }
    .msg-alert {
      width: 225px;
    }
  }
  
  .fancy {
  line-height: 0.5;
  text-align: center;
  font-size: 20px;
  color: #50677e;
  font-weight: 500;
}
.fancy span {
  display: inline-block;
  position: relative;  
}
.fancy span:before,
.fancy span:after {
  content: "";
  position: absolute;
  height: 0;
  border-bottom: 2px solid #50677e;
  border-top: 2px solid #3936ba;
  top: 0;
  width: 50px;
}
.fancy span:before {
  right: 100%;
  margin-right: 15px;
  margin-top: 3px;
}
.fancy span:after {
  left: 100%;
  margin-left: 15px;
  margin-top: 3px;
}
  
  @media only screen and (max-width: 1090px) {
      width: 100%;
      display: inline-flex;
      justify-content: center;
      float: none;
    }
  }
`;

const Icons = styled.nav`
  display: flex;
  font-size: 25px;

  svg {
    padding-right: 10px;
  }
`;