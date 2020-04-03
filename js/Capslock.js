import toggleCase from './ToggleCase.js';

export default function capslock() {
  const letters = document.querySelectorAll('.keyboard__key_letter');
  const capsLock = document.querySelector('.caps');
  capsLock.addEventListener('click', () => {
    // event.getModifierState('CapsLock');
    capsLock.classList.toggle('caps_on');
    capsLock.classList.toggle('keyboard__key_active');

    toggleCase(letters);

    localStorage.capsLock = capsLock.className;
  });
}
