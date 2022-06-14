console.log(document.querySelector('.profile__edit'));

const buttonEdit = document.querySelector('.profile__edit');
console.log(buttonEdit);

const popup = document.querySelector('.popup');
console.log(popup);

const popupClose = document.querySelector('.popup__close');

const openPopup = (event) => {
    popup.classList.add('popup_opened');
};

function popupCloseEvent (event) {
    popup.classList.remove('popup_opened');
};


buttonEdit.addEventListener('click', openPopup);
popupClose.addEventListener('click', popupCloseEvent);



popup.addEventListener('click', (event) => {
    if(event.target === popup) {
        popupCloseEvent();
    }
})

// document.querySelector('.popup__body').addEventListener('click', (event) => {
//     event.preventDefault();
// });пше

let formElement = document.querySelector('.popup__container');

function formSubmitHandler (evt) {
    evt.preventDefault();
    let newTitle = document.querySelector('.profile__title');
    console.log(newTitle);
    let newText = document.querySelector('.profile__text');

    let nameInput = formElement.querySelector('.popup__person');
    let jobInput = formElement.querySelector('.popup__character');

    newTitle.textContent = nameInput.value;
    
    newText.textContent = jobInput.value;

    popupCloseEvent();
    
};


formElement.addEventListener('submit', formSubmitHandler);



