export default function inputTextMouse() {
  const textfield = document.getElementById('textfield');
  const textBuffer = [];

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('keyboard__key_letter')) {
      textBuffer.push(event.target.innerText);
    }
    if (event.target.classList.contains('keyboard__key_space')) {
      textBuffer.push(' ');
    }
    if (event.target.classList.contains('enter')) {
      textBuffer.push('\n');
      textfield.innerHTML = ('br');
    }
    textfield.innerHTML = textBuffer.join('');
  });
}
