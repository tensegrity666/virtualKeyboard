export default function clearLocalStorage() {
  window.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.key === 'F5') {
      localStorage.clear();
      window.location.reload();
    }
  });
}
