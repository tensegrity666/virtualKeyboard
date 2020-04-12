import { keyLayoutDefault, keyShiftLayoutRussian, functionalKeys } from './Helper.js';
import { textBuffer } from './InputTextMouse.js';
import toggleCase from './ToggleCase.js';
import textRender from './TextRender.js';

export default function inputTextKeyboard() {
  const textfield = document.getElementById('textfield');
  const capsLock = document.querySelector('.caps');
  const letters = document.querySelectorAll('.keyboard__key_letter');
  const buttons = document.querySelectorAll('.keyboard__key');

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

      case '':
        textBuffer.push(' ');
        break;

      case 'Backspace':
        textBuffer.splice(textBuffer.length - 1, 1);
        localStorage.buffer = textBuffer;
        localStorage.text = textBuffer.join('');
        textfield.innerHTML = localStorage.text;
        break;

      case 'ArrowRight':
        textBuffer.push('➡');
        textRender(textBuffer, textfield);
        break;

      case 'ArrowLeft':
        textBuffer.push('⬅');
        textRender(textBuffer, textfield);
        break;

      case 'ArrowUp':
        textBuffer.push('⬆');
        textRender(textBuffer, textfield);
        break;

      case 'ArrowDown':
        textBuffer.push('⬇');
        textRender(textBuffer, textfield);
        break;

      case 'OS' || 'Meta':
        event.preventDefault();
        if (localStorage.language === 'en') {
          localStorage.language = 'rus';
        } else {
          localStorage.language = 'en';
        }
        window.location.reload();
        break;

      case 'F5':
        break;

      case 'Escape':
        break;

      case 'Alt':
        break;

      case 'Control':
        break;

      default:
        if (localStorage.language === 'rus') {
          keyLayoutDefault.forEach((element) => {
            if (element === event.key.toLowerCase()) {
              const index = keyLayoutDefault.indexOf(element);
              textBuffer.push(keyShiftLayoutRussian[index]);
              buttons[index].classList.add('keyboard__key_press');
            }
          });
          if (event.code === 'Space') {
            textBuffer.push(' ');
          }
        } else {
          textBuffer.push(event.key);
        }

        textRender(textBuffer, textfield);
        break;
    }
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

      default:
        letters.forEach((element) => {
          element.classList.remove('keyboard__key_press');
        });
        break;
    }
  });
}
