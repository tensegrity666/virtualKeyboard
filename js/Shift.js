import toggleCase from './ToggleCase.js';

export default function shift() {
  let isShift = false;
  let isRussian = false;

  const capsLock = document.querySelector('.caps');
  const shiftButton = document.querySelectorAll('.shift');
  const letters = document.querySelectorAll('.keyboard__key_letter');

  shiftButton.forEach((element) => {
    element.addEventListener('mousedown', () => {
      isShift = true;
      capsLock.classList.add('caps_on');
      toggleCase(letters);
    });

    element.addEventListener('mouseup', () => {
      isShift = false;
      capsLock.classList.remove('caps_on');
      toggleCase(letters);
    });
  });

  // document.body.addEventListener('click', event => {
  //   if (event.target.classList.contains('shift')) {
  //     isShift = 3;
  //     console.log("KEKE", isShift);
  //   }
  // });

  // if (isRussian) {
  //   isShift ? keyLayout = keyShiftLayoutRussian : keyLayout = keyLayoutRussian;
  // }


  // if (!isShift) {
  //   keyLayout = keyShiftLayoutRussian;
  // } else {
  //   keyLayout = keyLayoutDefault;
  // }
}
