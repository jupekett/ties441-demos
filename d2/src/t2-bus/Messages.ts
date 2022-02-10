import { Bus } from "./Bus.js";

/**
 * Message delivered to and from a central bus.
 */
interface Message {
  topic: string;
  content: string;
}

/**
 * Confirmation message sent by (message target? bus?)
 */
interface IConfirmation {
  status: number;
  description: string;
}

const CONFIRMATION: IConfirmation = {
  status: 200,
  description: "OK",
};

/**
 * Bus as a class member
 */
interface IMessager {
  bus?: Bus;
  register(bus: Bus): void;
}
class Messager {
  protected bus?: Bus;
  register(bus: Bus) {
    this.bus = bus;
  }
}

/**
 * Sending messages to a bus
 */
interface ISender extends IMessager {
  send(message: Message): void;
}
class Sender extends Messager {
  constructor() {
    super();
  }
  send(message: Message) {}
}

/**
 * Receiving messages from a bus
 */
interface IReceiver extends IMessager {
  receive(message: Message): void;
}
class Receiver extends Messager {
  constructor() {
    super();
  }
  receive(message: Message) {}
}

export { Message, Sender, Receiver, ISender, IReceiver, IMessager, CONFIRMATION };
