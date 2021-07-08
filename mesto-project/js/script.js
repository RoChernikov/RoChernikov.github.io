"use strict";
const popup = document.querySelector('.popup');
document.querySelector('.page-btn_type_edit').addEventListener('click', popupOpen);
document.querySelector('.popup__close-btn').addEventListener('click', popupClose);
function popupOpen() {
  popup.classList.toggle('popup_opened');
}
function popupClose() {
  popup.classList.toggle('popup_opened');
}
// const popup = document.querySelector('.popup');
// popup.classList.toggle('popup_opened');


