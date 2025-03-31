(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/+cc":function(e,t,n){
/*!
 * Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=n(1),i=n(7),s=i.get,c=(i.deepValue,i.isArray),l=function(){function e(t,n){var o=n.location,r=void 0===o?0:o,a=n.distance,i=void 0===a?100:a,c=n.threshold,l=void 0===c?.6:c,u=n.maxPatternLength,h=void 0===u?32:u,d=n.caseSensitive,p=void 0!==d&&d,f=n.tokenSeparator,v=void 0===f?/ +/g:f,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b,k=n.id,x=void 0===k?null:k,_=n.keys,S=void 0===_?[]:_,w=n.shouldSort,M=void 0===w||w,C=n.getFn,I=void 0===C?s:C,L=n.sortFn,O=void 0===L?function(e,t){return e.score-t.score}:L,A=n.tokenize,P=void 0!==A&&A,j=n.matchAllTokens,N=void 0!==j&&j,T=n.includeMatches,z=void 0!==T&&T,D=n.includeScore,E=void 0!==D&&D,F=n.verbose,q=void 0!==F&&F;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:i,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:v,findAllMatches:y,minMatchCharLength:m,id:x,keys:S,includeMatches:z,includeScore:E,shouldSort:M,getFn:I,sortFn:O,verbose:q,tokenize:P,matchAllTokens:N},this.setCollection(t),this._processKeys(S)}var t,n;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"_processKeys",value:function(e){if(this._keyWeights={},this._keyNames=[],e.length&&"string"==typeof e[0])for(var t=0,n=e.length;t<n;t+=1){var o=e[t];this._keyWeights[o]=1,this._keyNames.push(o)}else{for(var r=null,a=null,i=0,s=0,c=e.length;s<c;s+=1){var l=e[s];if(!l.hasOwnProperty("name"))throw new Error('Missing "name" property in key object');var u=l.name;if(this._keyNames.push(u),!l.hasOwnProperty("weight"))throw new Error('Missing "weight" property in key object');var h=l.weight;if(h<0||h>1)throw new Error('"weight" property in key must bein the range of [0, 1)');a=null==a?h:Math.max(a,h),r=null==r?h:Math.min(r,h),this._keyWeights[u]=h,i+=h}if(i>1)throw new Error("Total of weights cannot exceed 1")}}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),o=n.tokenSearchers,r=n.fullSearcher,a=this._search(o,r);return this._computeScore(a),this.options.shouldSort&&this._sort(a),t.limit&&"number"==typeof t.limit&&(a=a.slice(0,t.limit)),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),o=0,r=n.length;o<r;o+=1)t.push(new a(n[o],this.options));return{tokenSearchers:t,fullSearcher:new a(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,o={},r=[];if("string"==typeof n[0]){for(var a=0,i=n.length;a<i;a+=1)this._analyze({key:"",value:n[a],record:a,index:a},{resultMap:o,results:r,tokenSearchers:e,fullSearcher:t});return r}for(var s=0,c=n.length;s<c;s+=1)for(var l=n[s],u=0,h=this._keyNames.length;u<h;u+=1){var d=this._keyNames[u];this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:s},{resultMap:o,results:r,tokenSearchers:e,fullSearcher:t})}return r}},{key:"_analyze",value:function(e,t){var n=this,o=e.key,r=e.arrayIndex,a=void 0===r?-1:r,i=e.value,s=e.record,l=e.index,u=t.tokenSearchers,h=void 0===u?[]:u,d=t.fullSearcher,p=t.resultMap,f=void 0===p?{}:p,v=t.results,g=void 0===v?[]:v;!function e(t,r,a,i){if(null!=r)if("string"==typeof r){var s=!1,l=-1,u=0;n._log("\nKey: ".concat(""===o?"--":o));var p=d.search(r);if(n._log('Full text: "'.concat(r,'", score: ').concat(p.score)),n.options.tokenize){for(var v=r.split(n.options.tokenSeparator),y=v.length,b=[],m=0,k=h.length;m<k;m+=1){var x=h[m];n._log('\nPattern: "'.concat(x.pattern,'"'));for(var _=!1,S=0;S<y;S+=1){var w=v[S],M=x.search(w),C={};M.isMatch?(C[w]=M.score,s=!0,_=!0,b.push(M.score)):(C[w]=1,n.options.matchAllTokens||b.push(1)),n._log('Token: "'.concat(w,'", score: ').concat(C[w]))}_&&(u+=1)}l=b[0];for(var I=b.length,L=1;L<I;L+=1)l+=b[L];l/=I,n._log("Token score average:",l)}var O=p.score;l>-1&&(O=(O+l)/2),n._log("Score average:",O);var A=!n.options.tokenize||!n.options.matchAllTokens||u>=h.length;if(n._log("\nCheck Matches: ".concat(A)),(s||p.isMatch)&&A){var P={key:o,arrayIndex:t,value:r,score:O};n.options.includeMatches&&(P.matchedIndices=p.matchedIndices);var j=f[i];j?j.output.push(P):(f[i]={item:a,output:[P]},g.push(f[i]))}}else if(c(r))for(var N=0,T=r.length;N<T;N+=1)e(N,r[N],a,i)}(a,i,s,l)}},{key:"_computeScore",value:function(e){this._log("\n\nComputing score:\n");for(var t=this._keyWeights,n=!!Object.keys(t).length,o=0,r=e.length;o<r;o+=1){for(var a=e[o],i=a.output,s=i.length,c=1,l=0;l<s;l+=1){var u=i[l],h=u.key,d=n?t[h]:1,p=0===u.score&&t&&t[h]>0?Number.EPSILON:u.score;c*=Math.pow(p,d)}a.score=c,this._log(a)}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===o(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t}),2)),n=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var n=e.output;t.matches=[];for(var o=0,r=n.length;o<r;o+=1){var a=n[o];if(0!==a.matchedIndices.length){var i={indices:a.matchedIndices,value:a.value};a.key&&(i.key=a.key),a.hasOwnProperty("arrayIndex")&&a.arrayIndex>-1&&(i.arrayIndex=a.arrayIndex),t.matches.push(i)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var a=0,i=e.length;a<i;a+=1){var s=e[a];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),r.length){for(var c={item:s.item},l=0,u=r.length;l<u;l+=1)r[l](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,n),e}();e.exports=l},function(e,t,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=n(2),a=n(3),i=n(6),s=function(){function e(t,n){var o=n.location,r=void 0===o?0:o,a=n.distance,s=void 0===a?100:a,c=n.threshold,l=void 0===c?.6:c,u=n.maxPatternLength,h=void 0===u?32:u,d=n.isCaseSensitive,p=void 0!==d&&d,f=n.tokenSeparator,v=void 0===f?/ +/g:f,g=n.findAllMatches,y=void 0!==g&&g,b=n.minMatchCharLength,m=void 0===b?1:b,k=n.includeMatches,x=void 0!==k&&k;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:s,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:v,findAllMatches:y,includeMatches:x,minMatchCharLength:m},this.pattern=p?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=i(this.pattern))}var t,n;return t=e,(n=[{key:"search",value:function(e){var t=this.options,n=t.isCaseSensitive,o=t.includeMatches;if(n||(e=e.toLowerCase()),this.pattern===e){var i={isMatch:!0,score:0};return o&&(i.matchedIndices=[[0,e.length-1]]),i}var s=this.options,c=s.maxPatternLength,l=s.tokenSeparator;if(this.pattern.length>c)return r(e,this.pattern,l);var u=this.options,h=u.location,d=u.distance,p=u.threshold,f=u.findAllMatches,v=u.minMatchCharLength;return a(e,this.pattern,this.patternAlphabet,{location:h,distance:d,threshold:p,findAllMatches:f,minMatchCharLength:v,includeMatches:o})}}])&&o(t.prototype,n),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(n,"\\$&").replace(o,"|")),a=e.match(r),i=!!a,s=[];if(i)for(var c=0,l=a.length;c<l;c+=1){var u=a[c];s.push([e.indexOf(u),u.length-1])}return{score:i?.5:1,isMatch:i,matchedIndices:s}}},function(e,t,n){var o=n(4),r=n(5);e.exports=function(e,t,n,a){for(var i=a.location,s=void 0===i?0:i,c=a.distance,l=void 0===c?100:c,u=a.threshold,h=void 0===u?.6:u,d=a.findAllMatches,p=void 0!==d&&d,f=a.minMatchCharLength,v=void 0===f?1:f,g=a.includeMatches,y=void 0!==g&&g,b=s,m=e.length,k=h,x=e.indexOf(t,b),_=t.length,S=[],w=0;w<m;w+=1)S[w]=0;if(-1!==x){var M=o(t,{errors:0,currentLocation:x,expectedLocation:b,distance:l});if(k=Math.min(M,k),-1!==(x=e.lastIndexOf(t,b+_))){var C=o(t,{errors:0,currentLocation:x,expectedLocation:b,distance:l});k=Math.min(C,k)}}x=-1;for(var I=[],L=1,O=_+m,A=1<<(_<=31?_-1:30),P=0;P<_;P+=1){for(var j=0,N=O;j<N;)o(t,{errors:P,currentLocation:b+N,expectedLocation:b,distance:l})<=k?j=N:O=N,N=Math.floor((O-j)/2+j);O=N;var T=Math.max(1,b-N+1),z=p?m:Math.min(b+N,m)+_,D=Array(z+2);D[z+1]=(1<<P)-1;for(var E=z;E>=T;E-=1){var F=E-1,q=n[e.charAt(F)];if(q&&(S[F]=1),D[E]=(D[E+1]<<1|1)&q,0!==P&&(D[E]|=(I[E+1]|I[E])<<1|1|I[E+1]),D[E]&A&&(L=o(t,{errors:P,currentLocation:F,expectedLocation:b,distance:l}))<=k){if(k=L,(x=F)<=b)break;T=Math.max(1,2*b-x)}}if(o(t,{errors:P+1,currentLocation:b,expectedLocation:b,distance:l})>k)break;I=D}var R={isMatch:x>=0,score:0===L?.001:L};return y&&(R.matchedIndices=r(S,v)),R}},function(e,t){e.exports=function(e,t){var n=t.errors,o=void 0===n?0:n,r=t.currentLocation,a=void 0===r?0:r,i=t.expectedLocation,s=void 0===i?0:i,c=t.distance,l=void 0===c?100:c,u=o/e.length,h=Math.abs(s-a);return l?u+h/l:h?1:u}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],o=-1,r=-1,a=0,i=e.length;a<i;a+=1){var s=e[a];s&&-1===o?o=a:s||-1===o||((r=a-1)-o+1>=t&&n.push([o,r]),o=-1)}return e[a-1]&&a-o>=t&&n.push([o,a-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,o=0;o<n;o+=1)t[e.charAt(o)]=0;for(var r=0;r<n;r+=1)t[e.charAt(r)]|=1<<n-r-1;return t}},function(e,t){var n=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)},o=function(e){return null==e?"":function(e){if("string"==typeof e)return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)},r=function(e){return"string"==typeof e},a=function(e){return"number"==typeof e};e.exports={get:function(e,t){var i=[];return function e(t,s){if(s){var c=s.indexOf("."),l=s,u=null;-1!==c&&(l=s.slice(0,c),u=s.slice(c+1));var h=t[l];if(null!=h)if(u||!r(h)&&!a(h))if(n(h))for(var d=0,p=h.length;d<p;d+=1)e(h[d],u);else u&&e(h,u);else i.push(o(h))}else i.push(t)}(e,t),i},isArray:n,isString:r,isNum:a,toString:o}}])},wQbG:function(e,t,n){"use strict";n.r(t);n("FNk8"),n("6fVz"),n("fVRX"),n("q0NK");var o=n("/+cc"),r=n.n(o),a=n("CjXH"),i={components:{ChevronRightIcon:a.d,SearchIcon:a.j},data:()=>({query:"",focusIndex:-1,focused:!1}),computed:{results(){return new r.a(this.headings,{keys:["value"],threshold:.25}).search(this.query).slice(0,15)},headings(){let e=[];return this.$static.allMarkdownPage.edges.map(e=>e.node).forEach(t=>{t.headings.forEach(n=>{e.push({...n,path:t.path,title:t.title})})}),e},showResult(){return this.focused&&this.query.length>0}},methods:{increment(){this.focusIndex<this.results.length-1&&this.focusIndex++},decrement(){this.focusIndex>=0&&this.focusIndex--},go(){if(0===this.results.length)return;let e;e=-1===this.focusIndex?this.results[0]:this.results[this.focusIndex],this.$router.push(e.path+e.anchor),this.$refs.input.blur(),this.query=""}}},s=n("KHd+"),c=n("Kw5r");const{computed:l}=c.a.config.optionMergeStrategies,u={allMarkdownPage:{edges:[{node:{id:"49295bef2db831c2b14b82b02fbc7eb3",path:"/docs/writing-content/",title:"Writing Content",headings:[{depth:1,value:"Writing Content",anchor:"#writing-content"},{depth:2,value:"Writing Markdown",anchor:"#writing-markdown"}]}},{node:{id:"04808e669cf8537a5d2d42d2ea840db8",path:"/docs/sidebar/",title:"Sidebar",headings:[{depth:1,value:"Sidebar",anchor:"#sidebar"},{depth:2,value:"Global Configuration",anchor:"#global-configuration"},{depth:3,value:"The Sidebar Config Object",anchor:"#the-sidebar-config-object"},{depth:2,value:"Frontmatter setup",anchor:"#frontmatter-setup"}]}},{node:{id:"9ad70cb94e1fe6a317a5d47f2e0c2d75",path:"/docs/settings/",title:"Settings",headings:[{depth:1,value:"Settings",anchor:"#settings"},{depth:2,value:"Sidebar",anchor:"#sidebar"},{depth:2,value:"Next and Previous Navigation",anchor:"#next-and-previous-navigation"},{depth:2,value:"Navigation",anchor:"#navigation"},{depth:2,value:"Description",anchor:"#description"},{depth:2,value:"Social Links",anchor:"#social-links"},{depth:2,value:"On this Page",anchor:"#on-this-page"},{depth:2,value:"Google Analytics",anchor:"#google-analytics"}]}},{node:{id:"4fe3023f9083c2e61647f2b035427b32",path:"/docs/installation/",title:"Installation",headings:[{depth:1,value:"Installation",anchor:"#installation"}]}},{node:{id:"95d82bcf962b71caa6da2dbe0cf63701",path:"/docs/",title:"Introduction",headings:[{depth:1,value:"Introduction",anchor:"#introduction"},{depth:2,value:"Fast by default",anchor:"#fast-by-default"},{depth:2,value:"Simple Navigation",anchor:"#simple-navigation"},{depth:2,value:"Search",anchor:"#search"},{depth:2,value:"Dark Mode",anchor:"#dark-mode"},{depth:2,value:"TailwindCSS",anchor:"#tailwindcss"},{depth:3,value:"Changing Colors",anchor:"#changing-colors"},{depth:2,value:"Make it your own",anchor:"#make-it-your-own"},{depth:3,value:"Contribute",anchor:"#contribute"}]}},{node:{id:"09873564a0818ec92881fabdf077984f",path:"/docs/deploying/",title:"Deploying",headings:[{depth:1,value:"Deploying",anchor:"#deploying"}]}}]}};var h=({options:e})=>{e.__staticData?e.__staticData.data=u:(e.__staticData=c.a.observable({data:u}),e.computed=l({$static:()=>e.__staticData.data},e.computed))},d=Object(s.a)(i,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"relative",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.increment.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.decrement.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go.apply(null,arguments)}]}},[t("label",{staticClass:"relative block"},[t("span",{staticClass:"sr-only"},[e._v("Search Documentation")]),t("div",{staticClass:"absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50"},[t("SearchIcon",{staticClass:"text-ui-typo",attrs:{size:"1.25x"}})],1),t("input",{ref:"input",staticClass:"block w-full py-2 pl-10 pr-4 border-2 rounded-lg bg-ui-sidebar border-ui-sidebar focus:bg-ui-background",class:{"rounded-b-none":e.showResult},attrs:{type:"search",placeholder:"Search Documentation..."},domProps:{value:e.query},on:{focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},input:function(t){e.focusIndex=-1,e.query=t.target.value},change:function(t){e.query=t.target.value}}})]),e.showResult?t("div",{staticClass:"fixed inset-x-0 z-50 overflow-y-auto border-2 border-t-0 rounded-lg rounded-t-none shadow-lg results bg-ui-background bottom:0 sm:bottom-auto sm:absolute border-ui-sidebar",staticStyle:{"max-height":"calc(100vh - 120px)"}},[t("ul",{staticClass:"px-4 py-2 m-0"},[0===e.results.length?t("li",{staticClass:"px-2"},[e._v("\n        No results for "),t("span",{staticClass:"font-bold"},[e._v(e._s(e.query))]),e._v(".\n      ")]):e._l(e.results,(function(n,o){return t("li",{key:n.path+n.anchor,staticClass:"border-ui-sidebar",class:{"border-b":o+1!==e.results.length},on:{mouseenter:function(t){e.focusIndex=o},mousedown:e.go}},[t("g-link",{staticClass:"block p-2 -mx-2 text-base font-bold rounded-lg",class:{"bg-ui-sidebar text-ui-primary":e.focusIndex===o},attrs:{to:n.path+n.anchor}},[n.value===n.title?t("span",[e._v("\n            "+e._s(n.value)+"\n          ")]):t("span",{staticClass:"flex items-center"},[e._v("\n            "+e._s(n.title)+"\n            "),t("ChevronRightIcon",{staticClass:"mx-1",attrs:{size:"1x"}}),t("span",{staticClass:"font-normal opacity-75"},[e._v(e._s(n.value))])],1)])],1)}))],2)]):e._e()])}),[],!1,null,null,null);"function"==typeof h&&h(d);t.default=d.exports}}]);