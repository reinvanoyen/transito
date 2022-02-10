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

eval("/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(__webpack_require__.g, function() {\nreturn /******/ (() => { // webpackBootstrap\n/******/ \t\"use strict\";\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./src/index.js\":\n/*!**********************!*\\\n  !*** ./src/index.js ***!\n  \\**********************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"Transito\\\": () => (/* binding */ Transito),\\n/* harmony export */   \\\"PreloadImagesPlugin\\\": () => (/* reexport safe */ _plugins_preload_images__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]),\\n/* harmony export */   \\\"BodyClassesPlugin\\\": () => (/* reexport safe */ _plugins_body_classes__WEBPACK_IMPORTED_MODULE_1__[\\\"default\\\"])\\n/* harmony export */ });\\n/* harmony import */ var _plugins_preload_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/preload-images */ \\\"./src/plugins/preload-images.js\\\");\\n/* harmony import */ var _plugins_body_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugins/body-classes */ \\\"./src/plugins/body-classes.js\\\");\\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \\\"./src/util.js\\\");\\n\\n\\n\\n\\n\\n\\n/**\\n * \\n * @module transito\\n * @author Rein Van Oyen\\n * \\n */\\n\\nlet transitoId = 0;\\nlet currentRequest, newRequest, oldRequest;\\n\\nclass Transito {\\n\\n  /**\\n   * @param  {String} base - The base url\\n   * @param  {String} containerElementSelector - The selector to find the element in which to replace the content to (and from)\\n   * @param  {String} triggerSelector - The selector to find the elements on which to click to trigger a page transition\\n   * @param  {Object} opts - An object with the options and their values\\n   * @return {void}\\n   */\\n  constructor(base, containerElementSelector, triggerSelector = 'a', opts = {}) {\\n\\n    this.base = base;\\n    this.containerElementSelector = containerElementSelector;\\n    this.triggerSelector = triggerSelector;\\n\\n    this.opts = {\\n      preload: true,\\n      cache: true,\\n      minDuration: 800,\\n      classLoading: 'loading',\\n      originContainerElementSelector: containerElementSelector,\\n      affectHistory: true,\\n      \\n      // Tab functionality\\n      tabTriggerSelector: null,\\n      tabElementSelector: null,\\n      tabContainerElementSelector: null,\\n      classActiveTab: 'active-tab'\\n    };\\n    \\n    this.opts = Object.assign(this.opts, opts);\\n\\n    this.promises = [];\\n    this.cached = {};\\n    this.eventListeners = {};\\n    this.eventQueue = {};\\n    this.tabs = {};\\n    this.lastPath = null;\\n\\n    currentRequest = this.parseRequest();\\n    newRequest = null;\\n    oldRequest = null;\\n    \\n    this.containerElement = document.querySelectorAll(this.containerElementSelector);\\n    this.tabsContainerElement = document.querySelector(this.opts.tabContainerElementSelector);\\n    \\n    this.ready = true;\\n    \\n    this.onGoTo = this.handleGoTo.bind(this);\\n    this.onOpenTab = this.handleOpenTab.bind(this);\\n    this.onMouseOver = this.handleMouseover.bind(this);\\n\\n    this.id = transitoId;\\n    transitoId++;\\n\\n    this.init();\\n  }\\n\\n  /**\\n   * Trigger an internal event by name\\n   * @param  {String} eventName - The name of the event to trigger\\n   * @param  {Object} event - The event (which can contain any data you want)\\n   * @param  {Boolean} queued\\n   * @return {void}\\n   */\\n  trigger(eventName, event = {}, queued = false) {\\n    if (this.eventListeners[eventName]) {\\n      this.eventListeners[eventName].forEach( cb => {\\n        cb(event);\\n      });\\n    } else if (queued) {\\n        if (! this.eventQueue[eventName]) {\\n            this.eventQueue[eventName] = [];\\n        }\\n        this.eventQueue[eventName].push(event);\\n    }\\n  }\\n\\n    /**\\n     * Register an event listener\\n     * @param eventName\\n     * @param cb\\n     */\\n  on(eventName, cb) {\\n    if (!this.eventListeners[eventName]) {\\n      this.eventListeners[eventName] = [];\\n    }\\n    this.eventListeners[eventName].push(cb);\\n    \\n    // Check if there's events registered in the queue\\n    if (this.eventQueue[eventName]) {\\n        while (this.eventQueue[eventName].length) {\\n            cb(this.eventQueue[eventName][0]);\\n            this.eventQueue[eventName].shift();\\n        }\\n    }\\n  }\\n  \\n  bindEvents(initial = false) {\\n\\n    let triggerEls;\\n    let tabTriggerEls;\\n\\n    if (initial) {\\n        \\n      triggerEls = document.body.querySelectorAll(this.triggerSelector);\\n      tabTriggerEls = this.opts.tabTriggerSelector ? document.body.querySelectorAll(this.opts.tabTriggerSelector) : null;\\n      \\n    } else {\\n        \\n      triggerEls = [];\\n      tabTriggerEls = [];\\n      \\n      for (let i = 0; i < this.containerElement.length; i++) {\\n        triggerEls.push(...this.containerElement[i].querySelectorAll(this.triggerSelector));\\n        if (this.opts.tabTriggerSelector) {\\n            tabTriggerEls.push(...this.containerElement[i].querySelectorAll(this.opts.tabTriggerSelector));\\n        }\\n      }\\n\\n      // If we're doing tabs...\\n      if (this.tabsContainerElement) {\\n          triggerEls.push(...this.tabsContainerElement.querySelectorAll(this.triggerSelector));\\n          tabTriggerEls.push(...this.tabsContainerElement.querySelectorAll(this.opts.tabTriggerSelector));\\n      }\\n    }\\n    \\n    for (let i = 0; i < triggerEls.length; i++) {\\n      let el = triggerEls[i];\\n      el.removeEventListener('click', this.onGoTo);\\n      el.addEventListener('click', this.onGoTo);\\n      if (this.opts.preload) {\\n        el.removeEventListener('mouseover', this.onMouseOver);\\n        el.addEventListener('mouseover', this.onMouseOver);\\n      }\\n    }\\n    \\n    for (let i = 0; i < tabTriggerEls.length; i++) {\\n      let el = tabTriggerEls[i];\\n        el.removeEventListener('click', this.onOpenTab);\\n        el.addEventListener('click', this.onOpenTab);\\n      if (this.opts.preload) {\\n          el.removeEventListener('mouseover', this.onMouseOver);\\n          el.addEventListener('mouseover', this.onMouseOver);\\n      }\\n    }\\n  }\\n  \\n  handleGoTo(e) {\\n      this.goTo(e.currentTarget.getAttribute('href'));\\n      e.preventDefault();\\n  }\\n  \\n  handleOpenTab(e) {\\n      this.openTab(e.currentTarget.getAttribute('href'));\\n      e.preventDefault();\\n  }\\n  \\n  handleMouseover(e) {\\n      this.load(e.currentTarget.getAttribute('href'), html => {});\\n  }\\n\\n  parseRequest() {\\n\\n    const request = String(document.location).substr(this.base.length);\\n    const parts = request.split('#');\\n\\n    return {\\n      path: parts[0],\\n      hash: (parts[1] ? parts[1] : null)\\n    };\\n  }\\n\\n  historyChange(e) {\\n      if (e.state.tab) {\\n          this.routeTab();\\n      } else {\\n        this.route();\\n      }\\n  }\\n  \\n  init() {\\n      \\n      this.bindEvents(true);\\n      \\n      let tabElement = (this.opts.tabElementSelector ? document.body.querySelector(this.opts.tabElementSelector) : null);\\n      \\n      if (tabElement) {\\n          \\n          // Store the tab\\n          this.tabs[currentRequest.path] = tabElement;\\n          \\n          // Trigger the init event for tab initialisation\\n          this.trigger('init', {\\n              currentPath: currentRequest.path,\\n              tab: true,\\n              element: tabElement\\n          }, true);\\n          \\n      } else {\\n          \\n          // Set the last path\\n          this.lastPath = currentRequest.path;\\n\\n          // Trigger the init event for non-tab initialisation\\n          this.trigger('init', {\\n              currentPath: currentRequest.path,\\n              tab: false\\n          }, true);\\n      }\\n      \\n      if (this.opts.affectHistory) {\\n          \\n          let path = currentRequest.path+(currentRequest.hash ? '#'+currentRequest.hash : '');\\n          \\n          if (tabElement) {\\n              window.history.replaceState({transitoId: this.id, tab: path}, '', path);\\n          } else {\\n              window.history.replaceState({transitoId: this.id}, '', path);\\n          }\\n          \\n          window.addEventListener('popstate', e => {\\n              // Only do the history change when we know it's coming from this transito instance\\n              if (e.state && e.state.transitoId === this.id) {\\n                  this.historyChange(e);\\n              }\\n          });\\n      }\\n  }\\n  \\n  openTab(path) {\\n    if (this.ready) {\\n        if (this.opts.affectHistory) {\\n            window.history.pushState({transitoId: this.id, tab: path}, '', path);\\n            this.routeTab();\\n        } else {\\n            this.routeTab({path: path, hash: null});\\n        }\\n    }\\n  }\\n  \\n  goTo(path) {\\n    if (this.ready) {\\n        if (this.opts.affectHistory) {\\n            window.history.pushState({transitoId: this.id}, '', path);\\n            this.route();\\n        } else {\\n            this.route({\\n                path: path,\\n                hash: null\\n            });\\n        }\\n    }\\n  }\\n  \\n  routeTab(request = null) {\\n      \\n      newRequest = request || this.parseRequest();\\n      \\n      if (! this.opts.affectHistory || currentRequest.path !== newRequest.path) {\\n          \\n          this.trigger('preload', {\\n              currentPath: currentRequest.path,\\n              newPath: newRequest.path,\\n              tab: true\\n          });\\n          \\n          this.ready = false;\\n          \\n          if (this.tabs[newRequest.path]) {\\n              \\n              this.setActiveTab(newRequest.path);\\n              \\n              oldRequest = currentRequest;\\n              currentRequest = newRequest;\\n              \\n              this.trigger('postload', {\\n                  currentPath: currentRequest.path,\\n                  oldPath: oldRequest.path,\\n                  response: '',\\n                  element: this.tabs[newRequest.path],\\n                  tab: true\\n              });\\n              \\n              this.ready = true;\\n              \\n          } else {\\n              this.load(newRequest.path, html => {\\n                  \\n                  this.trigger('receivedresponse', {\\n                      response: html,\\n                      currentPath: currentRequest.path,\\n                      newPath: newRequest.path,\\n                      tab: true\\n                  });\\n                  \\n                  Promise.all(this.promises).then(() => {\\n                      \\n                      oldRequest = currentRequest;\\n                      currentRequest = newRequest;\\n                      \\n                      this.tabs[newRequest.path] = this.installTabHtml(html);\\n                      this.setActiveTab(newRequest.path);\\n    \\n                      requestAnimationFrame(() => {\\n                          requestAnimationFrame(() => {\\n                              document.body.classList.remove(this.opts.classLoading);\\n                          });\\n                      });\\n                      this.ready = true;\\n                  });\\n              });\\n          }\\n      }\\n  }\\n\\n  route(request = null) {\\n\\n    this.now = Date.now();\\n    newRequest = request || this.parseRequest();\\n    \\n    if (! this.opts.affectHistory || currentRequest.path !== newRequest.path) {\\n\\n      this.trigger('preload', {\\n        currentPath: currentRequest.path,\\n        newPath: newRequest.path,\\n        tab: false\\n      });\\n      \\n      if (newRequest.path === this.lastPath) {\\n          \\n        this.closeTabs();\\n        oldRequest = currentRequest;\\n        currentRequest = newRequest;\\n        this.lastPath = newRequest.path;\\n\\n        this.trigger('postload', {\\n          currentPath: currentRequest.path,\\n          oldPath: oldRequest.path,\\n          response: '',\\n          tab: false\\n        });\\n        \\n        return;\\n      }\\n      \\n      this.ready = false;\\n\\n      document.body.classList.add(this.opts.classLoading);\\n\\n      this.load(newRequest.path, html => {\\n          \\n        this.lastPath = newRequest.path;\\n        \\n        this.trigger('receivedresponse', {\\n            response: html,\\n            currentPath: currentRequest.path,\\n            newPath: newRequest.path,\\n            tab: false\\n        });\\n\\n        Promise.all(this.promises).then(() => {\\n\\n          this.then = Date.now();\\n          this.duration = ( this.then - this.now );\\n\\n          oldRequest = currentRequest;\\n          currentRequest = newRequest;\\n\\n          setTimeout(() => {\\n\\n              this.installHtml(html);\\n\\n              requestAnimationFrame(() => {\\n                requestAnimationFrame(() => {\\n                  document.body.classList.remove(this.opts.classLoading);\\n                  if (currentRequest.hash) {\\n                    this.scrollToElement(currentRequest.hash);\\n                  }\\n                });\\n              });\\n\\n              this.ready = true;\\n\\n          }, Math.max(0, this.opts.minDuration - this.duration));\\n        });\\n      });\\n\\n    } else if (currentRequest.hash !== newRequest.hash) {\\n\\n      this.ready = false;\\n      this.scrollToElement(newRequest.hash);\\n      this.ready = true;\\n    }\\n  }\\n\\n  scrollToElement(anchor) {\\n    let hashEl = document.getElementById(anchor);\\n    hashEl.scrollIntoView();\\n  }\\n\\n  load(path, cb) {\\n\\n    if (this.opts.cache && this.cached[path]) {\\n      cb(this.cached[path]);\\n      return;\\n    }\\n\\n    const req = new XMLHttpRequest();\\n\\n    req.onprogress = e => {\\n      this.trigger('progress', {\\n        loaded: e.loaded,\\n        total: e.total\\n      });\\n    };\\n\\n    req.onreadystatechange = () => {\\n      if (req.readyState == 4 && req.status == 200) {\\n        if (this.opts.cache) {\\n          this.cached[path] = req.responseText;\\n        }\\n        cb(req.responseText);\\n      }\\n    };\\n\\n    req.open('GET', path, true);\\n    req.send(null);\\n  }\\n\\n  installTabHtml(htmlString) {\\n      const title = htmlString.match(/<title[^>]*>([^<]+)<\\\\/title>/);\\n      \\n      if (title) {\\n          document.title = (0,_util__WEBPACK_IMPORTED_MODULE_2__.decodeHtmlEntities)(title[1]);\\n      }\\n\\n      let content = this.getElementsFromString(htmlString, this.opts.tabElementSelector)[0];\\n      let tabContainer = document.querySelector(this.opts.tabContainerElementSelector);\\n      \\n      if (! tabContainer || ! content) {\\n          return null;\\n      }\\n      \\n      tabContainer.appendChild(content);\\n      this.bindEvents();\\n      \\n      this.trigger('postload', {\\n          currentPath: currentRequest.path,\\n          oldPath: oldRequest.path,\\n          response: htmlString,\\n          element: content,\\n          tab: true\\n      });\\n      \\n      return content;\\n  }\\n  \\n  setActiveTab(path) {\\n      \\n      let tabElement = this.tabs[path];\\n      \\n      if (! tabElement) {\\n          return;\\n      }\\n      \\n      let tabContainer = document.querySelector(this.opts.tabContainerElementSelector);\\n      if (tabContainer) {\\n          let tabElements = tabContainer.querySelectorAll(this.opts.tabElementSelector);\\n          for (let i = 0; i < tabElements.length; i++) {\\n              tabElements[i].classList.remove(this.opts.classActiveTab);\\n          }\\n      }\\n      tabElement.classList.add(this.opts.classActiveTab);\\n  }\\n  \\n  closeTabs() {\\n      let tabContainer = document.querySelector(this.opts.tabContainerElementSelector);\\n      if (tabContainer) {\\n          let tabElements = tabContainer.querySelectorAll(this.opts.tabElementSelector);\\n          for (let i = 0; i < tabElements.length; i++) {\\n              tabElements[i].classList.remove(this.opts.classActiveTab);\\n          }\\n      }\\n  }\\n  \\n  installHtml(htmlString) {\\n\\n    const title = htmlString.match(/<title[^>]*>([^<]+)<\\\\/title>/);\\n\\n    if (title) {\\n      document.title = (0,_util__WEBPACK_IMPORTED_MODULE_2__.decodeHtmlEntities)(title[1]);\\n    }\\n    \\n    let contents = this.getElementsFromString(htmlString, this.opts.originContainerElementSelector);\\n    this.replaceChilds(this.containerElement, contents);\\n    this.bindEvents();\\n\\n    this.trigger('postload', {\\n      currentPath: currentRequest.path,\\n      oldPath: oldRequest.path,\\n      response: htmlString,\\n      tab: false\\n    });\\n  }\\n  \\n  replaceChilds(parents, newParents) {\\n      for (let i = 0; i < parents.length; i++) {\\n          // Empty the parent\\n          while (parents[i].firstChild) {\\n              parents[i].removeChild(parents[i].firstChild);\\n          }\\n          // Check if we have a corresponding new parent\\n          if (newParents[i]) {\\n              this.appendAllNodes(parents[i], newParents[i].childNodes);\\n          }\\n      }\\n  }\\n  \\n  appendAllNodes(parent, nodes) {\\n      // We create a document fragment to append all childs at once\\n      let docFrag = new DocumentFragment();\\n      while (nodes.length > 0) {\\n          // Add childnodes to document fragment\\n          docFrag.appendChild(nodes[0]);\\n      }\\n      // Append document fragment\\n      parent.appendChild(docFrag);\\n  }\\n  \\n  getElementsFromString(htmlString, selector) {\\n      const body = /<body.*?>([\\\\s\\\\S]*)<\\\\/body>/.exec(htmlString)[1];\\n      const tempContainer = document.createElement('div');\\n      tempContainer.innerHTML = body;\\n      return (selector === 'body' ? [tempContainer] : tempContainer.querySelectorAll(selector));\\n  }\\n\\n  installPlugin(plugin) {\\n    plugin.install(this);\\n  }\\n  \\n  emptyPromises() {\\n    this.promises = [];\\n  }\\n  \\n  setPromises(promises = []) {\\n    this.promises = promises;\\n  }\\n\\n  addPromise(promise) {\\n    this.promises.push(promise);\\n  }\\n}\\n\\n\\n\\n//# sourceURL=webpack://transito/./src/index.js?\");\n\n/***/ }),\n\n/***/ \"./src/plugins/body-classes.js\":\n/*!*************************************!*\\\n  !*** ./src/plugins/body-classes.js ***!\n  \\*************************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n\\n\\nconst BodyClasses = {\\n\\n\\tinstall(transito) {\\n\\n\\ttransito.on('postload', e => {\\n\\n\\t\\tconst classes = e.response.match(/body\\\\sclass=['|\\\"]([^'|\\\"]*)['|\\\"]/);\\n\\n\\t\\tdocument.body.className = '';\\n\\n\\t\\tif (classes) {\\n\\n\\t\\t\\tclasses[ 1 ].split(' ').forEach(className => {\\n\\t\\t\\t\\tdocument.body.classList.add(className);\\n\\t\\t\\t});\\n\\t\\t}\\n\\t});\\n\\t}\\n};\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BodyClasses);\\n\\n//# sourceURL=webpack://transito/./src/plugins/body-classes.js?\");\n\n/***/ }),\n\n/***/ \"./src/plugins/preload-images.js\":\n/*!***************************************!*\\\n  !*** ./src/plugins/preload-images.js ***!\n  \\***************************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\n\\n\\nconst PreloadImages = {\\n\\tinstall(transito) {\\n\\n\\t\\ttransito.on('receivedresponse', e => {\\n\\n\\t\\t\\ttransito.emptyPromises();\\n\\n\\t\\t\\tconst html = e.response;\\n\\t\\t\\tconst body = /<body.*?>([\\\\s\\\\S]*)<\\\\/body>/.exec(html)[1];\\n\\t\\t\\tconst tempContainer = document.createElement('div');\\n\\t\\t\\ttempContainer.innerHTML = body;\\n\\n\\t\\t\\tconst images = tempContainer.getElementsByTagName('img');\\n\\n\\t\\t\\tfor (let i = 0; i < images.length; i++) {\\n\\n\\t\\t\\t\\ttransito.addPromise( new Promise(resolve => {\\n\\n\\t\\t\\t\\t\\tconst img = new Image();\\n\\t\\t\\t\\t\\timg.onload = resolve;\\n\\t\\t\\t\\t\\timg.onerror = resolve;\\n\\t\\t\\t\\t\\timg.src = images[i].getAttribute('src');\\n\\t\\t\\t\\t}) );\\n\\t\\t\\t}\\n\\t\\t});\\n\\t}\\n};\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreloadImages);\\n\\n//# sourceURL=webpack://transito/./src/plugins/preload-images.js?\");\n\n/***/ }),\n\n/***/ \"./src/util.js\":\n/*!*********************!*\\\n  !*** ./src/util.js ***!\n  \\*********************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"decodeHtmlEntities\\\": () => (/* binding */ decodeHtmlEntities)\\n/* harmony export */ });\\n\\n\\nlet htmlEntities = {\\n    \\\"'\\\": \\\"&apos;\\\",\\n    \\\"<\\\": \\\"&lt;\\\",\\n    \\\">\\\": \\\"&gt;\\\",\\n    \\\" \\\": \\\"&nbsp;\\\",\\n    \\\"¡\\\": \\\"&iexcl;\\\",\\n    \\\"¢\\\": \\\"&cent;\\\",\\n    \\\"£\\\": \\\"&pound;\\\",\\n    \\\"¤\\\": \\\"&curren;\\\",\\n    \\\"¥\\\": \\\"&yen;\\\",\\n    \\\"¦\\\": \\\"&brvbar;\\\",\\n    \\\"§\\\": \\\"&sect;\\\",\\n    \\\"¨\\\": \\\"&uml;\\\",\\n    \\\"©\\\": \\\"&copy;\\\",\\n    \\\"ª\\\": \\\"&ordf;\\\",\\n    \\\"«\\\": \\\"&laquo;\\\",\\n    \\\"¬\\\": \\\"&not;\\\",\\n    \\\"®\\\": \\\"&reg;\\\",\\n    \\\"¯\\\": \\\"&macr;\\\",\\n    \\\"°\\\": \\\"&deg;\\\",\\n    \\\"±\\\": \\\"&plusmn;\\\",\\n    \\\"²\\\": \\\"&sup2;\\\",\\n    \\\"³\\\": \\\"&sup3;\\\",\\n    \\\"´\\\": \\\"&acute;\\\",\\n    \\\"µ\\\": \\\"&micro;\\\",\\n    \\\"¶\\\": \\\"&para;\\\",\\n    \\\"·\\\": \\\"&middot;\\\",\\n    \\\"¸\\\": \\\"&cedil;\\\",\\n    \\\"¹\\\": \\\"&sup1;\\\",\\n    \\\"º\\\": \\\"&ordm;\\\",\\n    \\\"»\\\": \\\"&raquo;\\\",\\n    \\\"¼\\\": \\\"&frac14;\\\",\\n    \\\"½\\\": \\\"&frac12;\\\",\\n    \\\"¾\\\": \\\"&frac34;\\\",\\n    \\\"¿\\\": \\\"&iquest;\\\",\\n    \\\"À\\\": \\\"&Agrave;\\\",\\n    \\\"Á\\\": \\\"&Aacute;\\\",\\n    \\\"Â\\\": \\\"&Acirc;\\\",\\n    \\\"Ã\\\": \\\"&Atilde;\\\",\\n    \\\"Ä\\\": \\\"&Auml;\\\",\\n    \\\"Å\\\": \\\"&Aring;\\\",\\n    \\\"Æ\\\": \\\"&AElig;\\\",\\n    \\\"Ç\\\": \\\"&Ccedil;\\\",\\n    \\\"È\\\": \\\"&Egrave;\\\",\\n    \\\"É\\\": \\\"&Eacute;\\\",\\n    \\\"Ê\\\": \\\"&Ecirc;\\\",\\n    \\\"Ë\\\": \\\"&Euml;\\\",\\n    \\\"Ì\\\": \\\"&Igrave;\\\",\\n    \\\"Í\\\": \\\"&Iacute;\\\",\\n    \\\"Î\\\": \\\"&Icirc;\\\",\\n    \\\"Ï\\\": \\\"&Iuml;\\\",\\n    \\\"Ð\\\": \\\"&ETH;\\\",\\n    \\\"Ñ\\\": \\\"&Ntilde;\\\",\\n    \\\"Ò\\\": \\\"&Ograve;\\\",\\n    \\\"Ó\\\": \\\"&Oacute;\\\",\\n    \\\"Ô\\\": \\\"&Ocirc;\\\",\\n    \\\"Õ\\\": \\\"&Otilde;\\\",\\n    \\\"Ö\\\": \\\"&Ouml;\\\",\\n    \\\"×\\\": \\\"&times;\\\",\\n    \\\"Ø\\\": \\\"&Oslash;\\\",\\n    \\\"Ù\\\": \\\"&Ugrave;\\\",\\n    \\\"Ú\\\": \\\"&Uacute;\\\",\\n    \\\"Û\\\": \\\"&Ucirc;\\\",\\n    \\\"Ü\\\": \\\"&Uuml;\\\",\\n    \\\"Ý\\\": \\\"&Yacute;\\\",\\n    \\\"Þ\\\": \\\"&THORN;\\\",\\n    \\\"ß\\\": \\\"&szlig;\\\",\\n    \\\"à\\\": \\\"&agrave;\\\",\\n    \\\"á\\\": \\\"&aacute;\\\",\\n    \\\"â\\\": \\\"&acirc;\\\",\\n    \\\"ã\\\": \\\"&atilde;\\\",\\n    \\\"ä\\\": \\\"&auml;\\\",\\n    \\\"å\\\": \\\"&aring;\\\",\\n    \\\"æ\\\": \\\"&aelig;\\\",\\n    \\\"ç\\\": \\\"&ccedil;\\\",\\n    \\\"è\\\": \\\"&egrave;\\\",\\n    \\\"é\\\": \\\"&eacute;\\\",\\n    \\\"ê\\\": \\\"&ecirc;\\\",\\n    \\\"ë\\\": \\\"&euml;\\\",\\n    \\\"ì\\\": \\\"&igrave;\\\",\\n    \\\"í\\\": \\\"&iacute;\\\",\\n    \\\"î\\\": \\\"&icirc;\\\",\\n    \\\"ï\\\": \\\"&iuml;\\\",\\n    \\\"ð\\\": \\\"&eth;\\\",\\n    \\\"ñ\\\": \\\"&ntilde;\\\",\\n    \\\"ò\\\": \\\"&ograve;\\\",\\n    \\\"ó\\\": \\\"&oacute;\\\",\\n    \\\"ô\\\": \\\"&ocirc;\\\",\\n    \\\"õ\\\": \\\"&otilde;\\\",\\n    \\\"ö\\\": \\\"&ouml;\\\",\\n    \\\"÷\\\": \\\"&divide;\\\",\\n    \\\"ø\\\": \\\"&oslash;\\\",\\n    \\\"ù\\\": \\\"&ugrave;\\\",\\n    \\\"ú\\\": \\\"&uacute;\\\",\\n    \\\"û\\\": \\\"&ucirc;\\\",\\n    \\\"ü\\\": \\\"&uuml;\\\",\\n    \\\"ý\\\": \\\"&yacute;\\\",\\n    \\\"þ\\\": \\\"&thorn;\\\",\\n    \\\"ÿ\\\": \\\"&yuml;\\\",\\n    \\\"Œ\\\": \\\"&OElig;\\\",\\n    \\\"œ\\\": \\\"&oelig;\\\",\\n    \\\"Š\\\": \\\"&Scaron;\\\",\\n    \\\"š\\\": \\\"&scaron;\\\",\\n    \\\"Ÿ\\\": \\\"&Yuml;\\\",\\n    \\\"ƒ\\\": \\\"&fnof;\\\",\\n    \\\"ˆ\\\": \\\"&circ;\\\",\\n    \\\"˜\\\": \\\"&tilde;\\\",\\n    \\\"Α\\\": \\\"&Alpha;\\\",\\n    \\\"Β\\\": \\\"&Beta;\\\",\\n    \\\"Γ\\\": \\\"&Gamma;\\\",\\n    \\\"Δ\\\": \\\"&Delta;\\\",\\n    \\\"Ε\\\": \\\"&Epsilon;\\\",\\n    \\\"Ζ\\\": \\\"&Zeta;\\\",\\n    \\\"Η\\\": \\\"&Eta;\\\",\\n    \\\"Θ\\\": \\\"&Theta;\\\",\\n    \\\"Ι\\\": \\\"&Iota;\\\",\\n    \\\"Κ\\\": \\\"&Kappa;\\\",\\n    \\\"Λ\\\": \\\"&Lambda;\\\",\\n    \\\"Μ\\\": \\\"&Mu;\\\",\\n    \\\"Ν\\\": \\\"&Nu;\\\",\\n    \\\"Ξ\\\": \\\"&Xi;\\\",\\n    \\\"Ο\\\": \\\"&Omicron;\\\",\\n    \\\"Π\\\": \\\"&Pi;\\\",\\n    \\\"Ρ\\\": \\\"&Rho;\\\",\\n    \\\"Σ\\\": \\\"&Sigma;\\\",\\n    \\\"Τ\\\": \\\"&Tau;\\\",\\n    \\\"Υ\\\": \\\"&Upsilon;\\\",\\n    \\\"Φ\\\": \\\"&Phi;\\\",\\n    \\\"Χ\\\": \\\"&Chi;\\\",\\n    \\\"Ψ\\\": \\\"&Psi;\\\",\\n    \\\"Ω\\\": \\\"&Omega;\\\",\\n    \\\"α\\\": \\\"&alpha;\\\",\\n    \\\"β\\\": \\\"&beta;\\\",\\n    \\\"γ\\\": \\\"&gamma;\\\",\\n    \\\"δ\\\": \\\"&delta;\\\",\\n    \\\"ε\\\": \\\"&epsilon;\\\",\\n    \\\"ζ\\\": \\\"&zeta;\\\",\\n    \\\"η\\\": \\\"&eta;\\\",\\n    \\\"θ\\\": \\\"&theta;\\\",\\n    \\\"ι\\\": \\\"&iota;\\\",\\n    \\\"κ\\\": \\\"&kappa;\\\",\\n    \\\"λ\\\": \\\"&lambda;\\\",\\n    \\\"μ\\\": \\\"&mu;\\\",\\n    \\\"ν\\\": \\\"&nu;\\\",\\n    \\\"ξ\\\": \\\"&xi;\\\",\\n    \\\"ο\\\": \\\"&omicron;\\\",\\n    \\\"π\\\": \\\"&pi;\\\",\\n    \\\"ρ\\\": \\\"&rho;\\\",\\n    \\\"ς\\\": \\\"&sigmaf;\\\",\\n    \\\"σ\\\": \\\"&sigma;\\\",\\n    \\\"τ\\\": \\\"&tau;\\\",\\n    \\\"υ\\\": \\\"&upsilon;\\\",\\n    \\\"φ\\\": \\\"&phi;\\\",\\n    \\\"χ\\\": \\\"&chi;\\\",\\n    \\\"ψ\\\": \\\"&psi;\\\",\\n    \\\"ω\\\": \\\"&omega;\\\",\\n    \\\"ϑ\\\": \\\"&thetasym;\\\",\\n    \\\"ϒ\\\": \\\"&Upsih;\\\",\\n    \\\"ϖ\\\": \\\"&piv;\\\",\\n    \\\"–\\\": \\\"&ndash;\\\",\\n    \\\"—\\\": \\\"&mdash;\\\",\\n    \\\"‘\\\": \\\"&lsquo;\\\",\\n    \\\"’\\\": \\\"&rsquo;\\\",\\n    \\\"‚\\\": \\\"&sbquo;\\\",\\n    \\\"“\\\": \\\"&ldquo;\\\",\\n    \\\"”\\\": \\\"&rdquo;\\\",\\n    \\\"„\\\": \\\"&bdquo;\\\",\\n    \\\"†\\\": \\\"&dagger;\\\",\\n    \\\"‡\\\": \\\"&Dagger;\\\",\\n    \\\"•\\\": \\\"&bull;\\\",\\n    \\\"…\\\": \\\"&hellip;\\\",\\n    \\\"‰\\\": \\\"&permil;\\\",\\n    \\\"′\\\": \\\"&prime;\\\",\\n    \\\"″\\\": \\\"&Prime;\\\",\\n    \\\"‹\\\": \\\"&lsaquo;\\\",\\n    \\\"›\\\": \\\"&rsaquo;\\\",\\n    \\\"‾\\\": \\\"&oline;\\\",\\n    \\\"⁄\\\": \\\"&frasl;\\\",\\n    \\\"€\\\": \\\"&euro;\\\",\\n    \\\"ℑ\\\": \\\"&image;\\\",\\n    \\\"℘\\\": \\\"&weierp;\\\",\\n    \\\"ℜ\\\": \\\"&real;\\\",\\n    \\\"™\\\": \\\"&trade;\\\",\\n    \\\"ℵ\\\": \\\"&alefsym;\\\",\\n    \\\"←\\\": \\\"&larr;\\\",\\n    \\\"↑\\\": \\\"&uarr;\\\",\\n    \\\"→\\\": \\\"&rarr;\\\",\\n    \\\"↓\\\": \\\"&darr;\\\",\\n    \\\"↔\\\": \\\"&harr;\\\",\\n    \\\"↵\\\": \\\"&crarr;\\\",\\n    \\\"⇐\\\": \\\"&lArr;\\\",\\n    \\\"⇑\\\": \\\"&UArr;\\\",\\n    \\\"⇒\\\": \\\"&rArr;\\\",\\n    \\\"⇓\\\": \\\"&dArr;\\\",\\n    \\\"⇔\\\": \\\"&hArr;\\\",\\n    \\\"∀\\\": \\\"&forall;\\\",\\n    \\\"∂\\\": \\\"&part;\\\",\\n    \\\"∃\\\": \\\"&exist;\\\",\\n    \\\"∅\\\": \\\"&empty;\\\",\\n    \\\"∇\\\": \\\"&nabla;\\\",\\n    \\\"∈\\\": \\\"&isin;\\\",\\n    \\\"∉\\\": \\\"&notin;\\\",\\n    \\\"∋\\\": \\\"&ni;\\\",\\n    \\\"∏\\\": \\\"&prod;\\\",\\n    \\\"∑\\\": \\\"&sum;\\\",\\n    \\\"−\\\": \\\"&minus;\\\",\\n    \\\"∗\\\": \\\"&lowast;\\\",\\n    \\\"√\\\": \\\"&radic;\\\",\\n    \\\"∝\\\": \\\"&prop;\\\",\\n    \\\"∞\\\": \\\"&infin;\\\",\\n    \\\"∠\\\": \\\"&ang;\\\",\\n    \\\"∧\\\": \\\"&and;\\\",\\n    \\\"∨\\\": \\\"&or;\\\",\\n    \\\"∩\\\": \\\"&cap;\\\",\\n    \\\"∪\\\": \\\"&cup;\\\",\\n    \\\"∫\\\": \\\"&int;\\\",\\n    \\\"∴\\\": \\\"&there4;\\\",\\n    \\\"∼\\\": \\\"&sim;\\\",\\n    \\\"≅\\\": \\\"&cong;\\\",\\n    \\\"≈\\\": \\\"&asymp;\\\",\\n    \\\"≠\\\": \\\"&ne;\\\",\\n    \\\"≡\\\": \\\"&equiv;\\\",\\n    \\\"≤\\\": \\\"&le;\\\",\\n    \\\"≥\\\": \\\"&ge;\\\",\\n    \\\"⊂\\\": \\\"&sub;\\\",\\n    \\\"⊃\\\": \\\"&sup;\\\",\\n    \\\"⊄\\\": \\\"&nsub;\\\",\\n    \\\"⊆\\\": \\\"&sube;\\\",\\n    \\\"⊇\\\": \\\"&supe;\\\",\\n    \\\"⊕\\\": \\\"&oplus;\\\",\\n    \\\"⊗\\\": \\\"&otimes;\\\",\\n    \\\"⊥\\\": \\\"&perp;\\\",\\n    \\\"⋅\\\": \\\"&sdot;\\\",\\n    \\\"⌈\\\": \\\"&lceil;\\\",\\n    \\\"⌉\\\": \\\"&rceil;\\\",\\n    \\\"⌊\\\": \\\"&lfloor;\\\",\\n    \\\"⌋\\\": \\\"&rfloor;\\\",\\n    \\\"⟨\\\": \\\"&lang;\\\",\\n    \\\"⟩\\\": \\\"&rang;\\\",\\n    \\\"◊\\\": \\\"&loz;\\\",\\n    \\\"♠\\\": \\\"&spades;\\\",\\n    \\\"♣\\\": \\\"&clubs;\\\",\\n    \\\"♥\\\": \\\"&hearts;\\\",\\n    \\\"♦\\\": \\\"&diams;\\\",\\n    '\\\"': '&quot;',\\n    \\\"&\\\": \\\"&amp;\\\"\\n};\\n\\nfunction decodeHtmlEntities(string) {\\n\\n    for (let key in htmlEntities) {\\n        let entity = htmlEntities[key];\\n        let regex = new RegExp(entity, 'g');\\n        string = string.replace(regex, key);\\n    }\\n\\n    return string;\\n}\\n\\n\\n//# sourceURL=webpack://transito/./src/util.js?\");\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __nested_webpack_require_28051__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];\n/******/ \t\tif (cachedModule !== undefined) {\n/******/ \t\t\treturn cachedModule.exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\t// no module.id needed\n/******/ \t\t\t// no module.loaded needed\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_28051__);\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t(() => {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__nested_webpack_require_28051__.d = (exports, definition) => {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__nested_webpack_require_28051__.o(definition, key) && !__nested_webpack_require_28051__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t(() => {\n/******/ \t\t__nested_webpack_require_28051__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/make namespace object */\n/******/ \t(() => {\n/******/ \t\t// define __esModule on exports\n/******/ \t\t__nested_webpack_require_28051__.r = (exports) => {\n/******/ \t\t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t\t}\n/******/ \t\t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/************************************************************************/\n/******/ \t\n/******/ \t// startup\n/******/ \t// Load entry module and return exports\n/******/ \t// This entry module can't be inlined because the eval devtool is used.\n/******/ \tvar __webpack_exports__ = __nested_webpack_require_28051__(\"./src/index.js\");\n/******/ \t\n/******/ \treturn __webpack_exports__;\n/******/ })()\n;\n});\n\n//# sourceURL=webpack://transito/./dist/transito.bundle.js?");

/***/ }),

/***/ "./example/index.js":
/*!**************************!*\
  !*** ./example/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/transito.bundle */ \"./dist/transito.bundle.js\");\n/* harmony import */ var _dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nconst base = document.querySelector('base').getAttribute('href');\n\n// main\nlet transito = new _dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__.Transito(base, '#wrapper, #header', 'a:not(.open-tab)', {\n    minDuration: 3000,\n    tabTriggerSelector: '.open-tab',\n    tabElementSelector: '.tab',\n    tabContainerElementSelector: '.tabs'\n});\n\ntransito.installPlugin(_dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__.PreloadImagesPlugin);\ntransito.installPlugin(_dist_transito_bundle__WEBPACK_IMPORTED_MODULE_0__.BodyClassesPlugin);\n\ntransito.on('init', e => {\n    console.log('init', e);\n});\n\ntransito.on('postload', e => {\n    console.log('postload', e)\n});\ntransito.on('preload', e => {\n    console.log('preload', e);\n    transito.closeTabs();\n});\n\nconsole.log('change!!');\n\n//# sourceURL=webpack://transito/./example/index.js?");

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