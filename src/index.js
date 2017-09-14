"use strict";

/**
 * @module transito
 * @author Rein Van Oyen
 */

const Transito = {
  opts: {
    preload: true,
    cache: true,
    minDuration: 800,
    classLoading: 'loading'
  },
  cached: {},
  eventListeners: {},

  /**
   * Enable transito
   * @param  {String} base - The base url
   * @param  {String} containerElementSelector - The selector to find the element in which to replace the content to (and from)
   * @param  {String} triggerSelector - The selector to find the elements on which to click to trigger a page transition
   * @param  {Object} opts - An object with the options and their values
   * @return {void}
   */
  install(base, containerElementSelector, triggerSelector = 'a', opts = {}) {

    Transito.base = base;
    Transito.containerElementSelector = containerElementSelector;
    Transito.triggerSelector = triggerSelector;
    Transito.opts = Object.assign(Transito.opts, opts);

    Transito.currentRequest = Transito.parseRequest();
    Transito.newRequest = null;
    Transito.oldRequest = null;
    Transito.containerElement = document.querySelector(Transito.containerElementSelector);

    Transito.ready = true;

    Transito.bindEvents(true);

    window.onpopstate = e => {
      Transito.route();
    };
  },

  /**
   * Trigger an internal event by name
   * @param  {String} eventName - The name of the event to trigger
   * @param  {Object} event - The event (which can contain any data you want)
   * @return {void}
   */
  trigger(eventName, event = {}) {
    if (Transito.eventListeners[eventName]) {
      Transito.eventListeners[eventName].forEach( cb => {
        cb(event);
      });
    }
  },

  /**
   * Register an event listener
   * @param  {String} eventName - The name of the event you wish to listen to
   * @param  {Object} event - The event (which can contain any data you want)
   * @return {void}
   */
  on(eventName, cb) {
    if (!Transito.eventListeners[eventName]) {
      Transito.eventListeners[eventName] = [];
    }
    Transito.eventListeners[eventName].push(cb);
  },
  bindEvents(initial = false) {

    let triggerEls;

    if (initial) {
      triggerEls = document.body.querySelectorAll(Transito.triggerSelector);
    } else {
      triggerEls = Transito.containerElement.querySelectorAll(Transito.triggerSelector);
    }

    triggerEls.forEach(el => {
      el.addEventListener('click', e => {
        Transito.goTo(e.currentTarget.getAttribute('href'));
        e.preventDefault();
      });
    });

    if (Transito.opts.preload) {
      triggerEls.forEach(el => {
        el.addEventListener('mouseover', e => {
          Transito.load(e.currentTarget.getAttribute('href'), html => {});
        });
      });
    }
  },
  parseRequest() {

    const request = String(document.location).substr(Transito.base.length);
    const parts = request.split( '#' );

    return {
      path: parts[0],
      hash: ( parts[1] ? parts[1] : null )
    };
  },
  goTo(path) {

    if (Transito.ready) {
      window.history.pushState(true, null, path);
      Transito.route();
    }
  },
  route() {

    Transito.now = Date.now();
    Transito.newRequest = Transito.parseRequest();

    if (Transito.currentRequest.path !== Transito.newRequest.path) {

      Transito.trigger('preload', {
        currentPath: Transito.currentRequest.path,
        newPath: Transito.newRequest.path
      });

      Transito.ready = false;

      document.body.classList.add(Transito.opts.classLoading);

      Transito.load(Transito.newRequest.path, html => {

        Transito.then = Date.now();
        Transito.duration = ( Transito.then - Transito.now );

        Transito.oldRequest = Transito.currentRequest;
        Transito.currentRequest = Transito.newRequest;

        setTimeout(() => {

          Transito.swapHtml(html);
          document.body.classList.remove(Transito.opts.classLoading);

          Transito.ready = true;

        }, Math.max(0, Transito.opts.minDuration - Transito.duration));
      });

    } else if (Transito.currentRequest.hash !== Transito.newRequest.hash) {

      Transito.ready = false;

      // @TODO scroll to hash
    }
  },
  load(path, cb) {

    if (Transito.opts.cache && Transito.cached[path]) {
      cb(Transito.cached[path]);
      return;
    }

    const req = new XMLHttpRequest();

    req.onprogress = e => {
      Transito.trigger('progress', {
        loaded: e.loaded,
        total: e.total
      });
    };

    req.onreadystatechange = () => {
      if( req.readyState == 4 && req.status == 200 ) {
        if (Transito.opts.cache) {
          Transito.cached[path] = req.responseText;
        }
        cb(req.responseText);
      }
    };

    req.open( 'GET', path, true );
    req.send( null );
  },
  swapHtml(htmlString) {

    const body = /<body.*?>([\s\S]*)<\/body>/.exec(htmlString)[1];
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = body;

    let contents;
    if (Transito.containerElementSelector === 'body') {
      contents = tempContainer;
    } else {
      contents = tempContainer.querySelector(Transito.containerElementSelector);
    }

    while (Transito.containerElement.firstChild) {
      Transito.containerElement.removeChild(Transito.containerElement.firstChild);
    }

    while (contents.childNodes.length > 0) {
      Transito.containerElement.appendChild(contents.childNodes[0]);
    }

    Transito.bindEvents();

    Transito.trigger('postload', {
      currentPath: Transito.currentRequest.path,
      oldPath: Transito.oldRequest.path,
      response: htmlString
    });
  }
};

export default Transito;