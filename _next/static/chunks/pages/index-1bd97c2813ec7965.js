(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(439)}])},1641:function(t,n,e){"use strict";var r=e(5893),o=(e(7294),e(9008)),i=e.n(o),a=e(5115),l=e(3026);n.Z=function(t){var n=t.children,e=t.title,o=void 0===e?"This is the default title":e;return(0,r.jsxs)(a.W2,{maxWidth:1200,height:"100vh",children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:o}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("header",{children:(0,r.jsx)("nav",{})}),n,(0,r.jsx)("br",{}),(0,r.jsx)(l.Z,{})]})}},3026:function(t,n,e){"use strict";var r=e(5893);e(7294);n.Z=function(){return(0,r.jsxs)("footer",{children:[(0,r.jsx)("hr",{}),(0,r.jsx)("span",{}),(0,r.jsx)("br",{})]})}},439:function(t,n,e){"use strict";e.r(n),e.d(n,{__N_SSG:function(){return g},default:function(){return v}});var r=e(5893),o=e(7294),i=e(1641),a="1.9.0",l=e(949),s=e(5115),c=e(4651),u=e(5193),d=function(t){var n=t.value,e=t.month,o=t.state,i=void 0===o?"default":o;return(0,r.jsx)(s.bK,{size:"60px",bg:"default"===i?"primary.900":"primary.50",color:"primary.50",fontWeight:700,rounded:"xl",children:(0,r.jsxs)(s.kC,{direction:"column",textAlign:"center",color:"default"===i?"primary.50":"primary.900",children:[(0,r.jsx)(s.xv,{children:n}),(0,r.jsx)(s.xv,{children:e})]})})},x=function(t){var n=t.children;return(0,r.jsx)(s.xv,{fontSize:["md","lg","xl","2xl"],ml:4,alignSelf:"center",fontFamily:"primary",fontWeight:400,mt:-2,children:n})},h=function(t){var n=t.day,e=t.month,o=t.children,i=t.state,a=void 0===i?"default":i;return(0,r.jsx)(s.W2,{maxWidth:"150ch",mt:7,p:5,bg:"over"===a&&"primary.900",color:"over"===a&&"primary.50",borderRadius:10,children:(0,r.jsxs)(s.kC,{children:[(0,r.jsx)(d,{value:n,month:e,state:a}),(0,r.jsx)(x,{children:o})]})})},f=e(9490),m=function(t){var n=new Date;return n.setMonth(t-1),n.toLocaleString("en-US",{month:"short"})},j=e(1163),g=!0,v=function(t){var n=t.indexPageData,e=t.journals,d=t.years,x=t.months,g=(t.monthlyTotalJournalInformation,(0,l.If)()),v=(g.colorMode,g.toggleColorMode,(0,o.useState)(d[0])),p=v[0],y=v[1],S=(0,o.useState)(x[0]),_=S[0],b=(S[1],(0,o.useState)([])),k=b[0],C=b[1],w=(0,o.useState)(""),W=w[0],M=w[1],z=(0,j.useRouter)();return(0,o.useEffect)((function(){var t=e.filter((function(t){return new Date(t.frontmatter.date).getFullYear()===p}));C(t)}),[e,_,p]),(0,r.jsxs)(i.Z,{title:n.pageTitle["en-US"],children:[(0,r.jsx)(s.kC,{m:2,justifyContent:"space-between",children:(0,r.jsx)(s.xu,{children:(0,r.jsxs)(s.xv,{fontSize:["md","lg","xl","2xl"],fontFamily:"caveat",right:"0px",top:"-10px",transform:"rotate(-10deg)",children:["V",a]})})}),(0,r.jsx)(s.xu,{bg:"primary.900",m:1,rounded:"xl",children:(0,r.jsxs)(s.kC,{align:"center",children:[(0,r.jsxs)(s.kC,{direction:"column",alignItems:"center",flex:1,children:[(0,r.jsxs)(s.xv,{fontSize:["xl","3xl","5xl","7xl"],color:"primary.50",fontFamily:"primary",fontWeight:900,children:[n.hi["en-US"]," ",n.Im["en-US"]," ",n.name["en-US"]]}),(0,r.jsx)(s.xv,{fontSize:["md","xl","3xl","5xl"],color:"secondary.400",fontFamily:"secondary",fontWeight:900,children:n.title["en-US"]})]}),(0,r.jsx)(c.Ee,{src:"./images/".concat(n.image),alt:n.name["en-US"],boxSize:"50%",mt:-50})]})}),d.length>1&&(0,r.jsx)(s.xu,{children:(0,r.jsx)(s.kC,{gap:5,children:(0,r.jsx)(s.kC,{gap:2,children:d.map((function(t,n){var e=p===t;return(0,r.jsx)(u.zx,{ml:5,colorScheme:"blackAlpha",variant:e?"solid":"link",fontWeight:"bold",fontSize:["md","lg","xl","2xl"],onClick:function(){return y(t)},children:t},n)}))})})}),k.map((function(t,n){var e=function(t){return f.ou.fromFormat(t,"yyyy/MM/dd")}(t.frontmatter.date);return(0,r.jsx)(s.xu,{href:"journals/".concat(t.slug),style:{fontWeight:"bold",cursor:"pointer"},onMouseOver:function(){return M(t.frontmatter.date)},onMouseOut:function(){return M("")},onFocus:function(){return M(t.frontmatter.date)},onClick:function(){return z.push("journals/".concat(t.slug))},children:(0,r.jsx)(h,{day:e.day,state:W===t.frontmatter.date?"over":"default",month:m(e.month),children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:t.frontmatter.summary}}),"\xa0",(0,r.jsx)(s.rU,{href:"journals/".concat(t.slug),style:{fontWeight:"bold"},children:t.frontmatter.readMore})]})})},n)}))]})}},9008:function(t,n,e){t.exports=e(5443)}},function(t){t.O(0,[809,774,888,179],(function(){return n=8312,t(t.s=n);var n}));var n=t.O();_N_E=n}]);