export default function capslock() {
  const letters = document.querySelectorAll('.keyboard__key_letter');

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('caps')) {
      // event.getModifierState('CapsLock');
      event.target.classList.toggle('caps_on');
      if (event.target.classList.contains('caps_on')) {
        letters.forEach((element) => {
          element.innerText = element.innerText.toUpperCase();
        });
      } else {
        letters.forEach((element) => {
          element.innerText = element.innerText.toLowerCase();
        });
      }
    }
  });
}
