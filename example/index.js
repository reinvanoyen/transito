"use strict";

import { Transito, PreloadImagesPlugin, BodyClassesPlugin } from '../src/index';

const base = document.querySelector('base').getAttribute('href');

// popup
let transito2 = new Transito(base, '#popup', 'a.popup', {
	originContainerElementSelector: '#content',
	affectHistory: false
});

transito2.installPlugin(PreloadImagesPlugin);
transito2.installPlugin(BodyClassesPlugin);

transito2.on('preload', e => {
	console.log(e);
});

// main
let transito = new Transito(base, '#wrapper', 'a:not(.popup)');

transito.installPlugin(PreloadImagesPlugin);
transito.installPlugin(BodyClassesPlugin);

transito.on('preload', e => {
  console.log(e);
});

transito.on('postload', e => {
  transito2.bindEvents(true);
  document.getElementById('popup').innerHTML = '';
});