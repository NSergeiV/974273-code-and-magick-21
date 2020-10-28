'use strict';
(function () {
  // Отрисовка персанажа и участников на Попап, соритировка участников максимально похожих на основного участника

  const MAX_SIMILAR_WIZARD_COUNT = 4;
  let wizards = [];

  let setupBlock = document.querySelector('.setup');
  window.setupBlock = setupBlock;
  let setupSimilar = document.querySelector('.setup-similar');

  setupSimilar.classList.remove('hidden');
  window.setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
  let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  let creatingWizardBlock = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

    return wizardElement;
  };

  const getRang = function (wizard) {
    let rank = 0;
    if (wizard.colorCoat === window.coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === window.eyesColor) {
      rank += 1;
    }
    return rank;
  };

  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = function () {
    wizards.sort(function (left, right) {
      let rankDiff = getRang(right) - getRang(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });
  };

  window.creatingCopies = function () {
    // let wizardsUpdate = updateWizards(wizards);
    updateWizards();
    // console.log(wizardsUpdate);
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      // let wizard = wizardsUpdate[i];
      let wizard = wizards[i];
      fragment.appendChild(creatingWizardBlock(wizard));
    }
    window.setupSimilarList.appendChild(fragment);
  };

  // Получение данных с сервера (волшебников)
  const successHandler = function (data) {
    wizards = data;
    window.creatingCopies();
  };

  window.backend.load(successHandler, window.errorHandler);

  // Отправка данных на сервер
  let form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), function () {
      window.setupBlock.classList.add('hidden');
      if (document.querySelector('.errorBlock')) {
        document.querySelector('.errorBlock').remove();
      }
    }, window.errorHandler);
  });
})();
