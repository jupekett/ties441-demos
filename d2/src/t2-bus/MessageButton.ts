import { Button } from "./Button.js";
import { Bus } from "./Bus.js";
import { Message, ISender } from "./Messages.js";

class MessageButton extends Button implements ISender {
  bus?: Bus;

  constructor(text: string, parentId: string) {
    super(text, parentId);
  }

  // Implementing messaging interfaces
  register(bus: Bus) {
    this.bus = bus;
  }

  send(message: Message) {
    if (!this.bus) {
      console.log("Button isn't registered to a bus yet");
    }
    this.bus?.send(message);
  }
}

export { MessageButton };
