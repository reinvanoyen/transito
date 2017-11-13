"use strict";

import PreloadImagesPlugin from "./plugins/preload-images";
import BodyClassesPlugin from "./plugins/body-classes";

/**
 * @module transito
 * @author Rein Van Oyen
 */

let transitoId = 0;

class Transito {

  /**
   * @param  {String} base - The base url
   * @param  {String} containerElementSelector - The selector to find the element in which to replace the content to (and from)
   * @param  {String} triggerSelector - The selector to find the elements on which to click to trigger a page transition
   * @param  {Object} opts - An object with the options and their values
   * @return {void}
   */
  constructor(base, containerElementSelector, triggerSelector = 'a', opts = {} ) {
    this.opts = {
      preload: true,
      cache: true,
      minDuration: 800,
      classLoading: 'loading',
      originContainerElementSelector: containerElementSelector
    };
    this.promises = [];
    this.cached = {};
    this.eventListeners = {};

    this.base = base;
    this.containerElementSelector = containerElementSelector;
    this.triggerSelector = triggerSelector;
    this.opts = Object.assign(this.opts, opts);

    this.currentRequest = this.parseRequest();
    this.newRequest = null;
    this.oldRequest = null;
    this.containerElement = document.querySelector(this.containerElementSelector);

    this.ready = true;

    this.bindEvents(true);

    this.id = transitoId;
    transitoId++;

    window.history.replaceState({transitoId: this.id}, '', this.currentRequest.path);

    window.onpopstate = e => {
      if (e.state && e.state.transitoId === this.id) {
        this.route();
      }
    };
  }

  installPlugin(plugin) {
    plugin.install(this);
  }

  /**
   * Trigger an internal event by name
   * @param  {String} eventName - The name of the event to trigger
   * @param  {Object} event - The event (which can contain any data you want)
   * @return {void}
   */
  trigger(eventName, event = {}) {
    if (this.eventListeners[eventName]) {
      this.eventListeners[eventName].forEach( cb => {
        cb(event);
      });
    }
  }

  /**
   * Register an event listener
   * @param  {String} eventName - The name of the event you wish to listen to
   * @param  {Object} event - The event (which can contain any data you want)
   * @return {void}
   */
  on(eventName, cb) {
    if (!this.eventListeners[eventName]) {
      this.eventListeners[eventName] = [];
    }
    this.eventListeners[eventName].push(cb);
  }

  bindEvents(initial = false) {

    let triggerEls;

    if (initial) {
      triggerEls = document.body.querySelectorAll(this.triggerSelector);
    } else {
      triggerEls = this.containerElement.querySelectorAll(this.triggerSelector);
    }

    triggerEls.forEach(el => {
      el.addEventListener('click', e => {
        this.goTo(e.currentTarget.getAttribute('href'));
        e.preventDefault();
      });
    });

    if (this.opts.preload) {
      triggerEls.forEach(el => {
        el.addEventListener('mouseover', e => {
          this.load(e.currentTarget.getAttribute('href'), html => {});
        });
      });
    }
  }

  parseRequest() {

    const request = String(document.location).substr(this.base.length);
    const parts = request.split( '#' );

    return {
      path: parts[0],
      hash: ( parts[1] ? parts[1] : null )
    };
  }

  goTo(path) {

    if (this.ready) {
      window.history.pushState({transitoId: this.id}, '', path);
      this.route();
    }
  }

  route() {

    this.now = Date.now();
    this.newRequest = this.parseRequest();

    if (this.currentRequest.path !== this.newRequest.path) {

      this.trigger('preload', {
        currentPath: this.currentRequest.path,
        newPath: this.newRequest.path
      });

      this.ready = false;

      document.body.classList.add(this.opts.classLoading);

      this.load(this.newRequest.path, html => {

        this.trigger('receivedresponse', {
            response: html,
            currentPath: this.currentRequest.path,
            newPath: this.newRequest.path
        });

        Promise.all(this.promises).then(() => {

          this.then = Date.now();
          this.duration = ( this.then - this.now );

          this.oldRequest = this.currentRequest;
          this.currentRequest = this.newRequest;

          setTimeout(() => {

              this.swapHtml(html);
              requestAnimationFrame(() => {
                  document.body.classList.remove(this.opts.classLoading);
              });

              this.ready = true;

          }, Math.max(0, this.opts.minDuration - this.duration));
        });
      });

    } else if (this.currentRequest.hash !== this.newRequest.hash) {

      this.ready = false;

      // @TODO scroll to hash
    }
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
      if( req.readyState == 4 && req.status == 200 ) {
        if (this.opts.cache) {
          this.cached[path] = req.responseText;
        }
        cb(req.responseText);
      }
    };

    req.open( 'GET', path, true );
    req.send( null );
  }

  swapHtml(htmlString) {

    const title = htmlString.match(/<title[^>]*>([^<]+)<\/title>/);
    if (title) {
      document.title = title[1];
    }

    const body = /<body.*?>([\s\S]*)<\/body>/.exec(htmlString)[1];
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = body;

    let contents;
    if (this.opts.originContainerElementSelector === 'body') {
      contents = tempContainer;
    } else {
      contents = tempContainer.querySelector(this.opts.originContainerElementSelector);
    }

    while (this.containerElement.firstChild) {
      this.containerElement.removeChild(this.containerElement.firstChild);
    }

    while (contents.childNodes.length > 0) {
      this.containerElement.appendChild(contents.childNodes[0]);
    }

    this.bindEvents();

    this.trigger('postload', {
      currentPath: this.currentRequest.path,
      oldPath: this.oldRequest.path,
      response: htmlString
    });
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

export { Transito, PreloadImagesPlugin, BodyClassesPlugin };