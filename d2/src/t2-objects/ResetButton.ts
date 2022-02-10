import { Button } from "./Button.js";
import { Counter } from "./Counter.js";

class ResetButton extends Button {
  private counters: Counter[];

  constructor(parentId: string) {
    super("Nollaa", parentId);
    this.counters = [];
    this.attachAction(() => this.reset());
  }

  attachCounter(counter: Counter) {
    this.counters.push(counter);
  }

  reset() {
    console.log("reset button pressed");
    for (let counter of this.counters) {
      counter.reset();
    }
  }
}

export { ResetButton };
