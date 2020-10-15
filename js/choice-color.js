'use strict';

// Меняем цвет: мантии, глаз, фаурбола. Записываем в скрытые поля.

(function () {
  const FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  let setupWizard = document.querySelector('.setup-wizard');
  let wizardEyes = setupWizard.querySelector('.wizard-eyes');
  let wizardCoat = setupWizard.querySelector('.wizard-coat');
  let setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  let wizardEyesInputHidden = document.querySelector('input[name="eyes-color"]');
  let wizardCoatInputHidden = document.querySelector('input[name="coat-color"]');
  let setupFireballInputHidden = document.querySelector('input[name="fireball-color"]');

  window.colorize(wizardCoat, window.COATS_WIZARDS, wizardCoatInputHidden);
  window.colorize(wizardEyes, window.EYES_WIZARDS, wizardEyesInputHidden);
  window.colorize(setupFireballWrap, FIREBALL_COLORS, setupFireballInputHidden);
})();
