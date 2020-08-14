import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Categories from "./categories";
import { FaBeer } from "react-icons/fa";



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
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
      <Sidebar>
        <div>
          <p className="subtitle fancy">
            <span>Categories</span>
          </p>
          <Categories />
        </div>
      </Sidebar>
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
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f5f8;
`;

const Main = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 75%;
  
  
  @media only screen and (max-width: 1090px) {
      width: 100%;
    }
  }
`;

const Sidebar = styled.div`
  display: inline-flex;
  float: right;
  width: 25%;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );
  div {
    margin: 0 auto;
    align-items: center;
  }
  h3 {
    color: green;
    text-align: center;
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
    }
  }
`;








