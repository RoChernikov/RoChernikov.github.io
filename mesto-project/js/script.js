//---+++++Глобальные переменные+++++---
//профиль
const profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileAbout = profile.querySelector('.profile__about');
//Pop-Up редактирования профиля
const popupEdit = document.querySelector('.popup-edit');
const popupEditInputName = popupEdit.querySelector('.form__input_type_name');
const popupEditInputAbout = popupEdit.querySelector('.form__input_type_about');
const popupEditForm = popupEdit.querySelector('.form');
//Pop-Up добавления карточки
const popupAdd = document.querySelector('.popup-add');
const popupAddForm = popupAdd.querySelector('.form');
const popupAddInputImgTitle = popupAdd.querySelector(
  '.form__input_type_img-title'
);
const popupAddInputImgLink = popupAdd.querySelector(
  '.form__input_type_img-link'
);
//Добавление карточек

//Pop-Up c фотографией
const popupPhoto = document.querySelector('.popup-photo');
const popupPhotoImage = popupPhoto.querySelector('.popup-photo__image');
const popupPhotoFigcaption = popupPhoto.querySelector(
  '.popup-photo__figcaption'
);
//Функция накладывает слушатель событий на кнопки закрытия всех Pop-Up-ов
function setEventListener() {
  const popupCloseBtns = document
    .querySelectorAll('.popup__close-btn')
    .forEach((item) => {
      item.addEventListener('click', (evt) => closePopup(evt));
    });
}
setEventListener();

//Кнопка "редактировать"
document.querySelector('.page-btn_type_edit').addEventListener('click', () => {
  openPopup(popupEdit);
  popupEditInputName.value = profileName.textContent;
  popupEditInputAbout.value = profileAbout.textContent;
});

//Функцианал редактирования профиля
popupEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = popupEditInputName.value;
  profileAbout.textContent = popupEditInputAbout.value;
  closePopup(evt);
});

//Кнопка "добавить"
document
  .querySelector('.page-btn_type_add')
  .addEventListener('click', () => openPopup(popupAdd));

// function openPopup(popupName, data) {
//   if (data) {
//     popupName.querySelector('.popup-photo__image').src = `${data.link}`;
//     popupName.querySelector(
//       '.popup-photo__figcaption'
//     ).textContent = `${data.name}`;
//   }
//   popupName.classList.add('popup_opened');
// }
//---+++++Открытие Pop-Up-ов+++++---
function openPopup(popupName) {
  popupName.classList.add('popup_opened');
}

function openImagePopup(data) {
  popupPhoto.querySelector('.popup-photo__image').src = `${data.link}`;
  popupPhoto.querySelector(
    '.popup-photo__figcaption'
  ).textContent = `${data.name}`;
  openPopup(popupPhoto);
}

//---+++++Закрытие Pop-Up-ов+++++---
function closePopup(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
}

//Функцианал добавления карточки
popupAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const data = {
    name: popupAddInputImgTitle.value,
    link: popupAddInputImgLink.value,
  };
  console.log(initialCards.length);
  popupAddForm.reset();
  addCard(data);
  closePopup(evt);
});

//Функция создания карточки
function createCard(data) {
  const cardTemplate = document.querySelector('#card-template').content;
  const card = cardTemplate.querySelector('.cards__item').cloneNode(true);
  card.querySelector('.cards__image').src = `${data.link}`;
  card.querySelector('.cards__heading').textContent = `${data.name}`;
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
    .addEventListener('click', () => openImagePopup(data));
  return card;
}

//Функция добавления карточки
function addCard(data) {
  const cardsList = document.querySelector('.cards__list');
  cardsList.prepend(createCard(data));
}

//---+++++Заполняем страницу дефолтными карточками+++++---
function generateInitialCards(defaultCardsArray) {
  defaultCardsArray.forEach((data) => {
    addCard(data);
  });
}

generateInitialCards(initialCards);
