import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import SideContent from "./sidecontent"
import Footer from "./footer";
import Contact from "./contact"



/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@thementalgeek" />
        <meta name="twitter:creator" content="@mattlearnsjs" />
        <meta name="twitter:title" content="Mental Geek" />
        <meta
          name="twitter:description"
          content="A Mental Health Community for geeks"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dqt94dxh0/image/upload/v1597978015/mentalgeek_orki7i.png"
        />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Add the header of the site. */}
      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}

      <Main>
        <Switch>
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Contact when={data.isPostType && state.router.link == "/contact/"} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <SideBar>
        <SideContent />
      </SideBar>
      <FootArea>
        <Footer />
      </FootArea>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  svg {
    color: #3936ba;
      cursor: pointer;
    }
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f5f8;
`;

const Main = styled.div`
  display: inline-block;
  justify-content: center;
  float: left;
  width: 75%;
  @media only screen and (max-width: 1090px) {
      & {
        width: 100%;
    }
  }
`;

const SideBar = styled.div`
  display: inline-block;
  justify-content: center;
  
  @media only screen and (max-width: 1090px) {
      & {
        width: 100%;
    }
  }
`;



const FootArea = styled.div`
  height: 8rem;
  text-align: center;
  background: black;
  display: grid;
  place-items: center;
  justify-content: center;
  width: 100%;
`


