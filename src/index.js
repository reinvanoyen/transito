"use strict";

import PreloadImagesPlugin from "./plugins/preload-images";
import BodyClassesPlugin from "./plugins/body-classes";
import { decodeHtmlEntities } from "./util";

/**
 * 
 * @module transito
 * @author Rein Van Oyen
 * 
 */

let transitoId = 0;
let currentRequest, newRequest, oldRequest;

class Transito {

  /**
   * @param  {String} base - The base url
   * @param  {String} containerElementSelector - The selector to find the element in which to replace the content to (and from)
   * @param  {String} triggerSelector - The selector to find the elements on which to click to trigger a page transition
   * @param  {Object} opts - An object with the options and their values
   * @return {void}
   */
  constructor(base, containerElementSelector, triggerSelector = 'a', opts = {}) {

    this.base = base;
    this.containerElementSelector = containerElementSelector;
    this.triggerSelector = triggerSelector;

    this.opts = {
      preload: true,
      cache: true,
      minDuration: 800,
      classLoading: 'loading',
      originContainerElementSelector: containerElementSelector,
      affectHistory: true,
      includeElementsInEvent: null,
      
      // Tab functionality
      tabTriggerSelector: null,
      tabElementSelector: null,
      tabContainerElementSelector: null,
      classActiveTab: 'active-tab'
    };
    
    this.opts = Object.assign(this.opts, opts);

    this.promises = [];
    this.cached = {};
    this.eventListeners = {};
    this.eventQueue = {};
    this.tabs = {};
    this.lastPath = null;

    currentRequest = this.parseRequest();
    newRequest = null;
    oldRequest = null;
    
    this.containerElement = document.querySelectorAll(this.containerElementSelector);
    this.tabsContainerElement = document.querySelector(this.opts.tabContainerElementSelector);
    this.tabZIndex = 1;
    this.ready = true;
    
    this.cachedIncludedElements = {};
    
    this.onGoTo = this.handleGoTo.bind(this);
    this.onOpenTab = this.handleOpenTab.bind(this);
    this.onMouseOver = this.handleMouseover.bind(this);

    this.id = transitoId;
    transitoId++;

    this.init();
  }

  /**
   * Trigger an internal event by name
   * @param  {String} eventName - The name of the event to trigger
   * @param  {Object} event - The event (which can contain any data you want)
   * @param  {Boolean} queued
   * @return {void}
   */
  trigger(eventName, event = {}, queued = false) {
    if (this.eventListeners[eventName]) {
      this.eventListeners[eventName].forEach( cb => {
        cb(event);
      });
    } else if (queued) {
        if (! this.eventQueue[eventName]) {
            this.eventQueue[eventName] = [];
        }
        this.eventQueue[eventName].push(event);
    }
  }

    /**
     * Register an event listener
     * @param eventName
     * @param cb
     */
  on(eventName, cb) {
    if (!this.eventListeners[eventName]) {
      this.eventListeners[eventName] = [];
    }
    this.eventListeners[eventName].push(cb);
    
    // Check if there's events registered in the queue
    if (this.eventQueue[eventName]) {
        while (this.eventQueue[eventName].length) {
            cb(this.eventQueue[eventName][0]);
            this.eventQueue[eventName].shift();
        }
    }
  }
  
