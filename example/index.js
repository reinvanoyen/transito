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

//transito.on('preload', e => console.log(e));
transito.on('preload', e => {
    transito.closeTabs();
});

console.log('change!!');