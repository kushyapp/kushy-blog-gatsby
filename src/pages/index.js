import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import config from '../config';

import Featured from '../components/Featured';
import PostLoop from '../components/PostLoop';

export default class Frontpage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: this.props.data,
    }
  }

  render() {
    let { data } = this.state;

    const { 
      blog
    } = data;
    
    return (
      <div className="ui container ContentArea">
        <div className="row">

          {/*------- Posts loop -------*/}
          <PostLoop loop={blog.edges} />
          <div className="container centered">
            <Link to={'blog'} className="ui button centered inverted red">Browse our blog archive</Link>
          </div>
          
        </div>
      </div>
    );
  }
};

export const query = graphql`
  query IndexQuery {
    blog: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}, 
      limit: 3
      filter:{frontmatter:{section:{eq: "blog"}}}
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            cover_image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1240 ) {
                  srcSet
                }
              }
            }
            section
            author
            tags
          }
          fields {
            slug
          }
          excerpt(pruneLength: 420)
        }
      }
    },
    # PeaceEmoji: imageSharp (id: { regex: "/peace.png/" }) {
    #       ...emojiImageFields
    # },
  }

  fragment emojiImageFields on ImageSharp {
    resolutions(width: 54, height: 54) {
      ...GatsbyImageSharpResolutions
    }
  }
`;