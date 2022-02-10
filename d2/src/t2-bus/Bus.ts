import { Message, IReceiver, CONFIRMATION } from "./Messages.js";

class Bus {
  private receiver: IReceiver[];

  constructor() {
    this.receiver = [];
  }

  // TODO keep track of senders?
  register(receiver: IReceiver) {
    this.receiver.push(receiver);
    return CONFIRMATION;
  }

  send(message: Message) {
    if (!this.receiver) {
      console.warn(
        "Someone tried to send a message, but no one has registered as a receiver."
      );
    }
    this.broadcast(message);
  }

  private broadcast(message: Message) {
    // console.log("Bus broadcasting a message:", message);
    // console.log("Receivers:", this.receiver);
    for (const receiver of this.receiver) {
      receiver.receive(message);
    }
  }
}

export { Bus };
