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

  const savedString = localStorage.buffer.split(',');
  savedString.forEach((el) => textBuffer.push(el));
  localStorage.text = textBuffer.join('');
  textfield.innerHTML = localStorage.text;
}
