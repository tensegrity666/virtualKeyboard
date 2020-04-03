export default function setState() {
  const isCapsOn = document.querySelector('.caps');
  const letters = document.querySelectorAll('.keyboard__key_letter');
  if (isCapsOn.classList.contains('caps_on')) {
    letters.forEach((element) => {
      element.innerText = element.innerText.toUpperCase();
    });
  }
}
