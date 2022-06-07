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

eval("!function(t,e){ true?module.exports=e():0}(__webpack_require__.g,(function(){return(()=>{\"use strict\";var t={d:(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})}},e={};t.r(e),t.d(e,{BodyClassesPlugin:()=>i,PreloadImagesPlugin:()=>s,Transito:()=>c});const s={install(t){t.on(\"receivedresponse\",(e=>{t.emptyPromises();const s=e.response,i=/<body.*?>([\\s\\S]*)<\\/body>/.exec(s)[1],a=document.createElement(\"div\");a.innerHTML=i;const r=a.getElementsByTagName(\"img\");for(let e=0;e<r.length;e++)t.addPromise(new Promise((t=>{const s=new Image;s.onload=t,s.onerror=t,s.src=r[e].getAttribute(\"src\")})))}))}},i={install(t){t.on(\"postload\",(t=>{const e=t.response.match(/body\\sclass=['|\"]([^'|\"]*)['|\"]/);document.body.className=\"\",e&&e[1].split(\" \").forEach((t=>{document.body.classList.add(t)}))}))}};let a={\"'\":\"&apos;\",\"<\":\"&lt;\",\">\":\"&gt;\",\" \":\"&nbsp;\",\"¡\":\"&iexcl;\",\"¢\":\"&cent;\",\"£\":\"&pound;\",\"¤\":\"&curren;\",\"¥\":\"&yen;\",\"¦\":\"&brvbar;\",\"§\":\"&sect;\",\"¨\":\"&uml;\",\"©\":\"&copy;\",ª:\"&ordf;\",\"«\":\"&laquo;\",\"¬\":\"&not;\",\"®\":\"&reg;\",\"¯\":\"&macr;\",\"°\":\"&deg;\",\"±\":\"&plusmn;\",\"²\":\"&sup2;\",\"³\":\"&sup3;\",\"´\":\"&acute;\",µ:\"&micro;\",\"¶\":\"&para;\",\"·\":\"&middot;\",\"¸\":\"&cedil;\",\"¹\":\"&sup1;\",º:\"&ordm;\",\"»\":\"&raquo;\",\"¼\":\"&frac14;\",\"½\":\"&frac12;\",\"¾\":\"&frac34;\",\"¿\":\"&iquest;\",À:\"&Agrave;\",Á:\"&Aacute;\",Â:\"&Acirc;\",Ã:\"&Atilde;\",Ä:\"&Auml;\",Å:\"&Aring;\",Æ:\"&AElig;\",Ç:\"&Ccedil;\",È:\"&Egrave;\",É:\"&Eacute;\",Ê:\"&Ecirc;\",Ë:\"&Euml;\",Ì:\"&Igrave;\",Í:\"&Iacute;\",Î:\"&Icirc;\",Ï:\"&Iuml;\",Ð:\"&ETH;\",Ñ:\"&Ntilde;\",Ò:\"&Ograve;\",Ó:\"&Oacute;\",Ô:\"&Ocirc;\",Õ:\"&Otilde;\",Ö:\"&Ouml;\",\"×\":\"&times;\",Ø:\"&Oslash;\",Ù:\"&Ugrave;\",Ú:\"&Uacute;\",Û:\"&Ucirc;\",Ü:\"&Uuml;\",Ý:\"&Yacute;\",Þ:\"&THORN;\",ß:\"&szlig;\",à:\"&agrave;\",á:\"&aacute;\",â:\"&acirc;\",ã:\"&atilde;\",ä:\"&auml;\",å:\"&aring;\",æ:\"&aelig;\",ç:\"&ccedil;\",è:\"&egrave;\",é:\"&eacute;\",ê:\"&ecirc;\",ë:\"&euml;\",ì:\"&igrave;\",í:\"&iacute;\",î:\"&icirc;\",ï:\"&iuml;\",ð:\"&eth;\",ñ:\"&ntilde;\",ò:\"&ograve;\",ó:\"&oacute;\",ô:\"&ocirc;\",õ:\"&otilde;\",ö:\"&ouml;\",\"÷\":\"&divide;\",ø:\"&oslash;\",ù:\"&ugrave;\",ú:\"&uacute;\",û:\"&ucirc;\",ü:\"&uuml;\",ý:\"&yacute;\",þ:\"&thorn;\",ÿ:\"&yuml;\",Œ:\"&OElig;\",œ:\"&oelig;\",Š:\"&Scaron;\",š:\"&scaron;\",Ÿ:\"&Yuml;\",ƒ:\"&fnof;\",ˆ:\"&circ;\",\"˜\":\"&tilde;\",Α:\"&Alpha;\",Β:\"&Beta;\",Γ:\"&Gamma;\",Δ:\"&Delta;\",Ε:\"&Epsilon;\",Ζ:\"&Zeta;\",Η:\"&Eta;\",Θ:\"&Theta;\",Ι:\"&Iota;\",Κ:\"&Kappa;\",Λ:\"&Lambda;\",Μ:\"&Mu;\",Ν:\"&Nu;\",Ξ:\"&Xi;\",Ο:\"&Omicron;\",Π:\"&Pi;\",Ρ:\"&Rho;\",Σ:\"&Sigma;\",Τ:\"&Tau;\",Υ:\"&Upsilon;\",Φ:\"&Phi;\",Χ:\"&Chi;\",Ψ:\"&Psi;\",Ω:\"&Omega;\",α:\"&alpha;\",β:\"&beta;\",γ:\"&gamma;\",δ:\"&delta;\",ε:\"&epsilon;\",ζ:\"&zeta;\",η:\"&eta;\",θ:\"&theta;\",ι:\"&iota;\",κ:\"&kappa;\",λ:\"&lambda;\",μ:\"&mu;\",ν:\"&nu;\",ξ:\"&xi;\",ο:\"&omicron;\",π:\"&pi;\",ρ:\"&rho;\",ς:\"&sigmaf;\",σ:\"&sigma;\",τ:\"&tau;\",υ:\"&upsilon;\",φ:\"&phi;\",χ:\"&chi;\",ψ:\"&psi;\",ω:\"&omega;\",ϑ:\"&thetasym;\",ϒ:\"&Upsih;\",ϖ:\"&piv;\",\"–\":\"&ndash;\",\"—\":\"&mdash;\",\"‘\":\"&lsquo;\",\"’\":\"&rsquo;\",\"‚\":\"&sbquo;\",\"“\":\"&ldquo;\",\"”\":\"&rdquo;\",\"„\":\"&bdquo;\",\"†\":\"&dagger;\",\"‡\":\"&Dagger;\",\"•\":\"&bull;\",\"…\":\"&hellip;\",\"‰\":\"&permil;\",\"′\":\"&prime;\",\"″\":\"&Prime;\",\"‹\":\"&lsaquo;\",\"›\":\"&rsaquo;\",\"‾\":\"&oline;\",\"⁄\":\"&frasl;\",\"€\":\"&euro;\",ℑ:\"&image;\",℘:\"&weierp;\",ℜ:\"&real;\",\"™\":\"&trade;\",ℵ:\"&alefsym;\",\"←\":\"&larr;\",\"↑\":\"&uarr;\",\"→\":\"&rarr;\",\"↓\":\"&darr;\",\"↔\":\"&harr;\",\"↵\":\"&crarr;\",\"⇐\":\"&lArr;\",\"⇑\":\"&UArr;\",\"⇒\":\"&rArr;\",\"⇓\":\"&dArr;\",\"⇔\":\"&hArr;\",\"∀\":\"&forall;\",\"∂\":\"&part;\",\"∃\":\"&exist;\",\"∅\":\"&empty;\",\"∇\":\"&nabla;\",\"∈\":\"&isin;\",\"∉\":\"&notin;\",\"∋\":\"&ni;\",\"∏\":\"&prod;\",\"∑\":\"&sum;\",\"−\":\"&minus;\",\"∗\":\"&lowast;\",\"√\":\"&radic;\",\"∝\":\"&prop;\",\"∞\":\"&infin;\",\"∠\":\"&ang;\",\"∧\":\"&and;\",\"∨\":\"&or;\",\"∩\":\"&cap;\",\"∪\":\"&cup;\",\"∫\":\"&int;\",\"∴\":\"&there4;\",\"∼\":\"&sim;\",\"≅\":\"&cong;\",\"≈\":\"&asymp;\",\"≠\":\"&ne;\",\"≡\":\"&equiv;\",\"≤\":\"&le;\",\"≥\":\"&ge;\",\"⊂\":\"&sub;\",\"⊃\":\"&sup;\",\"⊄\":\"&nsub;\",\"⊆\":\"&sube;\",\"⊇\":\"&supe;\",\"⊕\":\"&oplus;\",\"⊗\":\"&otimes;\",\"⊥\":\"&perp;\",\"⋅\":\"&sdot;\",\"⌈\":\"&lceil;\",\"⌉\":\"&rceil;\",\"⌊\":\"&lfloor;\",\"⌋\":\"&rfloor;\",\"⟨\":\"&lang;\",\"⟩\":\"&rang;\",\"◊\":\"&loz;\",\"♠\":\"&spades;\",\"♣\":\"&clubs;\",\"♥\":\"&hearts;\",\"♦\":\"&diams;\",'\"':\"&quot;\",\"&\":\"&amp;\"};function r(t){for(let e in a){let s=new RegExp(a[e],\"g\");t=t.replace(s,e)}return t}let o,n,l,h=0;class c{constructor(t,e,s=\"a\",i={}){this.base=t,this.containerElementSelector=e,this.triggerSelector=s,this.opts={preload:!0,cache:!0,minDuration:800,classLoading:\"loading\",originContainerElementSelector:e,affectHistory:!0,includeElementsInEvent:null,tabTriggerSelector:null,tabElementSelector:null,tabContainerElementSelector:null,classActiveTab:\"active-tab\"},this.opts=Object.assign(this.opts,i),this.promises=[],this.cached={},this.eventListeners={},this.eventQueue={},this.tabs={},this.lastPath=null,o=this.parseRequest(),n=null,l=null,this.containerElement=document.querySelectorAll(this.containerElementSelector),this.tabsContainerElement=document.querySelector(this.opts.tabContainerElementSelector),this.tabZIndex=1,this.ready=!0,this.cachedIncludedElements={},this.cachedBodyClasses={},this.onGoTo=this.handleGoTo.bind(this),this.onOpenTab=this.handleOpenTab.bind(this),this.onMouseOver=this.handleMouseover.bind(this),this.id=h,h++,this.init()}trigger(t,e={},s=!1){this.eventListeners[t]?this.eventListeners[t].forEach((t=>{t(e)})):s&&(this.eventQueue[t]||(this.eventQueue[t]=[]),this.eventQueue[t].push(e))}on(t,e){if(this.eventListeners[t]||(this.eventListeners[t]=[]),this.eventListeners[t].push(e),this.eventQueue[t])for(;this.eventQueue[t].length;)e(this.eventQueue[t][0]),this.eventQueue[t].shift()}bindEvents(t,e=!1){let s,i;if(e)s=t.querySelectorAll(this.triggerSelector),i=this.opts.tabTriggerSelector?t.querySelectorAll(this.opts.tabTriggerSelector):null;else{s=[],i=[];for(let t=0;t<this.containerElement.length;t++)s.push(...this.containerElement[t].querySelectorAll(this.triggerSelector)),this.opts.tabTriggerSelector&&i.push(...this.containerElement[t].querySelectorAll(this.opts.tabTriggerSelector));this.tabsContainerElement&&(s.push(...this.tabsContainerElement.querySelectorAll(this.triggerSelector)),i.push(...this.tabsContainerElement.querySelectorAll(this.opts.tabTriggerSelector)))}for(let t=0;t<s.length;t++){let e=s[t];e.removeEventListener(\"click\",this.onGoTo),e.addEventListener(\"click\",this.onGoTo),this.opts.preload&&(e.removeEventListener(\"mouseover\",this.onMouseOver),e.addEventListener(\"mouseover\",this.onMouseOver))}for(let t=0;t<i.length;t++){let e=i[t];e.removeEventListener(\"click\",this.onOpenTab),e.addEventListener(\"click\",this.onOpenTab),this.opts.preload&&(e.removeEventListener(\"mouseover\",this.onMouseOver),e.addEventListener(\"mouseover\",this.onMouseOver))}}handleGoTo(t){this.goTo(t.currentTarget.getAttribute(\"href\")),t.preventDefault()}handleOpenTab(t){this.openTab(t.currentTarget.getAttribute(\"href\")),t.preventDefault()}handleMouseover(t){this.load(t.currentTarget.getAttribute(\"href\"),(t=>{}))}parseRequest(){const t=String(document.location).substr(this.base.length).split(\"#\");return{path:t[0],hash:t[1]?t[1]:null}}historyChange(t){t.state.tab?this.routeTab():this.route()}init(){this.bindEvents(document,!0);let t=this.opts.tabElementSelector?document.body.querySelector(this.opts.tabElementSelector):null,e=this.opts.includeElementsInEvent?document.body.querySelectorAll(this.opts.includeElementsInEvent):[];if(this.cachedIncludedElements[o.path]=e,this.cachedBodyClasses[o.path]=document.body.classList.value.split(\" \"),t?(this.tabs[o.path]=t,this.setActiveTab(o.path),this.trigger(\"init\",{currentPath:o.path,tab:!0,includedElements:e,element:t},!0)):(this.lastPath=o.path,this.trigger(\"init\",{currentPath:o.path,includedElements:e,tab:!1},!0)),this.opts.affectHistory){let e=o.path+(o.hash?\"#\"+o.hash:\"\");t?window.history.replaceState({transitoId:this.id,tab:e},\"\",e):window.history.replaceState({transitoId:this.id},\"\",e),window.addEventListener(\"popstate\",(t=>{t.state&&t.state.transitoId===this.id&&this.historyChange(t)}))}}openTab(t){this.ready&&(this.opts.affectHistory?(window.history.pushState({transitoId:this.id,tab:t},\"\",t),this.routeTab()):this.routeTab({path:t,hash:null}))}goTo(t){this.ready&&(this.opts.affectHistory?(window.history.pushState({transitoId:this.id},\"\",t),this.route()):this.route({path:t,hash:null}))}routeTab(t=null){n=t||this.parseRequest(),this.opts.affectHistory&&o.path===n.path||(this.trigger(\"preload\",{currentPath:o.path,newPath:n.path,tab:!0}),this.ready=!1,this.tabs[n.path]?(this.setActiveTab(n.path),l=o,o=n,this.trigger(\"postload\",{currentPath:o.path,oldPath:l.path,response:\"\",element:this.tabs[n.path],includedElements:this.cachedIncludedElements[o.path]||[],bodyClasses:this.cachedBodyClasses[o.path]||[],tab:!0}),this.ready=!0):this.load(n.path,(t=>{this.trigger(\"receivedresponse\",{response:t,currentPath:o.path,newPath:n.path,tab:!0}),Promise.all(this.promises).then((()=>{l=o,o=n,this.tabs[n.path]=this.installTabHtml(t),this.setActiveTab(n.path),requestAnimationFrame((()=>{requestAnimationFrame((()=>{document.body.classList.remove(this.opts.classLoading)}))})),this.ready=!0}))})))}route(t=null){if(this.now=Date.now(),n=t||this.parseRequest(),this.opts.affectHistory&&o.path===n.path)o.hash!==n.hash&&(this.ready=!1,this.scrollToElement(n.hash),this.ready=!0);else{if(this.trigger(\"preload\",{currentPath:o.path,newPath:n.path,tab:!1}),n.path===this.lastPath)return this.closeTabs(),l=o,o=n,this.lastPath=n.path,void this.trigger(\"postload\",{currentPath:o.path,oldPath:l.path,response:\"\",includedElements:this.cachedIncludedElements[o.path]||[],bodyClasses:this.cachedBodyClasses[o.path]||[],tab:!1});this.ready=!1,document.body.classList.add(this.opts.classLoading),this.load(n.path,(t=>{this.lastPath=n.path,this.trigger(\"receivedresponse\",{response:t,currentPath:o.path,newPath:n.path,tab:!1}),Promise.all(this.promises).then((()=>{this.then=Date.now(),this.duration=this.then-this.now,l=o,o=n,setTimeout((()=>{this.installHtml(t),requestAnimationFrame((()=>{requestAnimationFrame((()=>{document.body.classList.remove(this.opts.classLoading),o.hash&&this.scrollToElement(o.hash)}))})),this.ready=!0}),Math.max(0,this.opts.minDuration-this.duration))}))}))}}scrollToElement(t){document.getElementById(t).scrollIntoView()}getIncludedElementsFromHtmlString(t){let e=[];if(this.opts.includeElementsInEvent){e=this.getElementsFromString(t,this.opts.includeElementsInEvent);for(let t=0;t<e.length;t++)this.bindEvents(e[t],!0);this.cachedIncludedElements[o.path]=e}return e}load(t,e){if(this.opts.cache&&this.cached[t])return void e(this.cached[t]);const s=new XMLHttpRequest;s.onprogress=t=>{this.trigger(\"progress\",{loaded:t.loaded,total:t.total})},s.onreadystatechange=()=>{4==s.readyState&&200==s.status&&(this.opts.cache&&(this.cached[t]=s.responseText),e(s.responseText))},s.open(\"GET\",t,!0),s.send(null)}getBodyClassesFromHtml(t){let e=t.match(/body\\sclass=['|\"]([^'|\"]*)['|\"]/);if(e){let t=e[1].split(\" \");return this.cachedBodyClasses[o.path]=t,t}return this.cachedBodyClasses[o.path]=[],[]}installTabHtml(t){const e=t.match(/<title[^>]*>([^<]+)<\\/title>/);e&&(document.title=r(e[1]));let s=this.getElementsFromString(t,this.opts.tabElementSelector)[0],i=document.querySelector(this.opts.tabContainerElementSelector);return i&&s?(i.appendChild(s),this.bindEvents(document),this.trigger(\"postload\",{currentPath:o.path,oldPath:l.path,response:t,element:s,includedElements:this.getIncludedElementsFromHtmlString(t),bodyClasses:this.getBodyClassesFromHtml(t),tab:!0}),s):null}setActiveTab(t){let e=this.tabs[t];e&&(e.classList.contains(this.opts.classActiveTab)||(e.style.zIndex=this.tabZIndex++),requestAnimationFrame((()=>{requestAnimationFrame((()=>{e.classList.add(this.opts.classActiveTab)}))})))}closeTabs(){let t=document.querySelector(this.opts.tabContainerElementSelector);if(t){let e=t.querySelectorAll(this.opts.tabElementSelector);for(let t=0;t<e.length;t++)e[t].classList.remove(this.opts.classActiveTab)}}closeTabsExcept(t){let e=this.tabs[t];if(!e)return void this.closeTabs();let s=document.querySelector(this.opts.tabContainerElementSelector);if(s){let t=s.querySelectorAll(this.opts.tabElementSelector);for(let s=0;s<t.length;s++)t[s]!==e&&t[s].classList.remove(this.opts.classActiveTab)}}installHtml(t){const e=t.match(/<title[^>]*>([^<]+)<\\/title>/);e&&(document.title=r(e[1]));let s=this.getElementsFromString(t,this.opts.originContainerElementSelector);this.replaceChilds(this.containerElement,s),this.bindEvents(document),this.trigger(\"postload\",{currentPath:o.path,oldPath:l.path,response:t,includedElements:this.getIncludedElementsFromHtmlString(t),bodyClasses:this.getBodyClassesFromHtml(t),tab:!1})}replaceChilds(t,e){for(let s=0;s<t.length;s++){for(;t[s].firstChild;)t[s].removeChild(t[s].firstChild);e[s]&&this.appendAllNodes(t[s],e[s].childNodes)}}appendAllNodes(t,e){let s=new DocumentFragment;for(;e.length>0;)s.appendChild(e[0]);t.appendChild(s)}getElementsFromString(t,e){const s=/<body.*?>([\\s\\S]*)<\\/body>/.exec(t)[1],i=document.createElement(\"div\");return i.innerHTML=s,\"body\"===e?[i]:i.querySelectorAll(e)}installPlugin(t){t.install(this)}emptyPromises(){this.promises=[]}setPromises(t=[]){this.promises=t}addPromise(t){this.promises.push(t)}}return e})()}));\n\n//# sourceURL=webpack://transito/./dist/transito.bundle.js?");

