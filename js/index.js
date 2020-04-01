import { keyboard, keyboardInit } from './keyboard.js';
import { capslock } from './capslock.js';


window.addEventListener('DOMContentLoaded', () => {
  keyboardInit();
  keyboard();
  capslock();
  console.log(localStorage.capslock);
});
