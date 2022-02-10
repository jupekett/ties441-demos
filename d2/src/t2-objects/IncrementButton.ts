import { Button } from "./Button.js";
import { Counter } from "./Counter.js";

class IncrementButton extends Button {
  private counter?: Counter;

  constructor(text: string, parentId: string) {
    super(text, parentId);
    this.attachAction(() => this.incrementCounter(1));
  }

  attachCounter(counter: Counter) {
    this.counter = counter;
  }

  incrementCounter(amount: number = 1) {
    this.counter?.increment(amount);
    console.log("counter value:", this.counter?.value);
  }
}

export { IncrementButton };
