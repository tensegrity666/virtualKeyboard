const setValue = value => {
  const textField = document.getElementById('textfield');
  textField.setAttribute('value', `${value}`);
}

const keyboardInit = () => {
  const page = document.querySelector('body');
  const container = document.createElement('div');
  page.append(container);
  container.classList.add('keyboard__container', 'keyboard__container_hide');
}

const createFragment = () => {
  const fragment = document.createDocumentFragment();
  const keyLayout = [
    '~','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
    'Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\',
    'CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter',
    'Shift','z','x','c','v','b','n','m','\,','\.','\/','\,','Shift',
    'Ctrl','Alt', 'Space', 'Alt', 'Ctrl',
  ];

  keyLayout.forEach(key => {
    const button = document.createElement('button');
    // const lineBreak =

    button.setAttribute('type', 'button');
    button.classList.add('keyboard__key');

    switch(key) {
      case 'Backspace':
        button.classList.add('keyboard__key_backspace');
        button.innerText = 'Backspace';
    }
  });
  console.log(keyLayout);
}

export const keyboard = () => {
  keyboardInit();
  createFragment();
  setValue(11);
  console.log();
};
