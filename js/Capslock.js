import toggleCase from './ToggleCase.js';

export default function capslock() {
  const letters = document.querySelectorAll('.keyboard__key_letter');
  const capsLock = document.querySelector('.caps');
  capsLock.addEventListener('click', () => {
    capsLock.classList.toggle('caps_on');
    capsLock.classList.toggle('keyboard__key_caps');
    toggleCase(letters);

    localStorage.capsLock = capsLock.className;
  });
}
