// Import stylesheets
import { MyTimer } from './my-timer';
import './style.css';

document.getElementById('parimpar-button').addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById('parimpar-input')).value
  );
  if (num % 2 == 0) {
    document.getElementById('parimpar-div').innerHTML = 'O número é PAR';
  } else {
    document.getElementById('parimpar-div').innerHTML = 'O número é ÍMPAR';
  }
});

document.getElementById('tabuada-button').addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById('tabuada-input')).value
  );
  const table = document.getElementById('tabuada-table');
  table.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.innerHTML = `${i} x ${i}`;
    cell2.innerHTML = `${num * i}`;
  }
});

document.getElementById('aleatorios-button').addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById('aleatorios-input')).value
  );
  const table = document.getElementById('aleatorios-tbody');
  table.innerHTML = '';
  for (let i = 1; i <= num; i++) {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.innerHTML = `${i}`;
    cell2.innerHTML = `${Math.trunc(Math.random() * 100)}`;
  }
});

let myTimer = new MyTimer(document.getElementById('temporizador-span'));
document
  .getElementById('temporizador-start-button')
  .addEventListener('click', () => {
    myTimer.start();
  });

document
  .getElementById('temporizador-stop-button')
  .addEventListener('click', () => {
    myTimer.stop();
  });
