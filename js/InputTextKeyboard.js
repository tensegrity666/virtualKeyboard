import { textBuffer } from './InputTextMouse.js';

export default function inputTextKeyboard() {
  const textfield = document.getElementById('textfield');

  window.addEventListener('keydown', (event) => {
    event.preventDefault();
    textBuffer.push(event.key);
    textfield.innerHTML = textBuffer.join('');
  });
}
