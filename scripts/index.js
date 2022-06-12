console.log(document.querySelector('.profile__edit'));

const buttonEdit = document.querySelector('.profile__edit');
console.log(buttonEdit);

const popup = document.querySelector('.popup');
console.log(popup);

const popupClose = document.querySelector('.popup__close');

const openPopup = (event) => {
    popup.classList.add('popup_opened');
};

const popupCloseEvent = (event) => {
    popup.classList.remove('popup_opened');
};


buttonEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', popupCloseEvent);

