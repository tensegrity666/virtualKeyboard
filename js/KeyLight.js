export default function keyLight() {
  const key = document.body.querySelectorAll('.keyboard__key');
  window.addEventListener('keydown', (event) => {
    event.preventDefault();

    key.forEach((element) => {
      if (element.innerHTML === 'Ctrl' && event.key === 'Control') {
        element.classList.add('keyboard__key_press');
      } else if (element.innerHTML === event.key) {
        element.classList.add('keyboard__key_press');
      }
    });
  });

  window.addEventListener('keyup', () => {
    key.forEach((element) => {
      element.classList.remove('keyboard__key_press');
    });
  });
}
