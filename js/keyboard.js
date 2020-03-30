// const textField = document.getElementById('textfield');

// const setValue = (value) => {
//   if (value !== undefined) {
//     textField.setAttribute('value', `${value}`);
//   }
//   else {
//     textField.setAttribute('value', '');
//   }
// };


export const createFragment = () => {
  const fragment = document.createDocumentFragment();

  const keyLayout = [
    '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'ShiftL', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ', ', '.', '/', ',', 'ShiftR',
    'Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl',
  ];

  keyLayout.forEach((key) => {
    const button = document.createElement('button');
    button.textContent = key.toLowerCase();
    button.setAttribute('type', 'button');
    button.classList.add('keyboard__key');
    // switch(key) {
    //   case 'Backspace':
    //     button.classList.add('keyboard__key_backspace');
    //     button.innerText = 'Backspace';
    //   break;

    //   default:
    //     button.innerText = key.toLowerCase();
    //   break;
    // }
    fragment.append(button);
  });

  return fragment;
};

export const keyboardInit = () => {
  const page = document.querySelector('body');

  const wrapper = document.createElement('div');
  page.append(wrapper);
  wrapper.classList.add('wrapper');

  const textField = document.createElement('input');
  wrapper.append(textField);
  textField.setAttribute('id', 'textfield');
  textField.setAttribute('type', 'text');
  textField.setAttribute('value', 'rtrtr');

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
