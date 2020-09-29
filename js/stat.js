'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const HISTOGRAM_HEIGHT = 150;
const COLUMN_WIDTH = 40;
const COLUMN_SPACE = 50;
const INTERVAL = COLUMN_SPACE + COLUMN_WIDTH;
const FIRST_NAME_PLAYER_Y = 260;
const FIRST_PLAYER_BAR_X = 160;
const FIRST_PLAYER_BAR_Y = 100;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElementTime = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return Math.round(maxElement);
};

function getColorFon() {
  let h = 235;
  let s = Math.floor(Math.random() * (100));
  let l = 34;
  return 'hsl(' + h.toString() + ', ' + s.toString() + '%, ' + l.toString() + '%)';
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px "PT Mono"';
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 50);

  for (let i = 0; i < names.length; i++) {
    ctx.fillText(names[i], FIRST_PLAYER_BAR_X + (INTERVAL * i), FIRST_NAME_PLAYER_Y);
  }

  let maxTime = getMaxElementTime(times);

  for (let i = 0; i < times.length; i++) {
    let histogramPlayer = (HISTOGRAM_HEIGHT / maxTime) * times[i];
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillText(Math.round(times[i]), FIRST_PLAYER_BAR_X + (INTERVAL * i), (HISTOGRAM_HEIGHT - histogramPlayer) + FIRST_PLAYER_BAR_Y - (GAP * 2));
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(FIRST_PLAYER_BAR_X + (INTERVAL * i), (HISTOGRAM_HEIGHT - histogramPlayer) + FIRST_PLAYER_BAR_Y, COLUMN_WIDTH, histogramPlayer);
    } else {
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillText(Math.round(times[i]), FIRST_PLAYER_BAR_X + (INTERVAL * i), (HISTOGRAM_HEIGHT - histogramPlayer) + FIRST_PLAYER_BAR_Y - (GAP * 2));
      ctx.fillStyle = getColorFon();
      ctx.fillRect(FIRST_PLAYER_BAR_X + (INTERVAL * i), (HISTOGRAM_HEIGHT - histogramPlayer) + FIRST_PLAYER_BAR_Y, COLUMN_WIDTH, histogramPlayer);
    }
  }
};
