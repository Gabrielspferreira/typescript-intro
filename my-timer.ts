export class MyTimer {
  interval = null;
  counter: number = 0;
  elemnt: HTMLElement = null;

  constructor(e: HTMLElement) {
    this.elemnt = e;
  }

  start() {
    this.counter = 0;
    this.elemnt.innerHTML = `${this.counter}s`;
    this.interval = setInterval(() => {
      this.counter++;
      this.elemnt.innerHTML = `${this.counter}s`;
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}
