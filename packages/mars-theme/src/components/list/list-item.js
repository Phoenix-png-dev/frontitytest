import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import ListImage from "../list-image";

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
    <StyledArticle>
      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      <ColumnOne>
        {state.theme.featured.showOnList && (
          <ListImage id={item.featured_media} />
        )}
      </ColumnOne>

      <ColumnTwo>
        <Link link={item.link}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>

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

        {/* If the post has an excerpt (short summary text), we render it */}
        {item.excerpt && (
          <Excerpt
            dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
          />
        )}
      </ColumnTwo>
    </StyledArticle>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const StyledArticle = styled.article`
  padding: 12px;
  border: 2px solid;
  border-radius: 25px;
  margin-bottom: 10px;
  height: 280px;

  @media screen and (max-width: 800px) {
    & {
      width: 100%;
      display: block;
      margin-bottom: 20px;
      height: 600px
    }
  }
`;

const ColumnOne = styled.div`
  float: left;
  width: 50%;
  padding: 0 10px;

  @media screen and (max-width: 800px) {
    & {
      width: 100%;
      display: block;
      padding: 0 0;
    }
  }
`;


const ColumnTwo = styled.div`
  float: right;
  width: 40%;
  height: auto;
  padding: 0 10px;

  @media screen and (max-width: 800px) {
    & {
      width: 100%;
      display: block;
      margin: 0 auto;
      padding: 0;
    }
  }
`;


const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
 
`;



const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;
