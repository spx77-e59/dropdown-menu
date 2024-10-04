(()=>{"use strict";var n={365:(n,e,r)=>{r.d(e,{A:()=>s});var t=r(354),o=r.n(t),a=r(314),i=r.n(a)()(o());i.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.dropdown-menu {\n  display: inline-block;\n  position: relative;\n}\n\n.menu-button {\n  padding: 6px 14px;\n  border: none;\n  margin-bottom: 5px;\n  background-color: #c5c5c5;\n  box-shadow: 1px 1px 2px #9c9c9c;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n}\n\n.menu-button:hover {\n  background-color: #d4d4d4;\n}\n\n.item-list {\n  display: none;\n  position: absolute;\n  z-index: 10; flex-direction: column;\n  background-color: white;\n  box-shadow: 1px 1px 2px #a7a7a7;\n  width: 100%;\n  list-style: none;\n  border-radius: 2px;\n  border-radius: 2px;\n}\n\n.visible {\n  display: flex;\n}\n\n.item {\n  padding: 3px;\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n  border-radius: 2px;\n  transition: background-color 0.15s ease;\n}\n\n.item:hover {\n  background-color: #e6e6e6;\n}\n","",{version:3,sources:["webpack://./src/styles.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,+BAA+B;EAC/B,kBAAkB;EAClB,eAAe;EACf,uCAAuC;AACzC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW,EAAE,sBAAsB;EACnC,uBAAuB;EACvB,+BAA+B;EAC/B,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.dropdown-menu {\n  display: inline-block;\n  position: relative;\n}\n\n.menu-button {\n  padding: 6px 14px;\n  border: none;\n  margin-bottom: 5px;\n  background-color: #c5c5c5;\n  box-shadow: 1px 1px 2px #9c9c9c;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: background-color 0.15s ease;\n}\n\n.menu-button:hover {\n  background-color: #d4d4d4;\n}\n\n.item-list {\n  display: none;\n  position: absolute;\n  z-index: 10; flex-direction: column;\n  background-color: white;\n  box-shadow: 1px 1px 2px #a7a7a7;\n  width: 100%;\n  list-style: none;\n  border-radius: 2px;\n  border-radius: 2px;\n}\n\n.visible {\n  display: flex;\n}\n\n.item {\n  padding: 3px;\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n  border-radius: 2px;\n  transition: background-color 0.15s ease;\n}\n\n.item:hover {\n  background-color: #e6e6e6;\n}\n"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},354:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],u=a[d]||0,A="".concat(d," ").concat(u);a[d]=u+1;var l=r(A),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var f=o(p,t);t.byIndex=s,e.splice(s,0,{identifier:A,updater:f,references:1})}i.push(A)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=r(a[i]);e[s].references--}for(var c=t(n,o),d=0;d<a.length;d++){var u=r(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=c}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0;var t=r(72),o=r.n(t),a=r(825),i=r.n(a),s=r(659),c=r.n(s),d=r(56),u=r.n(d),A=r(540),l=r.n(A),p=r(113),f=r.n(p),b=r(365),v={};v.styleTagTransform=f(),v.setAttributes=u(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=l(),o()(b.A,v),b.A&&b.A.locals&&b.A.locals,document.querySelectorAll(".dropdown-menu").forEach((n=>{const e=n.querySelector("button"),r=n.querySelector("ul"),t=r.querySelectorAll("li");e.classList.add("menu-button"),r.classList.add("item-list"),t.forEach((n=>{n.classList.add("item")}));const o=()=>{r.classList.toggle("visible")};e.addEventListener("click",o),t.forEach((n=>{n.addEventListener("click",o)}))}))})();
//# sourceMappingURL=main.js.map