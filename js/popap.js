'use strict';
// Открытие и закрытие Попап основного персанажа

(function () {
  let setupOpen = document.querySelector('.setup-open');
  let setupClose = document.querySelector('.setup-close');
  let setupUserName = document.querySelector('.setup-user-name');

  let onPopupEscPress = function (evt) {
    if (setupUserName !== document.activeElement) {
      if (evt.keyCode === window.KEY_ESC) {
        evt.preventDefault();
        closePopap();
      }
    }
    if (setupClose === document.activeElement) {
      if (evt.keyCode === window.KEY_ENTER) {
        evt.preventDefault();
        closePopap();
      }
    }
    if (setupUserName === document.activeElement) {
      if (evt.keyCode === window.KEY_ENTER) {
        evt.preventDefault();
        openPopap();
      }
    }
  };

  let onPopupClickPress = function () {
    closePopap();
  };

  let closePopap = function () {
    window.setupBlock.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
    setupClose.removeEventListener('click', onPopupClickPress);

    window.setupBlock.style.left = '';
    window.setupBlock.style.top = '';
  };

  let openPopap = function () {
    window.setupBlock.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
    setupClose.addEventListener('click', onPopupClickPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopap();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.KEY_ENTER) {
      evt.preventDefault();
      openPopap();
    }
  });

})();
