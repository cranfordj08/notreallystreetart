const exitButton = document.querySelector('.popup__exit');
const popup = document.querySelector('.popup');

alert('hello');

if(exitButton) {
  exitButton.onclick = closePopup;

  function closePopup() {
    popup.classList.add('popup--closed');
  }
}
