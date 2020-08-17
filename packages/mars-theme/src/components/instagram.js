import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import InstagramEmbed from "react-instagram-embed";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const InstaDisplay = () => (
  <InstaContainer>
    <InstagramEmbed
      url="https://www.instagram.com/p/CDwqu0EjTNM/"
      maxWidth={80}
      hideCaption={true}
      containerTagName="div"
      protocol=""
      injectScript
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
  </InstaContainer>
);

export default connect(InstaDisplay);

const InstaContainer = styled.div`
    
`;
