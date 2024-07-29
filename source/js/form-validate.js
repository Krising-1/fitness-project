const form = document.querySelector('.form__form');
const submitButton = form.querySelector('.form__button-submit');
const inputName = form.querySelector('.form__input--name');
const inputTelephone = form.querySelector('.form__input--tel');
const wrongTelephoneText = form.querySelector('.form__wrong-message--tel');
const wrongNameText = form.querySelector('.form__wrong-message--name');
const congratulationMessage = form.querySelector('.form__congratulation-message');
const validNumber = /^\+?[0-9]{1,30}$/;
const validNumberQuantity = /^\+?[0-9]{11}$/;
const validNameSpaces = /^[^\s][a-z а-яё]{1,30}[^\s]$/i;
const validNameLetters = /^[a-z а-яё]{1,30}$/i;

const addTextMessage = (slot, message, input) => {
  slot.innerHTML = message;
  input.classList.add('form__input--error');
};


const timerButtonBlock = () => {
  congratulationMessage.innerHTML = 'Форма успешно отправлена!';
  submitButton.classList.add('form__button-submit--sent');
  setTimeout(
    () => {
      submitButton.classList.remove('form__button-submit--sent');
      congratulationMessage.innerHTML = '';
    },
    5 * 1000
  );
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!validNumber.test(inputTelephone.value)) {
    addTextMessage(wrongTelephoneText, 'Используйте только цифры', inputTelephone);
    return;
  } else {
    inputTelephone.classList.remove('form__input--error');
  }
  if (!validNumberQuantity.test(inputTelephone.value)) {
    addTextMessage(wrongTelephoneText, 'Номер содержит 11 цифр', inputTelephone);
    return;
  } else {
    inputTelephone.classList.remove('form__input--error');
  }
  if (!validNameLetters.test(inputName.value)) {
    addTextMessage(wrongNameText, 'Используйте только Буквы', inputName);
    return;
  } else {
    inputName.classList.remove('form__input--error');
  }
  if (!validNameSpaces.test(inputName.value)) {
    addTextMessage(wrongNameText, 'Уберите лишнии пробелы', inputName);
    return;
  } else {
    inputName.classList.remove('form__input--error');
  }


  submitButton.disabled = true;
  fetch('https://echo.htmlacademy.ru/.', { method: 'POST', body:new FormData(evt.target) })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .then(timerButtonBlock())
    .finally(submitButton.disabled = false);
});
