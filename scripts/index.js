const buttonEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__body');


let nameInput = formElement.querySelector('.popup__character_input_name');
let jobInput = formElement.querySelector('.popup__character_input_job')

let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__text');

const itemTemplate = document.querySelector('.template').content;
const list = document.querySelector('.elements');

function openPopup(event) {
  popupEdit.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
};

function popupCloseEvent () {
  closePopup(popupEdit);
};

function popupCloseCard () {
  closePopup(addCardPopup);
};

function popupCloseModal () {
  closePopup(modal);
};


function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupCloseEvent();
};





//загружаемые автоматически картинки
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


 const renderItems = () => {
  initialCards.forEach(renderItem)
 }

 const renderItem = (text) => {
   const elementHTML = itemTemplate.cloneNode(true);
   elementHTML.querySelector('.elements__title').textContent = text.name;
   elementHTML.querySelector('.elements__image').src = text.link; 
   setEventListener(elementHTML);
   list.prepend(elementHTML);
 }
  
 

const addCardBTN = document.querySelector('.profile__add');
const addCardPopup = document.querySelector('.popup_add_Card');


addCardBTN.addEventListener('click', () => {
  addCardPopup.classList.add('popup_opened')
});


const closePopupCard = document.querySelector('.popup__close_card');

closePopupCard.addEventListener('click', () => {
  addCardPopup.classList.remove('popup_opened');
});

let newCardName = document.querySelector('.popup__character_img_name');
let newCardLink = document.querySelector('.popup__character_input_img');


const formCreateHandler = document.querySelector('.popup__body_card');


const addCard = (event) => {
  event.preventDefault();
  renderItem({name: newCardName.value, link: newCardLink.value});
 
  popupCloseCard();
}



formCreateHandler.addEventListener('submit', addCard);
formElement.addEventListener('submit', formSubmitHandler);
buttonEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', popupCloseEvent);



// Постановка/снятие лайков


function setEventListener(elementHTML) {
  const likeBTN = elementHTML.querySelector('.elements__like');
  likeBTN.addEventListener('click', makeLike);
  const deleteBTN = elementHTML.querySelector('.elements__delete');
  deleteBTN.addEventListener('click', deleteItem);
  const imagePopup = elementHTML.querySelector('.elements__image');
  imagePopup.addEventListener('click', modalViewOpen);
}

function deleteItem (evt) {
  evt.target.closest('.elements__item').remove();
}

 function makeLike (evt) {
    evt.target.closest('.elements__like').classList.toggle('elements__like_active');
};

const modal = document.querySelector('.modal');

const modalCloseBTN = document.querySelector('.modal__button');


function modalViewOpen (evt) {
  
  modal.classList.add('modal_opened');
  const modalImage = modal.querySelector('.modal__img');
  modalImage.src = evt.target.closest('.elements__image').src;
  const modalText = modal.querySelector('.modal__title');
  modalText.textContent = evt.target.closest('.elements__item').querySelector('.elements__title').textContent;
}


modalCloseBTN.addEventListener('click', () => {
  modal.classList.remove('modal_opened');
});

renderItems()

// Закрытие попапа по фону
// popup.addEventListener('click', (event) => {
//     if(event.target === popup) {
//         popupCloseEvent();
//     }
// })