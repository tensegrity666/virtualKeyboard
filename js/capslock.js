export const capslock = () => {
  const letters = document.querySelectorAll('.keyboard__key_letter');

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('shift')) {
      letters.forEach((element) => {
        element.classList.toggle('keyboard__key_upper');
      });
    }
  });

}
