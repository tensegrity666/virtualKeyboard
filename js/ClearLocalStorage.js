export default function clearLocalStorage() {
  window.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.key === 'F5') {
      console.log('key was pressed ' + event.code);
      localStorage.clear();
      window.location.reload();
    }
  });
}
