import toggleCase from './ToggleCase.js';

export default function shift() {
  const capsLock = document.querySelector('.caps');
  const shiftButton = document.querySelectorAll('.shift');
  const letters = document.querySelectorAll('.keyboard__key_letter');

  shiftButton.forEach((element) => {
    element.addEventListener('mousedown', () => {
      capsLock.classList.add('caps_on');
      toggleCase(letters);
    });

    element.addEventListener('mouseup', () => {
      capsLock.classList.remove('caps_on');
      toggleCase(letters);
    });
  });
}
