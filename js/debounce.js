'use strict';

// Устранение дребезга (debounce)

(function () {
  let DEBOUNCE_INTERVAL = 500;
  let lastTimeout = null;

  window.debounce = function () {

    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      window.setupSimilarList.innerHTML = "";
      window.creatingCopies();
    }, DEBOUNCE_INTERVAL);
  };
})();
