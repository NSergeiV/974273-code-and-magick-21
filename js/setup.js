'use strict';

// Вывод основного персанажа и участников на Попап

let setupBlock = document.querySelector('.setup');
let setupSimilar = document.querySelector('.setup-similar');

// setupBlock.classList.remove('hidden');
// setupSimilar.classList.remove('hidden');

const NAMES_WIZARDS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const SURNAMES_WIZARDS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const COATS_WIZARDS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const EYES_WIZARDS = ['black', 'red', 'blue', 'yellow', 'green'];
let setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
let wizards = [];

let randomNamber = function (array) {
  return Math.floor(Math.random() * (array.length));
};

for (let i = 0; i < 4; i++) {
  wizards[i] = {name: NAMES_WIZARDS[randomNamber(NAMES_WIZARDS)] + ' ' + SURNAMES_WIZARDS[randomNamber(SURNAMES_WIZARDS)], coatColor: COATS_WIZARDS[randomNamber(COATS_WIZARDS)], eyesColor: EYES_WIZARDS[randomNamber(EYES_WIZARDS)]};
}

let creatingWizardBlock = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

  return wizardElement;
};

let creatingGroupWizards = function (array) {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < array.length; i++) {
    fragment.appendChild(creatingWizardBlock(array[i]));
  }
  return fragment;
};

setupSimilarList.appendChild(creatingGroupWizards(wizards));

// Конец Вывода основного персанажа и участников на Попап

// Открытие и закрытие Попап основного персанажа

const KEY_ENTER = 13;
const KEY_ESC = 27;
let setupOpen = document.querySelector('.setup-open');
let setupClose = document.querySelector('.setup-close');
let setupUserName = setupBlock.querySelector('.setup-user-name');

let onPopupEscPress = function (evt) {
  if (setupUserName !== document.activeElement) {
    if (evt.keyCode === KEY_ESC) {
      evt.preventDefault();
      closePopap();
    }
  }
  if (setupClose === document.activeElement) {
    if (evt.keyCode === KEY_ENTER) {
      evt.preventDefault();
      closePopap();
    }
  }
  if (setupUserName === document.activeElement) {
    if (evt.keyCode === KEY_ENTER) {
      evt.preventDefault();
      openPopap();
    }
  }
};

let onPopupClickPress = function () {
  closePopap();
};

let closePopap = function () {
  setupBlock.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
  setupClose.removeEventListener('click', onPopupClickPress);
};

let openPopap = function () {
  setupBlock.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  setupClose.addEventListener('click', onPopupClickPress);
};

setupOpen.addEventListener('click', function () {
  openPopap();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_ENTER) {
    evt.preventDefault();
    openPopap();
  }
});

// Меняем цвет: мантии, глаз, фаурбола. Записываем в скрытые поля.

const FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
let setupWizard = document.querySelector('.setup-wizard');
let wizardEyes = setupWizard.querySelector('.wizard-eyes');
let wizardCoat = setupWizard.querySelector('.wizard-coat');
let setupFireballWrap = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  document.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill = COATS_WIZARDS[randomNamber(COATS_WIZARDS)];
});

wizardEyes.addEventListener('click', function () {
  document.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill = EYES_WIZARDS[randomNamber(EYES_WIZARDS)];
});

setupFireballWrap.addEventListener('click', function () {
  document.querySelector('input[name="fireball-color"]').value = setupFireballWrap.style.backgroundColor = FIREBALL_COLORS[randomNamber(FIREBALL_COLORS)];
});
