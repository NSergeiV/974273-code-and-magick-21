'use strict';
(function () {
  // Вывод основного персанажа и участников на Попап

  const COATS_WIZARDS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  const EYES_WIZARDS = ['black', 'red', 'blue', 'yellow', 'green'];
  const MAX_SIMILAR_WIZARD_COUNT = 4;
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

  let creatingWizardBlock = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

    return wizardElement;
  };

  let creatingCopies = function (wizards) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      let wizard = wizards[window.randomNamber(wizards)];
      fragment.appendChild(creatingWizardBlock(wizard));
    }
    setupSimilarList.appendChild(fragment);
  };

  let node = document.createElement('div');
  let errorHandler = function (errorMessage) {
    node.classList.add('errorBlock');

    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; width: 50%;';
    node.style.position = 'absolute';
    node.style.left = 25 + '%';
    node.style.top = 40 + '%';
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(creatingCopies, errorHandler);

  let form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), function () {
      window.setupBlock.classList.add('hidden');
      if (document.querySelector('.errorBlock')) {
        document.querySelector('.errorBlock').remove();
      }
    }, errorHandler);
  });
})();
