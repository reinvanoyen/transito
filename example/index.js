"use strict";

import { Transito, PreloadImagesPlugin, BodyClassesPlugin } from '../src/index';

const base = document.querySelector('base').getAttribute('href');

// main
let transito = new Transito(base, '#wrapper, #top', 'a');

transito.installPlugin(PreloadImagesPlugin);
transito.installPlugin(BodyClassesPlugin);

transito.on('preload', e => {
  console.log(e);
});

transito.on('postload', e => {
  console.log(e);
});