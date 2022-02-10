import { MessageButton } from "./MessageButton.js";
import { Message } from "./Messages.js";

class ResetButton extends MessageButton {
  constructor(text: string, parentId: string) {
    super(text, parentId);
    this.attachAction(() => this.reset());
  }

  reset() {
    const message: Message = {
      topic: "RESET",
      content: "",
    };
    this.send(message);
  }
}

export { ResetButton };
