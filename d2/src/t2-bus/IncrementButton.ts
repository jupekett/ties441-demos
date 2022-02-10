import { MessageButton } from "./MessageButton.js";
import { Message, ISender } from "./Messages.js";

class IncrementButton extends MessageButton {
  counterSpecifier: string;

  constructor(text: string, parentId: string) {
    super(text, parentId);
    this.counterSpecifier = text;
    this.attachAction(() => this.incrementCounter(1));
  }

  incrementCounter(amount: number = 1) {
    const message: Message = {
      topic: `INCREMENT_${this.counterSpecifier.toUpperCase()}`,
      content: `${amount}`,
    };
    this.send(message);
  }
}

export { IncrementButton };
