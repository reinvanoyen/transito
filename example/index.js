"use strict";

import { Transito, PreloadImagesPlugin, BodyClassesPlugin } from '../dist/transito.bundle';

const base = document.querySelector('base').getAttribute('href');

// main
let transito = new Transito(base, '#wrapper', 'a:not(.open-tab)', {
    minDuration: 3000,
    includeElementsInEvent: '#header',
    tabTriggerSelector: '.open-tab',
    tabElementSelector: '.tab',
    tabContainerElementSelector: '.tabs'
});

transito.installPlugin(PreloadImagesPlugin);
transito.installPlugin(BodyClassesPlugin);

transito.on('init', e => {
    //console.log('init', e);
});

transito.on('postload', e => {
    
    if (e.includedElements && e.includedElements.length) {
                
        let header = document.querySelector('#header');
        if (header) {
            let parent = header.parentNode;
            parent.replaceChild(e.includedElements[0], header);
        }
    }
    
    if (e.tab) {
        let el = e.element;
        
        if (el.classList.contains('tab-1')) {
            transito.closeTabsExcept(e.currentPath);
        } else {
            // Close nothing
        }
    } else {
        transito.closeTabs();
    }
});

transito.on('preload', e => {
    //console.log('preload!', e);
    //transito.closeTabs();
});