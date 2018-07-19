import React from "react";

import Twitter from '../../components/icons/Twitter';
import Instagram from '../../components/icons/Instagram';
import Github from '../../components/icons/Github';
import Hashnode from '../../components/icons/Hashnode';
import Tumblr from '../../components/icons/Tumblr';
import Behance from '../../components/icons/Behance';

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