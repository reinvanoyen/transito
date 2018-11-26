"use strict";

import { Transito, PreloadImagesPlugin, BodyClassesPlugin } from '../src/index';

const base = document.querySelector('base').getAttribute('href');

// main
let transito = new Transito(base, '#wrapper, #header', 'a', {
  minDuration: 3000,
});

// transito.installPlugin(PreloadImagesPlugin);
// transito.installPlugin(BodyClassesPlugin);

transito.on('preload', e => {
  console.log(e);
});

transito.on('postload', e => {
  console.log(e);
});