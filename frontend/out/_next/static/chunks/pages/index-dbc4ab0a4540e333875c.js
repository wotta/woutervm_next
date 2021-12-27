(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6347:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(7294),i=n(1664),a=n(8690),c=function(e){var t=e.navigation,n=(0,o.useState)(!1),c=n[0],s=n[1],l=(0,o.useRef)(null);return(0,o.useEffect)((function(){var e=function(e){!0===c&&l.current&&!l.current.contains(e.target)&&s(!1)},t=function(e){return"Escape"===e.key&&s(!1)};return document.body.addEventListener("click",e),document.body.addEventListener("keydown",t),function(){document.body.removeEventListener("click",e),document.body.removeEventListener("keydown",t)}}),[c]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("nav",{className:"flex px-11 items-center justify-between flex-wrap py-4 fixed w-full z-10 top-0 text-lg ".concat(c?"shadow-lg bg-gray-200 dark:bg-grey-200":"bg-gray-100 dark:bg-grey-100"),children:[(0,r.jsx)("div",{className:"flex items-center flex-shrink-0 text-white mr-6",children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{className:"text-white no-underline hover:text-white hover:no-underline",children:(0,r.jsxs)("span",{className:"bg-clip-text text-transparent bg-gradient-to-b from-pink-600 to-purple-600 text-5xl font-black motion-safe:animate-pulse",children:[(0,r.jsx)("i",{className:"em em-grinning"})," Wotta"]})})})}),(0,r.jsx)("button",{type:"button",className:"block lg:hidden px-2 text-pink-600 hover:text-gray-600 focus:outline-none focus:text-gray-600 ".concat(c&&"transform rotate-180"),onClick:function(){return s(!c)},children:(0,r.jsx)("svg",{className:"h-6 w-6 fill-current",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:c?(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}):(0,r.jsx)("path",{fillRule:"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})}),(0,r.jsx)("div",{className:"w-full flex-grow lg:flex lg:items-center lg:w-auto ".concat(c?"block shadow-3xl":"hidden"),ref:l,children:(0,r.jsx)("ul",{className:"pt-6 lg:pt-0 list-reset lg:flex justify-end flex-1 items-center",children:t.filter((function(e){return e.display})).map((function(e){var t=(0,a.Z)().isCurrent(e.url);return(0,r.jsx)("li",{className:"mr-3",children:(0,r.jsx)(i.default,{href:e.url,children:(0,r.jsx)("a",{className:"inline-block py-2 px-4 no-underline text-xl ".concat(t?"text-pink-600 font-medium":"text-gray-600 hover:text-pink-600 hover:text-underline"),target:e.blank?"_blank":"_self",children:e.name})})},e.id)}))})})]})})},s=function(e){var t=e.children,n=e.navigation;e.seo;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{navigation:n}),t]})}},2710:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(6156),o=n(5893),i=n(7294),a=n(5517),c=n(1422),s=n(9008),l=function(e){var t=e.seo;return t.title||t.description?(0,o.jsxs)(s.default,{children:[t.title&&(0,o.jsx)("title",{children:t.title}),t.description&&(0,o.jsx)("meta",{name:"description",content:t.description})]}):null},u=function(e){var t=e.seo;return(0,o.jsxs)(s.default,{children:[t.metaTitle&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("title",{children:t.metaTitle}),(0,o.jsx)("meta",{property:"og:title",content:t.metaTitle}),(0,o.jsx)("meta",{name:"twitter:title",content:t.metaTitle})]}),t.metaDescription&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"description",content:t.metaDescription}),(0,o.jsx)("meta",{property:"og:description",content:t.metaDescription}),(0,o.jsx)("meta",{name:"twitter:description",content:t.metaDescription})]}),t.shareImage&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{property:"og:image",content:t.shareImage}),(0,o.jsx)("meta",{name:"twitter:image",content:t.shareImage}),(0,o.jsx)("meta",{name:"image",content:t.shareImage})]}),t.article&&(0,o.jsx)("meta",{property:"og:type",content:"article"}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})},p=function e(t){return{explode:function(e){return t.split(e)},after:function(e){var n=t.indexOf(e);return t.valueOf().substring(n+e.length)},trim:function(){return t.trim()},replace:function(e,n){return t.replace(e,n)},toLowerCase:function(){return t.toLowerCase()},toUpperCase:function(){return t.toUpperCase()},length:function(){return t.length},isEmpty:function(){return 0===t.length},isNotEmpty:function(){return t.length>0},removeLast:function(e){return t.substring(0,t.length-e)},when:function(n,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return n?(t=r instanceof Function?r(t):t,e(t)):o?(t=o instanceof Function?o(t):t,e(t)):e(t)},unless:function(n,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return n?o?(t=o instanceof Function?o(t):t,e(t)):e(t):(t=r instanceof Function?r(t):t,e(t))},value:function(){return t}}},f=n(8690),m=function(e,t){return p("").when(e.no_index,(function(e){return e.concat(t.no_index,",")})).when(e.no_follow,(function(e){return e.concat(t.no_follow,",")})).removeLast(1)},d=function(e){return p("").when("current"===e.canonical_url,(function(){return(0,f.Z)().current()})).when("external"===e.canonical_url&&e.url,(function(){return e.url})).when("entry"===e.canonical_url,(function(){return(0,f.Z)().current()})).value()},x=function(e){var t=e.seo,n=(0,i.useContext)(a.GlobalContext).twitterUsername,r=p(n).when("@"===n.charAt(0),(function(){return n.substr(1)})).value();return(0,o.jsxs)(s.default,{children:[t.social_title&&(0,o.jsx)("meta",{property:"twitter:title",content:t.social_title}),t.social_description&&(0,o.jsx)("meta",{property:"twitter:description",content:t.social_description}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),r&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"twitter:site",content:"@".concat(r)}),(0,o.jsx)("meta",{name:"twitter:creator",content:"@".concat(r)})]}),t.twitter_image&&(0,o.jsx)("meta",{property:"twitter:image",content:(0,c.$)(t.twitter_image)}),t.twitter_image&&t.twitter_image.data.attributes.alternativeText&&(0,o.jsx)("meta",{property:"twitter:image:alt",content:t.twitter_image.data.attributes.alternativeText})]})},g=function(e){var t=e.seo,n={"@context":"http://schema.org","@type":"Organization",name:t.name,url:(0,f.Z)().current()};return t.logo&&(n.logo=(0,c.$)(t.logo)),(0,o.jsx)(s.default,{children:(0,o.jsx)("script",{type:"application/ld+json",children:JSON.stringify(n)})})},h=function(e){var t=e.seo,n={"@context":"http://schema.org","@type":"Person",url:(0,f.Z)().current(),name:t.name};return(0,o.jsx)(s.default,{children:(0,o.jsx)("script",{type:"application/ld+json",children:JSON.stringify(n)})})};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={"seo.basic":l,"seo.advanced":function(e){var t=e.seo,n=m(t,{no_index:"noindex",no_follow:"nofollow"}),r=d(t);return(0,o.jsxs)(s.default,{children:[n&&(0,o.jsx)("meta",{name:"robots",content:n}),r&&(0,o.jsx)("link",{rel:"canonical",href:r})]})},"seo.open-graph":function(e){var t=e.seo;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.default,{children:[t.social_title&&(0,o.jsx)("meta",{property:"og:title",content:t.social_title}),t.social_description&&(0,o.jsx)("meta",{property:"og:description",content:t.social_description}),t.social_image&&(0,o.jsx)("meta",{property:"og:image",content:(0,c.$)(t.social_image)})]}),(0,o.jsx)(x,{seo:t})]})},"seo.json-ld-schema":function(e){var t=e.seo;return"none"===t.type?null:"person"===t.type?(0,o.jsx)(h,{seo:t}):"org"===t.type?(0,o.jsx)(g,{seo:t}):(0,o.jsx)(s.default,{children:(0,o.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t.custom)})})}},w=function(e){var t=e.seo,n=(0,i.useContext)(a.GlobalContext).siteName;if(t instanceof Array&&t.length>0)return(0,o.jsx)(o.Fragment,{children:t.map((function(e,t){var n=y[e.__component];return(0,o.jsx)(n,{seo:e},t)}))});if("object"===typeof t&&Boolean(t)){var r=v({},t),c=v(v({},r),{},{metaTitle:n});return(0,o.jsx)(u,{seo:c})}return null}},8690:function(e,t,n){"use strict";var r=n(1163);t.Z=function(){var e=(0,r.useRouter)(),t=e.basePath,n=e.asPath,o=e.route;return{debug:function(){console.log("basePath: ".concat(t)),console.log("asPath: ".concat(n)),console.log("route: ".concat(o))},isCurrent:function(e){return n===e},current:function(){return n}}}},8179:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return d}});var r=n(5893),o=(n(7294),n(2710)),i=n(883),a=n(6347),c=n(8456),s=n.n(c),l=n(6156);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={p:function(e){var t=e.node,n=e.children;if("img"===t.children[0].tagName){var o=t.children[0];return(0,r.jsx)("img",p(p({},p(p({},o.properties),{},{src:(0,i.p)(o.properties.src)})),{},{className:" flex w-32 h-32 rounded-full mr-5 ml-3 float-right place-content-start mt-0 [shape-outside: circle(50% at 50% 50%)] "}))}return(0,r.jsx)("p",{children:n})}},m=!0,d=function(e){var t=e.navigation,n=e.homepage,i=n.attributes.builder.find((function(e){return"builder.content"===e.__component})),c=f;return(0,r.jsxs)(a.Z,{navigation:t,children:[(0,r.jsx)(o.Z,{seo:n.attributes.seo}),(0,r.jsx)("div",{className:"container mt-24 md:mt-18 p-8 rounded prose prose-pink prose-sm sm:prose-lg lg:prose-lg xl:prose-2xl mx-auto",children:(0,r.jsx)("main",{children:(0,r.jsx)("article",{children:(0,r.jsx)(s(),{components:c,children:i.content})})})})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8179)}])}},function(e){e.O(0,[774,611,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);