'use strict';
(function () {
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
      }
    });
  };
})();
