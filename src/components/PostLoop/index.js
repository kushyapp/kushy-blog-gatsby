import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import nicetime from '../../helpers/nicetime';

export default (props) => {
    let postLoop;
    const currentDate = new Date();    
    
    if(props.loop !== undefined) {
        postLoop = props.loop.map(({ node }) => {
                let postDate = new Date(node.frontmatter.date);
                return (
                    <article className="Article" key={node.id}>
                        {/*---------- Featured image ----------*/}
                        { node.frontmatter.cover_image ?
                        <figure>
                            <Link to={node.fields.slug}>
                                {node.frontmatter.cover_image.childImageSharp ? (
                                    <Img sizes={node.frontmatter.cover_image.childImageSharp.sizes} />
                                ) : (
                                        <img src={node.frontmatter.cover_image.publicURL} />
                                    )}
                            </Link>
                        </figure>
                        : '' }
                        
                        {/*---------- Article header ----------*/}
                        <header className="Article__header">
                            <Link
                                to={node.fields.slug}
                                css={{ textDecoration: `none`, color: `inherit` }}
                            >
                                <h1 className="Title ui header">
                                    {node.frontmatter.title}
                                </h1>
                            </Link>
                        </header>

                        {/*---------- Article author ----------*/}
                        <div className="Article__author">
                            <figure className="Avatar">
                                <a href="https://blog.kushy.net/author/kushy" title="kushy">
                                    <img src={`/assets/img/avatar/${node.frontmatter.author}.png`} className="ui circular image" alt={node.frontmatter.author} />
                                </a>
                            </figure>

                            <span className="author-name">
                                <img  />
                                {node.frontmatter.author}
                                {' '} on {nicetime(currentDate, postDate)}
                            </span>
                        </div>
                        
                        {/*---------- Article author ----------*/}
                        <div className="Article__text">
                            
                            <p className="excerpt">
                                {node.excerpt}
                                <Link
                                    to={node.fields.slug}
                                    className="Link"
                                >
                                    Continue reading
                                </Link>
                            </p>
                        </div>
                        <div className="Article__meta ui menu secondary">
                            <aside className="Article__tags item">
                                {node.frontmatter.tags ? 
                                    node.frontmatter.tags.map(tag => (
                                        <Link to={`/tags/${tag}`}>
                                            { tag }                
                                        </Link>
                                    )) : ''
                                }
                            </aside>       
                            <aside className="Article__share menu right">
                                <a href="https://twitter.com/intent/tweet?source=webclient&amp;text=Integrating%20Crowd%20Sourced%20Cannabis%20from%20Tumblr%20https%3A%2F%2Fblog.kushy.net%2Fblog%2F2017%2Fintegrating-crowd-sourced-cannabis-from-tumblr%20via @your_account" className="item" target="blank" title="Tweet this">
                                    <i className="icon twitter"></i>
                                </a>
                                <a href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.kushy.net%2Fblog%2F2017%2Fintegrating-crowd-sourced-cannabis-from-tumblr" className="item" target="blank" title="Share on Facebook">
                                    <i className="icon facebook"></i>
                                </a>
                                <a href="https://plusone.google.com/_/+1/confirm?hl=de&amp;url=https%3A%2F%2Fblog.kushy.net%2Fblog%2F2017%2Fintegrating-crowd-sourced-cannabis-from-tumblr&amp;title=Integrating%20Crowd%20Sourced%20Cannabis%20from%20Tumblr" className="item" target="blank" title="Share on Google+">
                                    <i className="icon google"></i>
                                </a>
                            </aside>     
                        </div>

                        <div className="ui divider"></div>
                    </article>
                )
            })
        }
    return (
        <section className="container row">
            { postLoop }
        </section>
    );
};