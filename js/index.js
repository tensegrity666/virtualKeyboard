import { createFragment, keyboardInit, tr } from './keyboard.js';
import capslock from './capslock.js';
import inputTextMouse from './inputTextMouse.js';

window.addEventListener('DOMContentLoaded', () => {
  keyboardInit();
  createFragment();
  capslock();
  inputTextMouse();
});
