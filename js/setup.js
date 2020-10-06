'use strict';
let setupBlock = document.querySelector('.setup');
let setupSimilar = document.querySelector('.setup-similar');
setupBlock.classList.remove('hidden');
setupSimilar.classList.remove('hidden');

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