  bindEvents(scope, initial = false) {

    let triggerEls;
    let tabTriggerEls;

    if (initial) {
      
      triggerEls = scope.querySelectorAll(this.triggerSelector);
      tabTriggerEls = this.opts.tabTriggerSelector ? scope.querySelectorAll(this.opts.tabTriggerSelector) : null;
      
    } else {
      
      triggerEls = [];
      tabTriggerEls = [];
      
      for (let i = 0; i < this.containerElement.length; i++) {
        triggerEls.push(...this.containerElement[i].querySelectorAll(this.triggerSelector));
        if (this.opts.tabTriggerSelector) {
            tabTriggerEls.push(...this.containerElement[i].querySelectorAll(this.opts.tabTriggerSelector));
        }
      }

      // If we're doing tabs...
      if (this.tabsContainerElement) {
          triggerEls.push(...this.tabsContainerElement.querySelectorAll(this.triggerSelector));
          tabTriggerEls.push(...this.tabsContainerElement.querySelectorAll(this.opts.tabTriggerSelector));
      }
    }
    
    for (let i = 0; i < triggerEls.length; i++) {
      let el = triggerEls[i];
      el.removeEventListener('click', this.onGoTo);
      el.addEventListener('click', this.onGoTo);
      if (this.opts.preload) {
        el.removeEventListener('mouseover', this.onMouseOver);
        el.addEventListener('mouseover', this.onMouseOver);
      }
    }
    
    for (let i = 0; i < tabTriggerEls.length; i++) {
      let el = tabTriggerEls[i];
        el.removeEventListener('click', this.onOpenTab);
        el.addEventListener('click', this.onOpenTab);
      if (this.opts.preload) {
          el.removeEventListener('mouseover', this.onMouseOver);
          el.addEventListener('mouseover', this.onMouseOver);
      }
    }
  }
  
  handleGoTo(e) {
      this.goTo(e.currentTarget.getAttribute('href'));
      e.preventDefault();
  }
  
  handleOpenTab(e) {
      this.openTab(e.currentTarget.getAttribute('href'));
      e.preventDefault();
  }
  
  handleMouseover(e) {
      this.load(e.currentTarget.getAttribute('href'), html => {});
  }

  parseRequest() {

    const request = String(document.location).substr(this.base.length);
    const parts = request.split('#');

    return {
      path: parts[0],
      hash: (parts[1] ? parts[1] : null)
    };
  }

  historyChange(e) {
      if (e.state.tab) {
          this.routeTab();
      } else {
        this.route();
      }
  }
  
  init() {
      
      this.bindEvents(document, true);
      
      let tabElement = (this.opts.tabElementSelector ? document.body.querySelector(this.opts.tabElementSelector) : null);
      
      if (tabElement) {
          
          // Store the tab
          this.tabs[currentRequest.path] = tabElement;
          this.setActiveTab(currentRequest.path);
          
          // Trigger the init event for tab initialisation
          this.trigger('init', {
              currentPath: currentRequest.path,
              tab: true,
              element: tabElement
          }, true);
          
      } else {
          
          // Set the last path
          this.lastPath = currentRequest.path;

          // Trigger the init event for non-tab initialisation
          this.trigger('init', {
              currentPath: currentRequest.path,
              tab: false
          }, true);
      }
      
      if (this.opts.affectHistory) {
          
          let path = currentRequest.path+(currentRequest.hash ? '#'+currentRequest.hash : '');
          
          if (tabElement) {
              window.history.replaceState({transitoId: this.id, tab: path}, '', path);
          } else {
              window.history.replaceState({transitoId: this.id}, '', path);
          }
          
          window.addEventListener('popstate', e => {
              // Only do the history change when we know it's coming from this transito instance
              if (e.state && e.state.transitoId === this.id) {
                  this.historyChange(e);
              }
          });
      }
  }
  
  openTab(path) {
    if (this.ready) {
        if (this.opts.affectHistory) {
            window.history.pushState({transitoId: this.id, tab: path}, '', path);
            this.routeTab();
        } else {
            this.routeTab({path: path, hash: null});
        }
    }
  }
  
  goTo(path) {
    if (this.ready) {
        if (this.opts.affectHistory) {
            window.history.pushState({transitoId: this.id}, '', path);
            this.route();
        } else {
            this.route({
                path: path,
                hash: null
            });
        }
    }
  }
  
