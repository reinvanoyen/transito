"use strict";

import Transito from '../src/index';

const base = document.querySelector('base').getAttribute('href');

Transito.install(base, 'body', 'a');

Transito.on('preload', e => {
  console.log(e);
});

Transito.on('postload', e => {
  console.log(e);
});