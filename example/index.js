"use strict";

import { Transito, PreloadImagesPlugin, BodyClassesPlugin } from '../src/index';

const base = document.querySelector('base').getAttribute('href');

let transito = new Transito(base, 'body', 'a', {
  originContainerElementSelector: '#wrapper'
});

transito.installPlugin(PreloadImagesPlugin);
transito.installPlugin(BodyClassesPlugin);

transito.on('preload', e => {
  console.log(e);
});