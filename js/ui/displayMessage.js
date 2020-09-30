export function displayMessage(messageType, message, target) {
  const element = document.querySelector(target);
  element.innerHTML = `<div class="notification ${messageType}">${message}</div>`;
}
