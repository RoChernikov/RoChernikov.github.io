// --+++Переменные для скролла по нажатию кнопки в шапке+++--
const detailsBtn = document.querySelector('.button_place_header');
const detailsInfo = document.querySelector('.title_place_about');
// -----------------------------------------------------------------

// --+++Функция скролла по нажатию кнопки в шапке+++--
detailsBtn.onclick = () => detailsInfo.scrollIntoView({
  block: "start",
  behavior: "smooth"
});
// -----------------------------------------------------------------

// --+++Инициализация Swiper JS для слайдера с карточками+++--
const textCardsSlider = new Swiper('.slider-cards', {
  // Параметры
  wrapperClass: 'slider-cards__wrapper',
  slideClass: 'slider-cards__item',
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,

  // Пагинация
  pagination: {
    el: '.slider-cards__pagination',
    bulletClass: 'slider-cards__bullet',
    bulletActiveClass: 'slider-cards__bullet_active',
    clickable: false,
  },
});
// -----------------------------------------------------------------

// --+++Инициализация Swiper JS для слайдера с картинками+++--
const imageCardsSlider = new Swiper('.slider-img', {
  // Параметры
  wrapperClass: 'slider-img__wrapper',
  slideClass: 'slider-img__item',
  direction: 'horizontal',
  loop: false,
  spaceBetween: 60,

  // Пагинация
  pagination: {
    el: '.slider-img__pagination',
    bulletClass: 'slider-img__bullet',
    bulletActiveClass: 'slider-img__bullet_active',
    clickable: false,
  },
});
// -----------------------------------------------------------------

// --+++Функция создания картинки+++--
function createImg(data) {
  const template = document.querySelector('#img-template').content;
  const img = template.querySelector('.about__img-item').cloneNode(true);
  img.querySelector('.about__img').src = `${data.link}`;
  img.querySelector('.about__img').alt = `${data.alt}`;
  return img;
}
// --+++Функция добавления картинки+++--
const addImg = (data) => document.querySelector('.about__img-list').append(createImg(data));
// -----------------------------------------------------------------

// --+++Функция создания картинки (слайдер)+++--
function createImgSlider(data) {
  const template = document.querySelector('#img-template-slider').content;
  const img = template.querySelector('.slider-img__item').cloneNode(true);
  img.querySelector('.slider-img__image').src = `${data.link}`;
  img.querySelector('.slider-img__image').alt = `${data.alt}`;
  return img;
}
// --+++Функция добавления картинки (слайдер)+++--
const addImgSlider = (data) => document.querySelector('.slider-img__wrapper').append(createImgSlider(data));
// -----------------------------------------------------------------

// --+++Функция создания карточки с текстом+++--
function createTextCard(data) {
  const template = document.querySelector('#text-card-template').content;
  const card = template.querySelector('.cards__item').cloneNode(true);
  card.querySelector('.cards__tag').textContent = `${data.tag}`;
  card.querySelector('.title').textContent = `${data.title}`;
  card.querySelector('.cards__content').textContent = `${data.content}`;
  return card;
}
// --+++Функция добавления карточки с текстом+++--
const addTextCard = (data) => document.querySelector('.text-cards').append(createTextCard(data));
// -----------------------------------------------------------------

// --+++Функция добавления карточки с текстом (about)+++--
const addTextCardAbout = (data) => document.querySelector('.cards-about').append(createTextCard(data));
// -----------------------------------------------------------------

// --+++Функция создания карточки с текстом (слайдер)+++--
function createTextCardSlider(data) {
  const template = document.querySelector('#text-card-slider-template').content;
  const card = template.querySelector('.slider-cards__item').cloneNode(true);
  card.querySelector('.slider-cards__tag').textContent = `${data.tag}`;
  card.querySelector('.title').textContent = `${data.title}`;
  card.querySelector('.slider-cards__content').textContent = `${data.content}`;
  return card;
}
// --+++Функция добавления карточки с текстом (слайдер)+++--
const addTextCardSlider = (data) => document.querySelector('.slider-top').append(createTextCardSlider(data));
// -----------------------------------------------------------------

// --+++Функция добавления карточки с текстом (слайдер) (about)+++--
const addTextCardAboutSlider = (data) => document.querySelector('.slider-about').append(createTextCardSlider(data));
// -----------------------------------------------------------------

//---+++Заполняем страницу дефолтными карточками+++---
function generateInitialCards(imgCards, textCards, textCardsAbout) {
  imgCards.forEach((data) => {
    addImg(data);
  });
  imgCards.forEach((data) => {
    addImgSlider(data);
  });
  textCards.forEach((data) => {
    addTextCard(data);
  });
  textCardsAbout.forEach((data) => {
    addTextCardAbout(data);
  });
  textCards.forEach((data) => {
    addTextCardSlider(data);
  });
  textCardsAbout.forEach((data) => {
    addTextCardAboutSlider(data);
  });
}

generateInitialCards(imgCards, textCards, textCardsAbout);
// -----------------------------------------------------------------