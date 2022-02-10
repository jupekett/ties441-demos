import { IObserver } from "./IObserver.js";
import { ObservableEvent } from "./ObservableEvent.js";
import { ISource } from "./ISource.js";

export class Observer implements IObserver {
  // private source: ISource;

  constructor(source: ISource) {
    // this.source = source;
    source.register(this);
  }

  update(event: ObservableEvent): void {
    console.log(`Event \'${event.getEventName()}\' has been observed.`);
  }
}
