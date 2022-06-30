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
  
const buttonEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup');
const popupCloseProfileBtn = document.querySelector('.popup__close_profile_button');
const formElementProfile = document.querySelector('.popup__body');

const nameInput = formElementProfile.querySelector('.popup__character_input_name');
const jobInput = formElementProfile.querySelector('.popup__character_input_job')

const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__text');

const itemTemplate = document.getElementById('template').content;
const listCards = document.querySelector('.elements');

const btnClosePopupCard = document.querySelector('.popup__close_card');

const formCreate = document.querySelector('.popup__body_card');

const newCardInputName = document.querySelector('.popup__character_img_name');
const newCardInputLink = document.querySelector('.popup__character_input_img');

const btnAddCard = document.querySelector('.profile__add');
const popupAddCard = document.querySelector('.popup_addсard');

const modal = document.querySelector('.popup_modal');
const modalCloseBtn = document.querySelector('.popup_modalclose');

 function createCard (object) {
  const elementHTML = itemTemplate.cloneNode(true);
  elementHTML.querySelector('.elements__title').textContent = object.name;
  elementHTML.querySelector('.elements__image').src = object.link; 
  setEventListenersCard(elementHTML);
  return elementHTML;
 }

function renderCard(elementHTML) {
  listCards.prepend(elementHTML);
 }

initialCards.forEach((elementHTML) => {
  renderCard(createCard (elementHTML));
})

function clearPopupCardInput() {
  newCardInputName.value ='';
  newCardInputLink.value = '';
}

const handleFormAddCard = (event) => {
  event.preventDefault();
  renderCard(createCard({name: newCardInputName.value, link: newCardInputLink.value}));
  closePopupCard();
  clearPopupCardInput();
}

function openPopupEdit() {
  popupEdit.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

function closePopup(popup) {
  popup.classList.remove('popup_opened')
};

function openPopup(popup) {
  popup.classList.add('popup_opened')
};

function closePopupEdit () {
  closePopup(popupEdit);
};

function closePopupCard () {
  closePopup(popupAddCard);
};

function closePopupModal () {
  closePopup(modal);
};


function handleFormEdit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopupEdit();
};

function setEventListenersCard(elementHTML) {
  const likeBtn = elementHTML.querySelector('.elements__like');
  likeBtn.addEventListener('click', makeLike);
  const deleteBtn = elementHTML.querySelector('.elements__delete');
  deleteBtn.addEventListener('click', deleteItem);
  const imagePopup = elementHTML.querySelector('.elements__image');
  imagePopup.addEventListener('click', modalViewOpen);
}

function deleteItem (evt) {
  evt.target.closest('.elements__item').remove();
}

 function makeLike (evt) {  
    evt.target.classList.toggle('elements__like_active');
};

function modalViewOpen (evt) {
  modal.classList.add('popup_opened');
  const modalImage = modal.querySelector('.popup__modal_img');
  modalImage.src = evt.target.closest('.elements__image').src;
  modalImage.alt = evt.target.closest('.elements__item').querySelector('.elements__title').textContent;
  const modalText = modal.querySelector('.popup__modal_title');
  modalText.textContent = evt.target.closest('.elements__item').querySelector('.elements__title').textContent;
}

btnAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

btnClosePopupCard.addEventListener('click', () => {
  closePopup(popupAddCard);
});

formCreate.addEventListener('submit', handleFormAddCard);
formElementProfile.addEventListener('submit', handleFormEdit);
buttonEdit.addEventListener('click', openPopupEdit);
popupCloseProfileBtn.addEventListener('click', closePopupEdit);

modalCloseBtn.addEventListener('click', () => {
  closePopup(modal);
});



