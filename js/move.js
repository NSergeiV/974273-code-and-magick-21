'use strict';
// Перемещаем окно попап за аватарку
(function () {

  let avatarWizard = window.setupBlock.querySelector('.upload');

  avatarWizard.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    let onMouseMove = function (movEvt) {
      movEvt.preventDefault();
      dragged = true;
      let shift = {
        x: startCoords.x - movEvt.clientX,
        y: startCoords.y - movEvt.clientY
      };

      startCoords = {
        x: movEvt.clientX,
        y: movEvt.clientY
      };

      window.setupBlock.style.left = (window.setupBlock.offsetLeft - shift.x) + 'px';
      window.setupBlock.style.top = (window.setupBlock.offsetTop - shift.y) + 'px';
    };

    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        let onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          avatarWizard.removeEventListener('click', onClickPreventDefault);
        };
        avatarWizard.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
