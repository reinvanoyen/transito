/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dist/transito.bundle.js":
/*!*********************************!*\
  !*** ./dist/transito.bundle.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("!function(t,e){ true?module.exports=e():0}(__webpack_require__.g,(function(){return(()=>{\"use strict\";var t={d:(e,s)=>{for(var r in s)t.o(s,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})}},e={};t.r(e),t.d(e,{BodyClassesPlugin:()=>r,PreloadImagesPlugin:()=>s,Transito:()=>c});const s={install(t){t.on(\"receivedresponse\",(e=>{t.emptyPromises();const s=e.response,r=/<body.*?>([\\s\\S]*)<\\/body>/.exec(s)[1],i=document.createElement(\"div\");i.innerHTML=r;const a=i.getElementsByTagName(\"img\");for(let e=0;e<a.length;e++)t.addPromise(new Promise((t=>{const s=new Image;s.onload=t,s.onerror=t,s.src=a[e].getAttribute(\"src\")})))}))}},r={install(t){t.on(\"postload\",(t=>{const e=t.response.match(/body\\sclass=['|\"]([^'|\"]*)['|\"]/);document.body.className=\"\",e&&e[1].split(\" \").forEach((t=>{document.body.classList.add(t)}))}))}};let i={\"'\":\"&apos;\",\"<\":\"&lt;\",\">\":\"&gt;\",\" \":\"&nbsp;\",\"¡\":\"&iexcl;\",\"¢\":\"&cent;\",\"£\":\"&pound;\",\"¤\":\"&curren;\",\"¥\":\"&yen;\",\"¦\":\"&brvbar;\",\"§\":\"&sect;\",\"¨\":\"&uml;\",\"©\":\"&copy;\",ª:\"&ordf;\",\"«\":\"&laquo;\",\"¬\":\"&not;\",\"®\":\"&reg;\",\"¯\":\"&macr;\",\"°\":\"&deg;\",\"±\":\"&plusmn;\",\"²\":\"&sup2;\",\"³\":\"&sup3;\",\"´\":\"&acute;\",µ:\"&micro;\",\"¶\":\"&para;\",\"·\":\"&middot;\",\"¸\":\"&cedil;\",\"¹\":\"&sup1;\",º:\"&ordm;\",\"»\":\"&raquo;\",\"¼\":\"&frac14;\",\"½\":\"&frac12;\",\"¾\":\"&frac34;\",\"¿\":\"&iquest;\",À:\"&Agrave;\",Á:\"&Aacute;\",Â:\"&Acirc;\",Ã:\"&Atilde;\",Ä:\"&Auml;\",Å:\"&Aring;\",Æ:\"&AElig;\",Ç:\"&Ccedil;\",È:\"&Egrave;\",É:\"&Eacute;\",Ê:\"&Ecirc;\",Ë:\"&Euml;\",Ì:\"&Igrave;\",Í:\"&Iacute;\",Î:\"&Icirc;\",Ï:\"&Iuml;\",Ð:\"&ETH;\",Ñ:\"&Ntilde;\",Ò:\"&Ograve;\",Ó:\"&Oacute;\",Ô:\"&Ocirc;\",Õ:\"&Otilde;\",Ö:\"&Ouml;\",\"×\":\"&times;\",Ø:\"&Oslash;\",Ù:\"&Ugrave;\",Ú:\"&Uacute;\",Û:\"&Ucirc;\",Ü:\"&Uuml;\",Ý:\"&Yacute;\",Þ:\"&THORN;\",ß:\"&szlig;\",à:\"&agrave;\",á:\"&aacute;\",â:\"&acirc;\",ã:\"&atilde;\",ä:\"&auml;\",å:\"&aring;\",æ:\"&aelig;\",ç:\"&ccedil;\",è:\"&egrave;\",é:\"&eacute;\",ê:\"&ecirc;\",ë:\"&euml;\",ì:\"&igrave;\",í:\"&iacute;\",î:\"&icirc;\",ï:\"&iuml;\",ð:\"&eth;\",ñ:\"&ntilde;\",ò:\"&ograve;\",ó:\"&oacute;\",ô:\"&ocirc;\",õ:\"&otilde;\",ö:\"&ouml;\",\"÷\":\"&divide;\",ø:\"&oslash;\",ù:\"&ugrave;\",ú:\"&uacute;\",û:\"&ucirc;\",ü:\"&uuml;\",ý:\"&yacute;\",þ:\"&thorn;\",ÿ:\"&yuml;\",Œ:\"&OElig;\",œ:\"&oelig;\",Š:\"&Scaron;\",š:\"&scaron;\",Ÿ:\"&Yuml;\",ƒ:\"&fnof;\",ˆ:\"&circ;\",\"˜\":\"&tilde;\",Α:\"&Alpha;\",Β:\"&Beta;\",Γ:\"&Gamma;\",Δ:\"&Delta;\",Ε:\"&Epsilon;\",Ζ:\"&Zeta;\",Η:\"&Eta;\",Θ:\"&Theta;\",Ι:\"&Iota;\",Κ:\"&Kappa;\",Λ:\"&Lambda;\",Μ:\"&Mu;\",Ν:\"&Nu;\",Ξ:\"&Xi;\",Ο:\"&Omicron;\",Π:\"&Pi;\",Ρ:\"&Rho;\",Σ:\"&Sigma;\",Τ:\"&Tau;\",Υ:\"&Upsilon;\",Φ:\"&Phi;\",Χ:\"&Chi;\",Ψ:\"&Psi;\",Ω:\"&Omega;\",α:\"&alpha;\",β:\"&beta;\",γ:\"&gamma;\",δ:\"&delta;\",ε:\"&epsilon;\",ζ:\"&zeta;\",η:\"&eta;\",θ:\"&theta;\",ι:\"&iota;\",κ:\"&kappa;\",λ:\"&lambda;\",μ:\"&mu;\",ν:\"&nu;\",ξ:\"&xi;\",ο:\"&omicron;\",π:\"&pi;\",ρ:\"&rho;\",ς:\"&sigmaf;\",σ:\"&sigma;\",τ:\"&tau;\",υ:\"&upsilon;\",φ:\"&phi;\",χ:\"&chi;\",ψ:\"&psi;\",ω:\"&omega;\",ϑ:\"&thetasym;\",ϒ:\"&Upsih;\",ϖ:\"&piv;\",\"–\":\"&ndash;\",\"—\":\"&mdash;\",\"‘\":\"&lsquo;\",\"’\":\"&rsquo;\",\"‚\":\"&sbquo;\",\"“\":\"&ldquo;\",\"”\":\"&rdquo;\",\"„\":\"&bdquo;\",\"†\":\"&dagger;\",\"‡\":\"&Dagger;\",\"•\":\"&bull;\",\"…\":\"&hellip;\",\"‰\":\"&permil;\",\"′\":\"&prime;\",\"″\":\"&Prime;\",\"‹\":\"&lsaquo;\",\"›\":\"&rsaquo;\",\"‾\":\"&oline;\",\"⁄\":\"&frasl;\",\"€\":\"&euro;\",ℑ:\"&image;\",℘:\"&weierp;\",ℜ:\"&real;\",\"™\":\"&trade;\",ℵ:\"&alefsym;\",\"←\":\"&larr;\",\"↑\":\"&uarr;\",\"→\":\"&rarr;\",\"↓\":\"&darr;\",\"↔\":\"&harr;\",\"↵\":\"&crarr;\",\"⇐\":\"&lArr;\",\"⇑\":\"&UArr;\",\"⇒\":\"&rArr;\",\"⇓\":\"&dArr;\",\"⇔\":\"&hArr;\",\"∀\":\"&forall;\",\"∂\":\"&part;\",\"∃\":\"&exist;\",\"∅\":\"&empty;\",\"∇\":\"&nabla;\",\"∈\":\"&isin;\",\"∉\":\"&notin;\",\"∋\":\"&ni;\",\"∏\":\"&prod;\",\"∑\":\"&sum;\",\"−\":\"&minus;\",\"∗\":\"&lowast;\",\"√\":\"&radic;\",\"∝\":\"&prop;\",\"∞\":\"&infin;\",\"∠\":\"&ang;\",\"∧\":\"&and;\",\"∨\":\"&or;\",\"∩\":\"&cap;\",\"∪\":\"&cup;\",\"∫\":\"&int;\",\"∴\":\"&there4;\",\"∼\":\"&sim;\",\"≅\":\"&cong;\",\"≈\":\"&asymp;\",\"≠\":\"&ne;\",\"≡\":\"&equiv;\",\"≤\":\"&le;\",\"≥\":\"&ge;\",\"⊂\":\"&sub;\",\"⊃\":\"&sup;\",\"⊄\":\"&nsub;\",\"⊆\":\"&sube;\",\"⊇\":\"&supe;\",\"⊕\":\"&oplus;\",\"⊗\":\"&otimes;\",\"⊥\":\"&perp;\",\"⋅\":\"&sdot;\",\"⌈\":\"&lceil;\",\"⌉\":\"&rceil;\",\"⌊\":\"&lfloor;\",\"⌋\":\"&rfloor;\",\"⟨\":\"&lang;\",\"⟩\":\"&rang;\",\"◊\":\"&loz;\",\"♠\":\"&spades;\",\"♣\":\"&clubs;\",\"♥\":\"&hearts;\",\"♦\":\"&diams;\",'\"':\"&quot;\",\"&\":\"&amp;\"};function a(t){for(let e in i){let s=new RegExp(i[e],\"g\");t=t.replace(s,e)}return t}let o,l,n,h=0;class c{constructor(t,e,s=\"a\",r={}){this.base=t,this.containerElementSelector=e,this.triggerSelector=s,this.opts={preload:!0,cache:!0,minDuration:800,classLoading:\"loading\",originContainerElementSelector:e,affectHistory:!0,tabTriggerSelector:null,tabElementSelector:null,tabContainerElementSelector:null,classActiveTab:\"active-tab\"},this.opts=Object.assign(this.opts,r),this.promises=[],this.cached={},this.eventListeners={},this.tabs={},o=this.parseRequest(),l=null,n=null,this.containerElement=document.querySelectorAll(this.containerElementSelector),this.tabsContainerElement=document.querySelector(this.opts.tabContainerElementSelector),this.ready=!0,this.bindEvents(!0),this.id=h,h++,this.initHistory()}trigger(t,e={}){this.eventListeners[t]&&this.eventListeners[t].forEach((t=>{t(e)}))}on(t,e){this.eventListeners[t]||(this.eventListeners[t]=[]),this.eventListeners[t].push(e)}bindEvents(t=!1){let e,s;if(t)e=document.body.querySelectorAll(this.triggerSelector),s=this.opts.tabTriggerSelector?document.body.querySelectorAll(this.opts.tabTriggerSelector):null;else{e=[],s=[];for(let t=0;t<this.containerElement.length;t++)e.push(...this.containerElement[t].querySelectorAll(this.triggerSelector)),this.opts.tabTriggerSelector&&s.push(...this.containerElement[t].querySelectorAll(this.opts.tabTriggerSelector));this.tabsContainerElement&&(e.push(...this.tabsContainerElement.querySelectorAll(this.triggerSelector)),s.push(...this.tabsContainerElement.querySelectorAll(this.opts.tabTriggerSelector)))}for(let t=0;t<e.length;t++){let s=e[t];s.addEventListener(\"click\",(t=>{this.goTo(t.currentTarget.getAttribute(\"href\")),t.preventDefault()})),this.opts.preload&&s.addEventListener(\"mouseover\",(t=>{this.load(t.currentTarget.getAttribute(\"href\"),(t=>{}))}))}for(let t=0;t<s.length;t++){let e=s[t];e.addEventListener(\"click\",(t=>{this.openTab(t.currentTarget.getAttribute(\"href\")),t.preventDefault()})),this.opts.preload&&e.addEventListener(\"mouseover\",(t=>{this.load(t.currentTarget.getAttribute(\"href\"),(t=>{}))}))}}parseRequest(){const t=String(document.location).substr(this.base.length).split(\"#\");return{path:t[0],hash:t[1]?t[1]:null}}historyChange(t){t.state.tab?this.routeTab():this.route()}initHistory(){let t=null;if(this.opts.tabElementSelector&&(t=document.body.querySelector(this.opts.tabElementSelector)),t&&(this.tabs[o.path]=t),this.opts.affectHistory){let e=o.path;o.hash&&(e+=\"#\"+o.hash),t?window.history.replaceState({transitoId:this.id,tab:e},\"\",e):window.history.replaceState({transitoId:this.id},\"\",e),window.addEventListener(\"popstate\",(t=>{t.state&&t.state.transitoId===this.id&&this.historyChange(t)}))}}openTab(t){this.ready&&(this.opts.affectHistory?(window.history.pushState({transitoId:this.id,tab:t},\"\",t),this.routeTab()):this.routeTab({path:t,hash:null}))}goTo(t){this.ready&&(this.opts.affectHistory?(window.history.pushState({transitoId:this.id},\"\",t),this.route()):this.route({path:t,hash:null}))}routeTab(t=null){l=t||this.parseRequest(),this.opts.affectHistory&&o.path===l.path||(this.trigger(\"preload\",{currentPath:o.path,newPath:l.path}),this.ready=!1,this.tabs[l.path]?(this.setActiveTab(l.path),n=o,o=l,this.ready=!0):this.load(l.path,(t=>{this.trigger(\"receivedresponse\",{response:t,currentPath:o.path,newPath:l.path}),Promise.all(this.promises).then((()=>{n=o,o=l,this.tabs[l.path]=this.installTabHtml(t),this.setActiveTab(l.path),requestAnimationFrame((()=>{requestAnimationFrame((()=>{document.body.classList.remove(this.opts.classLoading)}))})),this.ready=!0}))})))}route(t=null){this.now=Date.now(),l=t||this.parseRequest(),this.opts.affectHistory&&o.path===l.path?o.hash!==l.hash&&(this.ready=!1,this.scrollToElement(l.hash),this.ready=!0):(this.trigger(\"preload\",{currentPath:o.path,newPath:l.path}),this.ready=!1,document.body.classList.add(this.opts.classLoading),this.load(l.path,(t=>{this.trigger(\"receivedresponse\",{response:t,currentPath:o.path,newPath:l.path}),Promise.all(this.promises).then((()=>{this.then=Date.now(),this.duration=this.then-this.now,n=o,o=l,setTimeout((()=>{this.installHtml(t),requestAnimationFrame((()=>{requestAnimationFrame((()=>{document.body.classList.remove(this.opts.classLoading),o.hash&&this.scrollToElement(o.hash)}))})),this.ready=!0}),Math.max(0,this.opts.minDuration-this.duration))}))})))}scrollToElement(t){document.getElementById(t).scrollIntoView()}load(t,e){if(this.opts.cache&&this.cached[t])return void e(this.cached[t]);const s=new XMLHttpRequest;s.onprogress=t=>{this.trigger(\"progress\",{loaded:t.loaded,total:t.total})},s.onreadystatechange=()=>{4==s.readyState&&200==s.status&&(this.opts.cache&&(this.cached[t]=s.responseText),e(s.responseText))},s.open(\"GET\",t,!0),s.send(null)}installTabHtml(t){const e=t.match(/<title[^>]*>([^<]+)<\\/title>/);e&&(document.title=a(e[1]));let s=this.getElementsFromString(t,this.opts.tabElementSelector)[0],r=document.querySelector(this.opts.tabContainerElementSelector);return r&&s?(r.appendChild(s),this.bindEvents(),s):null}setActiveTab(t){let e=this.tabs[t];if(!e)return;let s=document.querySelector(this.opts.tabContainerElementSelector);if(s){let t=s.querySelectorAll(this.opts.tabElementSelector);for(let e=0;e<t.length;e++)t[e].classList.remove(this.opts.classActiveTab)}e.classList.add(this.opts.classActiveTab)}closeTabs(){let t=document.querySelector(this.opts.tabContainerElementSelector);if(t){let e=t.querySelectorAll(this.opts.tabElementSelector);for(let t=0;t<e.length;t++)e[t].classList.remove(this.opts.classActiveTab)}}installHtml(t){const e=t.match(/<title[^>]*>([^<]+)<\\/title>/);e&&(document.title=a(e[1]));let s=this.getElementsFromString(t,this.opts.originContainerElementSelector);this.replaceChilds(this.containerElement,s),this.bindEvents(),this.trigger(\"postload\",{currentPath:o.path,oldPath:n.path,response:t})}replaceChilds(t,e){for(let s=0;s<t.length;s++){for(;t[s].firstChild;)t[s].removeChild(t[s].firstChild);e[s]&&this.appendAllNodes(t[s],e[s].childNodes)}}appendAllNodes(t,e){let s=new DocumentFragment;for(;e.length>0;)s.appendChild(e[0]);t.appendChild(s)}getElementsFromString(t,e){const s=/<body.*?>([\\s\\S]*)<\\/body>/.exec(t)[1],r=document.createElement(\"div\");return r.innerHTML=s,\"body\"===e?[r]:r.querySelectorAll(e)}installPlugin(t){t.install(this)}emptyPromises(){this.promises=[]}setPromises(t=[]){this.promises=t}addPromise(t){this.promises.push(t)}}return e})()}));\n\n//# sourceURL=webpack://transito/./dist/transito.bundle.js?");

/***/ }),

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/transito.bundle */ \"./dist/transito.bundle.js\");\n/* harmony import */ var _dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nconst base = document.querySelector('base').getAttribute('href');\n\n// main\nlet transito = new _dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__.Transito(base, '#wrapper, #header', 'a:not(.open-tab)', {\n    minDuration: 3000,\n    tabTriggerSelector: '.open-tab',\n    tabElementSelector: '.tab',\n    tabContainerElementSelector: '.tabs'\n});\n\n// transito.installPlugin(PreloadImagesPlugin);\n// transito.installPlugin(BodyClassesPlugin);\n\n//transito.on('preload', e => console.log(e));\ntransito.on('preload', e => {\n    transito.closeTabs();\n});\n\nconsole.log('change!!');\n\n//# sourceURL=webpack://transito/./example/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./example/index.js");
/******/ 	
/******/ })()
;