  routeTab(request = null) {
      
      newRequest = request || this.parseRequest();
      
      if (! this.opts.affectHistory || currentRequest.path !== newRequest.path) {
          
          this.trigger('preload', {
              currentPath: currentRequest.path,
              newPath: newRequest.path,
              tab: true
          });
          
          this.ready = false;
          
          if (this.tabs[newRequest.path]) {
              
              this.setActiveTab(newRequest.path);
              
              oldRequest = currentRequest;
              currentRequest = newRequest;
              
              this.trigger('postload', {
                  currentPath: currentRequest.path,
                  oldPath: oldRequest.path,
                  response: '',
                  element: this.tabs[newRequest.path],
                  includedElements: this.cachedIncludedElements[currentRequest.path] || [],
                  tab: true
              });
              
              this.ready = true;
              
          } else {
              
              this.load(newRequest.path, html => {
                  
                  this.trigger('receivedresponse', {
                      response: html,
                      currentPath: currentRequest.path,
                      newPath: newRequest.path,
                      tab: true
                  });
                  
                  Promise.all(this.promises).then(() => {
                      
                      oldRequest = currentRequest;
                      currentRequest = newRequest;
                      
                      this.tabs[newRequest.path] = this.installTabHtml(html);
                      this.setActiveTab(newRequest.path);
    
                      requestAnimationFrame(() => {
                          requestAnimationFrame(() => {
                              document.body.classList.remove(this.opts.classLoading);
                          });
                      });
                      this.ready = true;
                  });
              });
          }
      }
  }

