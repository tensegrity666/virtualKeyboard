// const textField = document.getElementById('textfield');

// let pressedKey = '';

// const handle = () => {
//   document.body.addEventListener('keydown', event => {
//     pressedKey = event.keyCode;
//     textField.value = pressedKey;
//     console.log(pressedKey);
//   });
// };

// handle();

import { keyboard } from './keyboard.js';

window.addEventListener('DOMContentLoaded', () => {
  keyboard();
});
