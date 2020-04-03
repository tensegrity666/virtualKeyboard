import { keyLayoutDefault } from './Helper.js';

export const createFragment = () => {
  const keyLayout = keyLayoutDefault;
  const fragment = document.createDocumentFragment();

  keyLayout.forEach((key) => {
    const button = document.createElement('button');

    button.setAttribute('type', 'button');
    button.classList.add('keyboard__key');

    switch (key) {
      case 'Backspace':
        button.classList.add('keyboard__key_double');
        button.innerHTML = 'Backspace';
        break;

      case 'Enter':
        button.classList.add('keyboard__key_double', 'enter');
        button.innerHTML = 'Enter';
        break;

      case 'Shift':
        button.classList.add('keyboard__key_triple', 'shift');
        button.innerHTML = 'Shift';
        break;

      case 'Tab':
        button.classList.add('keyboard__key_double', 'tab');
        button.innerHTML = 'Tab';
        break;

      case 'CapsLock':
        if (localStorage.capsLock) {
          button.className = localStorage.capsLock;
        } else {
          button.classList.add('keyboard__key_double', 'caps');
        }
        button.innerHTML = 'CapsLock';
        break;

      case 'Space':
        button.classList.add('keyboard__key_space');
        button.innerText = ' ';
        break;

      case 'Alt':
        button.classList.add('alt');
        button.innerHTML = 'Alt';
        break;

      case 'Ctrl':
        button.classList.add('ctrl');
        button.innerHTML = 'Ctrl';
        break;

      default:
        button.innerText = key;
        button.classList.add('keyboard__key_letter');
        break;
    }

    fragment.append(button);
  });

  return fragment;
};

export const keyboardInit = () => {
  const page = document.querySelector('body');

  const wrapper = document.createElement('div');
  page.append(wrapper);
  wrapper.classList.add('wrapper');

  const textField = document.createElement('textarea');
  wrapper.append(textField);
  textField.setAttribute('id', 'textfield');

  const container = document.createElement('div');
  wrapper.append(container);
  container.classList.add('keyboard__container');

  container.append(createFragment());
};

// const keyListen = () => {
//   const value = [];
//   window.addEventListener('keydown', (event) => {
//     event.preventDefault();

//     if (event.code === 'Backspace') {
//       value.pop();
//     } else {
//       value.push(event.key);
//     }

//     const string = value.join('');
//     setValue(string);
//   });
// };
