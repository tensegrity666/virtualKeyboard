import { textBuffer } from './InputTextMouse.js';
import toggleCase from './ToggleCase.js';

export default function inputTextKeyboard() {
  const textfield = document.getElementById('textfield');
  const capsLock = document.querySelector('.caps');
  const letters = document.querySelectorAll('.keyboard__key_letter');

  window.addEventListener('keydown', (event) => {
    event.preventDefault();

    switch (event.key) {
      case 'Shift':
        capsLock.classList.add('caps_on');
        toggleCase(letters);
        break;

      case 'CapsLock':
        capsLock.classList.toggle('caps_on');
        capsLock.classList.toggle('keyboard__key_caps');
        toggleCase(letters);
        break;

      case 'Enter':
        textBuffer.push('\n');
        break;

      case 'Tab':
        textBuffer.push('    ');
        break;

      case 'Backspace':
        textfield.innerHTML = textfield.innerHTML.substring(0, textfield.innerHTML.length - 1);
        textBuffer.splice(textBuffer.length - 1, 1);
        break;

      case 'Alt':
        break;

      case 'Control':
        break;

      case 'Meta':
        break;

      default:
        textBuffer.push(event.key);
        textfield.innerHTML = textBuffer.join('');
        break;
    }
  });

  // window.addEventListener('keyup', (event) => {
  //   switch (event.key) {
  //     default:
  //       capsLock.classList.remove('caps_on');
  //       toggleCase(letters);
  //       break;
  //   }
  // });
}
