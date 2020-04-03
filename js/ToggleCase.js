export default function toggleCase(letters) {
  const capsLock = document.querySelector('.caps');

  if (capsLock.classList.contains('caps_on')) {
    letters.forEach((element) => {
      element.innerText = element.innerText.toUpperCase();
    });
  } else {
    letters.forEach((element) => {
      element.innerText = element.innerText.toLowerCase();
    });
  }
}
