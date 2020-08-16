import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import ListImage from "./list-image";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <Features>
      <article>
      
    <Image>
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featured.showOnList && (
        <ListImage id={item.featured_media} />
      )}
    </Image>

      <div>
        <Link link={item.link}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}

      <Information>
        {/* If the post has an author, we render a clickable author text. */}
        {author && (
          <StyledLink link={author.link}>
            <AuthorName>
              By <b>{author.name}</b>
            </AuthorName>
          </StyledLink>
        )}
        <PublishDate>
          {" "}
          on <b>{date.toDateString()}</b>
        </PublishDate>
            
      </Information>
      </div>

        
        </article>
      </Features>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);



const Features = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid red;
`;

const Image = styled.div`
  width: 45%;
`

const StyledLink = styled(Link)`
  padding: 15px 0;
`;


const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  padding-bottom: 8px;
  margin: 0 auto;
  box-sizing: border-box;
  float: right;
  display: flex;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  float: right;
  display: inline-block;
  width: 300px;
  margin: 0 auto;
`;

const Information = styled.div`
  width: 100%;
  float: right;
  display: inline-block;
  margin-top: -50px;
`

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  float: right;
  display: flex;
  margin: 0 10px;
`;




const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  float: right;
  display: flex;

`;

