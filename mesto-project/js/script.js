//---+++++Глобальные переменные+++++---
//профиль
const profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileAbout = profile.querySelector('.profile__about');
//Pop-Up редактирования профиля
const popupEdit = document.querySelector('.popup-edit');
const popupEditInputs = popupEdit.querySelectorAll('.form__input');
const popupEditForm = popupEdit.querySelector('.form');
//Pop-Up добавления карточки
const popupAdd = document.querySelector('.popup-add');
const popupAddForm = popupAdd.querySelector('.form');
const popupAddInputs = popupAdd.querySelectorAll('.form__input');
//Добавление карточек

//Pop-Up c фотографией
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoImage = popupPhoto.querySelector('.popup-photo__image');
const popupPhotoFigcaption = popupPhoto.querySelector(
  '.popup-photo__figcaption'
);
//Функция накладывает слушатель событий на кнопки закрытия всех Pop-Up-ов
function setEventListener() {
  const popupCloseBtns = document.querySelectorAll('.popup__close-btn');
  for (let i = 0; i <= popupCloseBtns.length - 1; i++) {
    popupCloseBtns[i].addEventListener('click', (evt) => closePopup(evt));
  }
}
setEventListener();

//Кнопка "редактировать"
document.querySelector('.page-btn_type_edit').addEventListener('click', () => {
  openPopup(popupEdit);
  popupEditInputs[0].value = profileName.textContent;
  popupEditInputs[1].value = profileAbout.textContent;
});

//Функцианал редактирования профиля
popupEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = popupEditInputs[0].value;
  profileAbout.textContent = popupEditInputs[1].value;
  closePopup(evt);
});

//Кнопка "добавить"
document
  .querySelector('.page-btn_type_add')
  .addEventListener('click', () => openPopup(popupAdd));

//---+++++Открытие Pop-Up-ов+++++---
function openPopup(popupName, data) {
  if (data) {
    popupName.querySelector('.popup-photo__image').src = `${data.link}`;
    popupName.querySelector(
      '.popup-photo__figcaption'
    ).textContent = `${data.name}`;
  }
  popupName.classList.add('popup_opened');
}

//---+++++Закрытие Pop-Up-ов+++++---
function closePopup(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
}

//Функцианал добавления карточки
popupAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const data = { name: popupAddInputs[0].value, link: popupAddInputs[1].value };
  console.log(initialCards.length);
  popupAddInputs[0].value = '';
  popupAddInputs[1].value = '';
  addCard(data);
  closePopup(evt);
});

function addCard(data) {
  const cardsList = document.querySelector('.cards__list');
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.cards__item').cloneNode(true);
  card.querySelector('.cards__image').src = `${data.link}`;
  card.querySelector('.cards__heading').textContent = `${data.name}`;
  cardsList.append(card);
  card
    .querySelector('.cards__like-btn')
    .addEventListener('click', (evt) =>
      evt.target.classList.toggle('cards__like-btn_active')
    );
  card
    .querySelector('.cards__trash-btn')
    .addEventListener('click', (evt) =>
      evt.target.closest('.cards__item').remove()
    );
  card
    .querySelector('.cards__image')
    .addEventListener('click', () => openPopup(popupPhoto, data));
}

//---+++++Заполняем страницу дефолтными карточками+++++---
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1548130516-2ca6aaeb84b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

function generateInitialCards(defaultCardsArray) {
  defaultCardsArray.forEach((data) => {
    addCard(data);
  });
}

generateInitialCards(initialCards);