  route(request = null) {

    this.now = Date.now();
    newRequest = request || this.parseRequest();
    
    if (! this.opts.affectHistory || currentRequest.path !== newRequest.path) {

      this.trigger('preload', {
        currentPath: currentRequest.path,
        newPath: newRequest.path,
        tab: false
      });
      
      if (newRequest.path === this.lastPath) {
          
        this.closeTabs();
        oldRequest = currentRequest;
        currentRequest = newRequest;
        this.lastPath = newRequest.path;

        this.trigger('postload', {
          currentPath: currentRequest.path,
          oldPath: oldRequest.path,
          response: '',
          includedElements: this.cachedIncludedElements[currentRequest.path] || [],
          tab: false
        });
        
        return;
      }
      
      this.ready = false;

      document.body.classList.add(this.opts.classLoading);

      this.load(newRequest.path, html => {
          
        this.lastPath = newRequest.path;
        
        this.trigger('receivedresponse', {
            response: html,
            currentPath: currentRequest.path,
            newPath: newRequest.path,
            tab: false
        });

        Promise.all(this.promises).then(() => {

          this.then = Date.now();
          this.duration = ( this.then - this.now );

          oldRequest = currentRequest;
          currentRequest = newRequest;

          setTimeout(() => {

              this.installHtml(html);

              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  document.body.classList.remove(this.opts.classLoading);
                  if (currentRequest.hash) {
                    this.scrollToElement(currentRequest.hash);
                  }
                });
              });

              this.ready = true;

          }, Math.max(0, this.opts.minDuration - this.duration));
        });
      });

    } else if (currentRequest.hash !== newRequest.hash) {

      this.ready = false;
      this.scrollToElement(newRequest.hash);
      this.ready = true;
    }
  }

  scrollToElement(anchor) {
    let hashEl = document.getElementById(anchor);
    hashEl.scrollIntoView();
  }

  getIncludedElementsFromHtmlString(htmlString) {
      let includedElements = [];
      if (this.opts.includeElementsInEvent) {
          includedElements = this.getElementsFromString(htmlString, this.opts.includeElementsInEvent);
          for (let i = 0; i < includedElements.length; i++) {
              this.bindEvents(includedElements[i], true);
          }
          this.cachedIncludedElements[currentRequest.path] = includedElements;
      }
      
      return includedElements;
  }
  
  load(path, cb) {

    if (this.opts.cache && this.cached[path]) {
      cb(this.cached[path]);
      return;
    }

    const req = new XMLHttpRequest();

    req.onprogress = e => {
      this.trigger('progress', {
        loaded: e.loaded,
        total: e.total
      });
    };

    req.onreadystatechange = () => {
      if (req.readyState == 4 && req.status == 200) {
        if (this.opts.cache) {
          this.cached[path] = req.responseText;
        }
        cb(req.responseText);
      }
    };

    req.open('GET', path, true);
    req.send(null);
  }

  installTabHtml(htmlString) {
      
      const title = htmlString.match(/<title[^>]*>([^<]+)<\/title>/);
      
      if (title) {
          document.title = decodeHtmlEntities(title[1]);
      }

      let content = this.getElementsFromString(htmlString, this.opts.tabElementSelector)[0];
      let tabContainer = document.querySelector(this.opts.tabContainerElementSelector);
      
      if (! tabContainer || ! content) {
          return null;
      }
      
      tabContainer.appendChild(content);
      
      this.bindEvents(document);
      
      this.trigger('postload', {
          currentPath: currentRequest.path,
          oldPath: oldRequest.path,
          response: htmlString,
          element: content,
          includedElements: this.getIncludedElementsFromHtmlString(htmlString),
          tab: true
      });
      
      return content;
  }
  
  setActiveTab(path) {
      
      let tabElement = this.tabs[path];
      if (! tabElement) {
          return;
      }
      
      if (! tabElement.classList.contains(this.opts.classActiveTab)) {
        tabElement.style.zIndex = this.tabZIndex++;
      }
      
      tabElement.classList.add(this.opts.classActiveTab);
  }
  
  closeTabs() {
      let tabContainer = document.querySelector(this.opts.tabContainerElementSelector);
      if (tabContainer) {
          let tabElements = tabContainer.querySelectorAll(this.opts.tabElementSelector);
          for (let i = 0; i < tabElements.length; i++) {
              tabElements[i].classList.remove(this.opts.classActiveTab);
          }
      }
  }

  closeTabsExcept(path) {

      let tabElement = this.tabs[path];
      if (! tabElement) {
          this.closeTabs();
          return;
      }

      let tabContainer = document.querySelector(this.opts.tabContainerElementSelector);
      if (tabContainer) {
          let tabElements = tabContainer.querySelectorAll(this.opts.tabElementSelector);
          for (let i = 0; i < tabElements.length; i++) {
              if (tabElements[i] !== tabElement) {
                tabElements[i].classList.remove(this.opts.classActiveTab);
              }
          }
      }
  }
  
  installHtml(htmlString) {

    const title = htmlString.match(/<title[^>]*>([^<]+)<\/title>/);

    if (title) {
      document.title = decodeHtmlEntities(title[1]);
    }
    
    let contents = this.getElementsFromString(htmlString, this.opts.originContainerElementSelector);
    this.replaceChilds(this.containerElement, contents);
    this.bindEvents(document);
    
    this.trigger('postload', {
      currentPath: currentRequest.path,
      oldPath: oldRequest.path,
      response: htmlString,
      includedElements: this.getIncludedElementsFromHtmlString(htmlString),
      tab: false
    });
  }
  
  replaceChilds(parents, newParents) {
      for (let i = 0; i < parents.length; i++) {
          // Empty the parent
          while (parents[i].firstChild) {
              parents[i].removeChild(parents[i].firstChild);
          }
          // Check if we have a corresponding new parent
          if (newParents[i]) {
              this.appendAllNodes(parents[i], newParents[i].childNodes);
          }
      }
  }
  
  appendAllNodes(parent, nodes) {
      // We create a document fragment to append all childs at once
      let docFrag = new DocumentFragment();
      while (nodes.length > 0) {
          // Add childnodes to document fragment
          docFrag.appendChild(nodes[0]);
      }
      // Append document fragment
      parent.appendChild(docFrag);
  }
  
  getElementsFromString(htmlString, selector) {
      const body = /<body.*?>([\s\S]*)<\/body>/.exec(htmlString)[1];
      const tempContainer = document.createElement('div');
      tempContainer.innerHTML = body;
      return (selector === 'body' ? [tempContainer] : tempContainer.querySelectorAll(selector));
  }

  installPlugin(plugin) {
    plugin.install(this);
  }
  
  emptyPromises() {
    this.promises = [];
  }
  
  setPromises(promises = []) {
    this.promises = promises;
  }

  addPromise(promise) {
    this.promises.push(promise);
  }
}

export {Transito, PreloadImagesPlugin, BodyClassesPlugin};