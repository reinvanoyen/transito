"use strict";

import { Transito, PreloadImagesPlugin, BodyClassesPlugin } from '../dist/transito.bundle';

const base = document.querySelector('base').getAttribute('href');

// main
let transito = new Transito(base, '#wrapper, #header', 'a:not(.open-tab)', {
    minDuration: 3000,
    tabTriggerSelector: '.open-tab',
    tabElementSelector: '.tab',
    tabContainerElementSelector: '.tabs'
});

transito.installPlugin(PreloadImagesPlugin);
transito.installPlugin(BodyClassesPlugin);

transito.on('init', e => {
    console.log('init', e);
});

transito.on('postload', e => {
    
    if (e.tab) {
        let el = e.element;
        
        if (el.classList.contains('tab-1')) {
            transito.closeTabsExcept(e.currentPath);
        } else {
            // Close nothing
        }
    } else {
        console.log('yes');
        transito.closeTabs();
    }
});

transito.on('preload', e => {
    console.log('preload!', e);
    //transito.closeTabs();
});

console.log('change!!');