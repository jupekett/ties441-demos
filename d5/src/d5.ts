import * as indexT2_3 from './recursion/index.js';
// import * as indexT2_4 from './network/index.js';

function runT2_3() {
  indexT2_3.execute();
}

function runT2_4() {
  // indexT2_4.execute();
}

function main() {
  const buttonT3 = document.getElementById('button--2.3') as HTMLButtonElement;
  buttonT3.addEventListener('click', runT2_3);

  const buttonT4 = document.getElementById('button--2.4') as HTMLButtonElement;
  buttonT4.addEventListener('click', runT2_4);
}

main();