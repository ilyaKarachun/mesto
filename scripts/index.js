const buttonEdit = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

const openPopup = (event) => {
    popup.classList.add('popup_opened');
};

function popupCloseEvent (event) {
    popup.classList.remove('popup_opened');
};


buttonEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', popupCloseEvent);


// let newTitle = document.querySelector('.profile__title');
// let newText = document.querySelector('.profile__text');

// let nameInput = formElement.querySelector('.popup__person');
// let jobInput = formElement.querySelector('.popup__character');

// Закрытие попапа по фону
// popup.addEventListener('click', (event) => {
//     if(event.target === popup) {
//         popupCloseEvent();
//     }
// })


// let formElement = document.querySelector('.popup__container');

// function formSubmitHandler (evt) {
//     evt.preventDefault();

//     newTitle.textContent = nameInput.value;
    
//     newText.textContent = jobInput.value;

//     popupCloseEvent();
    
// };


// formElement.addEventListener('submit', formSubmitHandler);

// Постановка/снятие лайков
// let likeBTN = document.querySelector('.elements__like');

// function likesGiven(event) {
//     likeBTN.classList.toggle('elements__like_active');
// }

// likeBTN.addEventListener('click', likesGiven);
