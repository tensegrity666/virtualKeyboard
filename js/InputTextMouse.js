export const textBuffer = [];

export default function inputTextMouse() {
  const textfield = document.getElementById('textfield');

  document.body.addEventListener('click', (event) => {
    event.preventDefault();

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
    if (event.target.classList.contains('tab')) {
      textBuffer.push('    ');
    }
    if (event.target.classList.contains('backspace')) {
      textBuffer.splice(textBuffer.length - 1, 1);
    }
    localStorage.text = textBuffer.join('');
    textfield.innerHTML = localStorage.text;
  });

}
