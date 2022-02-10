import { Message, IReceiver } from "./Messages.js";
import { Bus } from "./Bus.js";

class Counter implements IReceiver {
  bus?: Bus;
  element: HTMLElement;
  value: number;
  specifier: string;

  constructor(specifier: string, startValue: number = 0, parentId: string) {
    this.specifier = specifier;
    this.value = startValue;

    this.element = document.createElement("p");
    this.element.className = "counter";
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

  // Implement messaging interfaces
  register(bus: Bus) {
    const { status } = bus.register(this);
    if (status === 200) {
      this.bus = bus;
    } else {
      console.warn("Registration rejected by bus for object", this);
    }
  }

  receive(message: Message) {
    const topic = message.topic;
    if (topic === `INCREMENT_${this.specifier.toUpperCase()}`) {
      console.log("counter received an increment message:", message);
      const amountStr = message.content;
      const amount: number = parseInt(amountStr);
      this.increment(amount);
    } else if (topic === "RESET") {
      console.log("counter received a reset message:", message);
      this.reset();
    }
  }
}

export { Counter };
