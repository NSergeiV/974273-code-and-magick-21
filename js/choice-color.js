'use strict';

// Меняем цвет: мантии, глаз, фаурбола. Записываем в скрытые поля.

(function () {
  const COATS_WIZARDS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  const EYES_WIZARDS = ['black', 'red', 'blue', 'yellow', 'green'];
  const FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  let setupWizard = document.querySelector('.setup-wizard');
  let wizardEyes = setupWizard.querySelector('.wizard-eyes');
  let wizardCoat = setupWizard.querySelector('.wizard-coat');
  let setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  let wizardEyesInputHidden = document.querySelector('input[name="eyes-color"]');
  let wizardCoatInputHidden = document.querySelector('input[name="coat-color"]');
  let setupFireballInputHidden = document.querySelector('input[name="fireball-color"]');

  window.coatColor = 'rgb(101, 137, 164)';
  window.eyesColor = 'black';

  wizardCoatInputHidden.value = window.coatColor;
  wizardEyesInputHidden.value = window.eyesColor;

  window.colorize(wizardCoat, COATS_WIZARDS, wizardCoatInputHidden);
  window.colorize(wizardEyes, EYES_WIZARDS, wizardEyesInputHidden);
  window.colorize(setupFireballWrap, FIREBALL_COLORS, setupFireballInputHidden);
})();
