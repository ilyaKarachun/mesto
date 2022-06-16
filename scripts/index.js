const buttonEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__body');

let nameInput = formElement.querySelector('.popup__character_name');
let jobInput = formElement.querySelector('.popup__character_job')

let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__text');

// nameInput.textContent = profileName.value;
// jobInput.textContent = profileJob.value;

function openPopup(event) {
    nameInput.textContent = profileName.value;
    jobInput.textContent = profileJob.value;
    popup.classList.add('popup_opened');
 
};

function popupCloseEvent (event) {
    popup.classList.remove('popup_opened');
};


buttonEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', popupCloseEvent);



function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupCloseEvent();
};

formElement.addEventListener('submit', formSubmitHandler);




// Постановка/снятие лайков
// let likeBTN = document.querySelector('.elements__like');

// function likesGiven(event) {
//     likeBTN.classList.toggle('elements__like_active');
// }

// likeBTN.addEventListener('click', likesGiven);

// Закрытие попапа по фону
// popup.addEventListener('click', (event) => {
//     if(event.target === popup) {
//         popupCloseEvent();
//     }
// })