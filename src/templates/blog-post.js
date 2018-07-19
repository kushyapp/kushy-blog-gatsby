import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import nicetime from '../helpers/nicetime';

import kebabCase from "lodash/kebabCase";
import 'prismjs/themes/prism-okaidia.css';

import ReadingProgress from '../components/ReadingProgress';
import SEO from '../components/SEO';
import Cover from '../components/Cover';
import Comments from '../components/Comments';
import PostLoop from '../components/PostLoop';

export default class BlogPost extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      'instagram': false,
      'codepen': false
    };
  }

  componentDidMount() {
    // Check for Instagram script
    if (window.instgrm || document.getElementById('react-instagram-embed-script')) {
      if(this.state.instagram == false)
      {
        window.instgrm.Embeds.process()
      }
    } else {

      // Create script element with Instagram embed JS lib
      const s = document.createElement('script')
      s.async = s.defer = true
      s.src = `//www.instagram.com/embed.js`
      s.id = 'react-instagram-embed-script'
      const body: HTMLElement | null = document.body
      if (body) {
        body.appendChild(s)
      }

      // Run Instagram function to show embeds
      if (window.instgrm && this.state.instagram == false) {
        window.instgrm.Embeds.process()
      }

      // Set IG state to true so the process doesn't run again
      this.setState({
        'instagram': true
      });
    }

    // Add Codepen script to <body> if we detect a Codepen embed
    const codepen = document.getElementsByClassName('codepen');
    if (codepen.length > 0) {
      // Check if we've already embedded the script
      if (!document.getElementById('codepen-script') || !this.state.codepen) {
        // Create script element with Codepen embed JS lib
        const s = document.createElement('script')
        s.async = s.defer = true
        s.src = `//static.codepen.io/assets/embed/ei.js`
        s.id = 'codepen-script'
        const body: HTMLElement | null = document.body
        if (body) {
          body.appendChild(s)
        }

        // Set state to true so the process doesn't run again
        this.setState({
          'codepen': true
        });
      }
    }
  }

  render() {
    const skip = false;
    const post = this.props.data.blog;
    let related;
    this.props.data.relatedPosts ? related = this.props.data.relatedPosts.edges : related = null;
    const currentDate = new Date();

    const tags = post.frontmatter.tags.map((tag) => (
      <li key={tag}><Link to={'/tags/' + kebabCase(tag) }>#{ tag }</Link></li>
    ));

    let postImage = post.frontmatter.cover_image.publicURL;
    let postDate = new Date(post.frontmatter.date);

    if (post.frontmatter.cover_image.childImageSharp !== null) {
      postImage = post.frontmatter.cover_image.childImageSharp && post.frontmatter.cover_image.childImageSharp.sizes && post.frontmatter.cover_image.childImageSharp.sizes.src;
    }

    const title = {
      Ryo: 'Founder / CEO'
    }

    return (
      <main className="ContentArea--nobg container" role="main">
        {/*----- Reading progress only on blog -----*/}
        {post.frontmatter.section === 'blog' && <ReadingProgress targetEl="#Article" />}
        <SEO
          key={`seo-${post.fields.slug}`}
          postImage={postImage}
          postData={post}
          isBlogPost
        />

            <article id="Article" className="Article Article--single ui grid">

              <aside className="Article__author four wide column">

                <section className="ui segment basic centered">
                  <Link to={`/author/${post.frontmatter.author}`} title={ post.frontmatter.author } >
                    <figure className="Avatar">
                        <img src={`/assets/img/avatar/${post.frontmatter.author}.png`} className="ui circular image" alt={post.frontmatter.author} />
                    </figure>
                    <span className="author-name">
                      { post.frontmatter.author } 
                    </span>
                  </Link>

                  <span className="author-title">
                    { title[post.frontmatter.author] }
                  </span>
                </section>
              </aside>

              <section className="Article__body twelve wide column">
                <section className="Article__content">
                  <header className="Article__header">
                    <h1>
                      <a href="https://blog.kushy.net/blog/2017/integrating-crowd-sourced-cannabis-from-tumblr" title="Integrating Crowd Sourced Cannabis from Tumblr">
                        {post.frontmatter.title} 
                      </a>
                    </h1>
                  </header>


                  <div className="Article__text" dangerouslySetInnerHTML={{ __html: post.html }} />

                  <section className="Article__meta ui menu secondary">
                    <aside className="Article__tags item">
                        {post.frontmatter.tags ? 
                            post.frontmatter.tags.map(tag => (
                                <Link to={`/tags/${tag}`}>
                                    { tag }                
                                </Link>
                            )) : ''
                        }
                    </aside>

                    <aside className="Article__share right menu">
                      <a href={`http://twitter.com/share?text=${post.frontmatter.title}&url=http://whoisryosuke.com/${post.fields.slug}&hashtags=${post.frontmatter.tags}`} className="item">
                        <i className="icon twitter"></i>
                        {post.frontmatter.section === 'blog' ? 'Share on Twitter' : 'Share'}
                      </a>
                      <a href={`http://www.tumblr.com/share/link?url=http://whoisryosuke.com${post.fields.slug}`} className="item">
                        <i className="icon tumblr"></i>
                        {post.frontmatter.section === 'blog' ? 'Share on Tumblr' : 'Share'}
                      </a>
                    </aside>
                  </section>

                </section> {/* Article__content */}
              </section> {/* Article__body */}

            </article>



        {/* { post.frontmatter.section === 'blog' && <Comments post={post} /> } */}

      </main>
    );
  }
};

export const query = graphql`
  query BlogPostQuery($slug: String!, $tag: String!) {
    blog: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover_image {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1240 ) {
                  tracedSVG
                  src
                  srcSet
                }
              }
            }
        date(formatString: "DD MMMM, YYYY")
        tags
        section
        author
      }
      fields {
        slug
      }
    },
    relatedPosts:  allMarkdownRemark(
      limit: 2
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { 
        fields:{ slug: { ne: $slug } } 
        frontmatter: { tags: { in: [$tag] } }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            cover_image {
                  publicURL
                  childImageSharp {
                    sizes(maxWidth: 1240 ) {
                      src
                      srcSet
                    }
                  }
                }
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    },
  }
`;