import { createFragment, keyboardInit, tr } from './keyboard.js';
import capslock from './capslock.js';

window.addEventListener('DOMContentLoaded', () => {
  keyboardInit();
  tr();
  createFragment();
  capslock();
});
