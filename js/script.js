'use strict';
(function () {
  window.KEY_ENTER = 13;
  window.KEY_ESC = 27;

  window.randomNamber = function (array) {
    return Math.floor(Math.random() * (array.length));
  };

  window.colorize = function (element, arrayColors, colorHidden) {
    element.addEventListener('click', function () {
      let color = arrayColors[window.randomNamber(arrayColors)];
      if (element.tagName.toLowerCase() === 'div') {
        colorHidden.value = element.style.backgroundColor = color;
      } else {
        colorHidden.value = element.style.fill = color;
        if (element === document.querySelector('.wizard-coat')) {
          window.coatColor = color;
        } else {
          window.eyesColor = color;
        }
      }
      window.debounce();
    });
  };

  // Вывод окна в случае ошибки с сервера
  let node = document.createElement('div');
  window.errorHandler = function (errorMessage) {
    node.classList.add('errorBlock');

    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; width: 50%;';
    node.style.position = 'absolute';
    node.style.left = 25 + '%';
    node.style.top = 40 + '%';
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };
})();