/***/ }),

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/transito.bundle */ \"./dist/transito.bundle.js\");\n/* harmony import */ var _dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nconst base = document.querySelector('base').getAttribute('href');\n\n// main\nlet transito = new _dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__.Transito(base, '#wrapper', 'a:not(.open-tab)', {\n    minDuration: 3000,\n    includeElementsInEvent: '#header',\n    tabTriggerSelector: '.open-tab',\n    tabElementSelector: '.tab',\n    tabContainerElementSelector: '.tabs'\n});\n\ntransito.installPlugin(_dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__.PreloadImagesPlugin);\ntransito.installPlugin(_dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__.BodyClassesPlugin);\n\ntransito.on('init', e => {\n    //console.log('init', e);\n});\n\ntransito.on('postload', e => {\n    \n    if (e.includedElements && e.includedElements.length) {\n                \n        let header = document.querySelector('#header');\n        if (header) {\n            let parent = header.parentNode;\n            parent.replaceChild(e.includedElements[0], header);\n        }\n    }\n    \n    if (e.tab) {\n        let el = e.element;\n        \n        if (el.classList.contains('tab-1')) {\n            transito.closeTabsExcept(e.currentPath);\n        } else {\n            // Close nothing\n        }\n    } else {\n        transito.closeTabs();\n    }\n});\n\ntransito.on('preload', e => {\n    //console.log('preload!', e);\n    //transito.closeTabs();\n});\n\n//# sourceURL=webpack://transito/./example/index.js?");

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