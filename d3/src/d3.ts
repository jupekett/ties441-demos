import * as indexT2_4 from './car-engine/index.js'
import * as indexT2_5 from './source-observer/index.js';

function runT2_4() {
  indexT2_4.execute();
}

function runT2_5() {
  indexT2_5.execute();
}

function main() {
  const buttonT4 = document.getElementById('button--2.4') as HTMLButtonElement;
  buttonT4.addEventListener('click', runT2_4);

  const buttonT5 = document.getElementById('button--2.5') as HTMLButtonElement;
  buttonT5.addEventListener('click', runT2_5);
}

main();