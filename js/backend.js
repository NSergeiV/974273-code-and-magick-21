'use strict';

// Отправка и запрос данных сервера

(function () {
  const TIMEOUT_IN_MS = 10000;

  const StatusCode = {
    OK: 200
  };

  window.backend = {
    // Функция запроса данных с сервера
    load: function (onLoad, onError) {
      let xhr = new XMLHttpRequest();
      let URL = 'https://21.javascript.pages.academy/code-and-magick/data';
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения с сервером');
      });
      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      xhr.timeout = TIMEOUT_IN_MS; // 10s

      xhr.open('GET', URL);
      xhr.send();

    },
    // Функция отправки данных формы
    save: function (data, onLoad, onError) {
      let URL = 'https://21.javascript.pages.academy/code-and-magick';
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения с сервером');
      });
      xhr.addEventListener('timeout', function () {
        onError('Отправка данных не выполнена, долгое ожидание более ' + xhr.timeout + 'мс');
      });

      xhr.timeout = TIMEOUT_IN_MS; // 10s

      xhr.open('POST', URL);
      xhr.send(data);
    }
  };
})();
