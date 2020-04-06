export default function textRender(textBuffer, textfield) {
  localStorage.buffer = textBuffer;
  localStorage.text = textBuffer.join('');
  textfield.innerHTML = localStorage.text;
}
