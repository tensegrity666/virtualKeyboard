import { textBuffer } from './InputTextMouse.js';

export default function setState() {
  const isCapsOn = document.querySelector('.caps');
  const letters = document.querySelectorAll('.keyboard__key_letter');
  const textfield = document.getElementById('textfield');

  if (isCapsOn.classList.contains('caps_on')) {
    letters.forEach((element) => {
      element.innerText = element.innerText.toUpperCase();
    });
  }

  textBuffer.push(localStorage.text);
  textfield.innerHTML = textBuffer.join('');
}
