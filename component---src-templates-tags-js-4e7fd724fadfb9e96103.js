webpackJsonp([50739212244294],{249:function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}a.__esModule=!0,a.pageQuery=void 0;var r=t(1),d=l(r),u=t(22),s=l(u),n=t(7),f=l(n),i=t(72),o=l(i),c=function(e){var a=e.pathContext,t=e.data,l=a.tag,r=t.allMarkdownRemark,u=r.edges,n=r.totalCount,f=!1;return d.default.createElement("div",{className:"ui container ContentArea"},d.default.createElement("div",{className:"row"},d.default.createElement("header",null,d.default.createElement("h1",{className:"Title ui header"},"#",d.default.createElement("span",{className:"ui header red"},l)," ",d.default.createElement("small",{className:"normal smaller"},"(",n," post total)"))),d.default.createElement(o.default,{loop:u,skip:f}),d.default.createElement("nav",{className:"container centered"},d.default.createElement(s.default,{to:"/tags",className:"ui button inverted red"},"All tags"))))};c.propTypes={pathContext:f.default.shape({tag:f.default.string.isRequired}),data:f.default.shape({allMarkdownRemark:f.default.shape({totalCount:f.default.number.isRequired,edges:f.default.arrayOf(f.default.shape({node:f.default.shape({frontmatter:f.default.shape({title:f.default.string.isRequired}),fields:f.default.shape({slug:f.default.string.isRequired})})}).isRequired)})})},a.default=c;a.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tags-js-4e7fd724fadfb9e96103.js.map