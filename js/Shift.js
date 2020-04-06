import toggleCase from './ToggleCase.js';

export default function shift() {
  const capsLock = document.querySelector('.caps');
  const shiftButton = document.querySelectorAll('.shift');
  const letters = document.querySelectorAll('.keyboard__key_letter');

  shiftButton.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
      if (!event.getModifierState('CapsLock')) {
        capsLock.classList.add('caps_on');
        toggleCase(letters);
      }
    });

    element.addEventListener('mouseup', (event) => {
      if (!(event.getModifierState('CapsLock')) && !(capsLock.classList.contains('caps_clicked'))) {
        capsLock.classList.remove('caps_on');
        toggleCase(letters);
      }
    });
  });
}
