"use strict";

const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');

document.querySelector('.page-btn_type_edit').addEventListener('click', popupOpenClose);
document.querySelector('.popup__close-btn').addEventListener('click', popupOpenClose);

function popupOpenClose() {
  popup.classList.toggle('popup_opened');
  popupContainer.classList.toggle('popup__container_opened');
}


const likeBtn = document.querySelector('.cards__like-btn');
document.querySelector('.cards__like-btn last-child').addEventListener('click', switchLike);
function switchLike() {
  likeBtn.classList.toggle('cards__like-btn_active');
  console.log('Click');
}




