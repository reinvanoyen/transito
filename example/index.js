"use strict";

import { Transito, PreloadImagesPlugin } from '../src/index';

const base = document.querySelector('base').getAttribute('href');

Transito.install(base, 'body', 'a');
Transito.installPlugin(PreloadImagesPlugin);

Transito.on('preload', e => {
  console.log(e);
});

Transito.on('postload', e => {

  const classes = e.response.match(/body\sclass=['|"]([^'|"]*)['|"]/);

  if( classes ) {
    console.log( classes );
  }
});