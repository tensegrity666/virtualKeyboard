import { textBuffer } from './InputTextMouse.js';
import toggleCase from './ToggleCase.js';
// import clearLocalStorage from './ClearLocalStorage.js';

export default function inputTextKeyboard() {
  const textfield = document.getElementById('textfield');
  const capsLock = document.querySelector('.caps');
  const letters = document.querySelectorAll('.keyboard__key_letter');

  window.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'Shift':
        if (event.getModifierState('CapsLock')) {
          break;
        }
        capsLock.classList.add('caps_on');
        toggleCase(letters);
        break;

      case 'CapsLock':
        if (event.getModifierState('CapsLock')) {
          capsLock.classList.remove('caps_on');
          capsLock.classList.remove('keyboard__key_caps');
          toggleCase(letters);
          localStorage.capsLock = capsLock.className;
          break;
        } else {
          capsLock.classList.add('caps_on');
          capsLock.classList.add('keyboard__key_caps');
          toggleCase(letters);
          localStorage.capsLock = capsLock.className;
          break;
        }

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
        if (localStorage.language === 'en') {
          localStorage.language = 'rus';
        } else {
          localStorage.language = 'en';
        }
        window.location.reload();
        break;

      case 'F5':
        break;

      default:
        textBuffer.push(event.key);
        localStorage.text = textBuffer.join('');
        textfield.value = localStorage.text;
        break;
    }
    localStorage.text = textBuffer.join('');
  });

  window.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'Shift':
        if (event.getModifierState('CapsLock')) {
          break;
        } else {
          capsLock.classList.remove('caps_on');
          toggleCase(letters);
        }
        break;
    }
  });
}
