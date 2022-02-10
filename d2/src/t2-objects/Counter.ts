class Counter {
  element: HTMLElement;
  value: number;

  constructor(startValue: number = 0, parentId: string) {
    this.value = startValue;

    this.element = document.createElement("p");
    this.element.className = 'counter';
    this.element.textContent = `${this.value}`;
    let parent = document.getElementById(parentId);
    parent?.append(this.element);
  }

  increment(amount: number = 1) {
    this.value = this.value + amount;
    this.updateDisplay();
  }

  updateDisplay() {
    this.element.textContent = `${this.value}`;
  }

  reset() {
    this.value = 0;
    this.updateDisplay();
  }
}

export { Counter };
