webpackJsonp([0x63dec1ebaa6c],{242:function(e,t){"use strict";function a(e){return void 0!==e?e.charAt(0).toUpperCase()+e.slice(1):null}t.__esModule=!0,t.default=a,e.exports=t.default},247:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var u=a(1),n=l(u),r=a(22),s=l(r),c=a(242),d=l(c),i=a(72),o=l(i),f=function(e){return e.test?n.default.createElement("span",{className:"ui button disabled"},e.text):n.default.createElement(s.default,{to:e.url,className:"ui button"},e.text)},m=function(e){var t=(e.data,e.pathContext),a=t.group,l=t.index,u=t.first,r=t.last,s=(t.pageCount,t.pathPrefix),c=l-1==1?"/"+s+"/":"/"+s+"/"+(l-1).toString(),i="/"+s+"/"+(l+1).toString();return n.default.createElement("div",{className:"BlogArchive ui container ContentArea"},n.default.createElement("div",{className:"row"},n.default.createElement("h2",{className:"Title ui header red"},n.default.createElement("div",{className:"content"},(0,d.default)(s)," archive",n.default.createElement("div",{className:"sub header"},"Page ",l))),n.default.createElement(o.default,{loop:a})),n.default.createElement("nav",{className:"Pagination ui two item menu secondary"},n.default.createElement("div",{className:"prev item"},n.default.createElement(f,{test:u,url:c,text:"Go to Previous Page"})),n.default.createElement("div",{className:"next item"},n.default.createElement(f,{test:r,url:i,text:"Go to Next Page"}))))};t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-templates-blog-archive-js-ed5882382c790f54a665.js.map