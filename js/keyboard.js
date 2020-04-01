// const textField = document.getElementById('textfield');

// const setValue = (value) => {
//   if (value !== undefined) {
//     textField.setAttribute('value', `${value}`);
//   }
//   else {
//     textField.setAttribute('value', '');
//   }
// };
import { keyLayoutDefault, keyShiftLayout, keyLayoutRussian, keyShiftLayoutRussian } from './helper.js';


let isShift = false;
let isRussian = false;


// if (isRussian) {
//   isShift ? keyLayout = keyShiftLayoutRussian : keyLayout = keyLayoutRussian;
// }

// if (isShift) {
//   keyLayout = keyShiftLayout;
// } else {
//   keyLayout = keyLayoutDefault;
// }

// document.body.addEventListener('click', event => {
//   if (event.target.classList.contains('shift')) {
//     isShift = 3;
//     console.log("KEKE", isShift);
//   }
// });

let keyLayout = keyLayoutDefault;

export const createFragment = () => {
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
        button.classList.add('keyboard__key_double');
        button.innerHTML = '&#8629 Enter';
        break;

      case 'Shift':
        button.classList.add('keyboard__key_triple', 'shift');
        button.innerHTML = 'Shift';
        break;

      case 'Tab':
        button.classList.add('keyboard__key_double');
        button.innerHTML = 'Tab &#8644';
        break;

      case 'CapsLock':
        button.classList.add('keyboard__key_double');
        button.innerHTML = 'CapsLock';
        button.addEventListener('click', () => {
          button.classList.toggle('keyboard__key_active');
        });
        break;

      case 'Space':
        button.classList.add('keyboard__key_space');
        button.innerHTML = '&#863';
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

export const keyboard = () => {
  createFragment();
  // keyListen();
  // setValue();
};
