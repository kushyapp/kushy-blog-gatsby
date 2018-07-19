import React from "react";

export default () => {
    return (
        <footer className="Footer ui container menu secondary">
            <p className="copyright item">
                Copyright &copy; 2018 Kushy
            </p>
            <nav className="Navigation social right menu">
                <a href="http://twitter.com/kushyapp" className="item" title="Twitter">
                    <i className="icon twitter"></i>
                </a>
                <a href="http://instagram.com/kushyapp" className="item" title="Instagram">
                    <i className="icon instagram"></i>
                </a>
                <a href="http://github.com/kushyapp" className="item" title="Github">
                    <i className="icon github"></i>
                </a>
                <a href="http://kushyapp.tumblr.com/" className="item" title="Tumblr">
                    <i className="icon tumblr"></i>
                </a>
            </nav>
        </footer>
    );
};