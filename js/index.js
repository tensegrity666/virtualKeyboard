import keyboardInit from './Keyboard.js';
import capslock from './Capslock.js';
import inputTextMouse from './InputTextMouse.js';
import inputTextKeyboard from './InputTextKeyboard.js';
import setState from './SetState.js';
import shift from './Shift.js';
import keyLight from './KeyLight.js';
import clearLocalStorage from './ClearLocalStorage.js';

window.addEventListener('DOMContentLoaded', () => {
  keyboardInit();
  capslock();
  setState();
  inputTextMouse();
  inputTextKeyboard();
  shift();
  keyLight();
  clearLocalStorage();
});
