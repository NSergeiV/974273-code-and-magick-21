'use strict';
(function () {
  // Вывод основного персанажа и участников на Попап

  const NAMES_WIZARDS = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  const SURNAMES_WIZARDS = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  const COATS_WIZARDS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  const EYES_WIZARDS = ['black', 'red', 'blue', 'yellow', 'green'];
  window.KEY_ENTER = 13;
  window.KEY_ESC = 27;

  window.COATS_WIZARDS = COATS_WIZARDS;
  window.EYES_WIZARDS = EYES_WIZARDS;

  let setupBlock = document.querySelector('.setup');
  window.setupBlock = setupBlock;
  let setupSimilar = document.querySelector('.setup-similar');

  setupSimilar.classList.remove('hidden');

  let setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
  let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  let wizards = [];

  for (let i = 0; i < 4; i++) {
    wizards[i] = {
      name: NAMES_WIZARDS[window.randomNamber(NAMES_WIZARDS)] + ' ' + SURNAMES_WIZARDS[window.randomNamber(SURNAMES_WIZARDS)],
      coatColor: COATS_WIZARDS[window.randomNamber(COATS_WIZARDS)],
      eyesColor: EYES_WIZARDS[window.randomNamber(EYES_WIZARDS)]
    };
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
})();
