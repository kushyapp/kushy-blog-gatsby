import React, { Component } from "react";
import Link from "gatsby-link";

import capitalizeFirstLetter from '../helpers/uppercase';

import PostLoop from '../components/PostLoop';

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url} className="ui button">{props.text}</Link>;
    } else {
        return <span className="ui button disabled">{props.text}</span>;
    }
};

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount, pathPrefix } = pathContext;
    const previousUrl = index - 1 == 1 ? '/' + pathPrefix + '/' : '/' + pathPrefix + '/' + (index - 1).toString();
    const nextUrl = '/' + pathPrefix + '/' + (index + 1).toString();

    return (

        <div className="BlogArchive ui container ContentArea">
            <div className="row">
                <h2 className="Title ui header red">
                    <div className="content">
                        { capitalizeFirstLetter(pathPrefix) } archive
                        <div className="sub header">Page {index}</div>
                    </div>
                </h2>

                <PostLoop loop={group} />
            </div>

            <nav className="Pagination ui two item menu secondary">
                <div className="prev item">
                    <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
                </div>
                <div className="next item">
                    <NavLink test={last} url={nextUrl} text="Go to Next Page" />
                </div>
            </nav>
        </div>
    );
};
export default IndexPage;