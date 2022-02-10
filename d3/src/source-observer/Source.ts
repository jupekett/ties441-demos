import { ISource } from "./ISource.js";
import { IObserver } from "./IObserver.js";
import { ObservableEvent } from "./ObservableEvent.js";

export class Source implements ISource {
  private observers: IObserver[];

  constructor() {
    this.observers = [];
  }

  register(observer: IObserver) {
    for (let obs of this.observers) {
      if (obs === observer) {
        console.log("This observer has already been registered.");
        return;
      }
    }
    console.log("Registering observer:", observer);
    this.observers.push(observer);
    console.log("Number of observers after registering:", this.observers.length);
  }

  unregister(observer: IObserver) {
    console.log("Unregistering observer:", observer);
    this.observers = this.observers.filter((obs) => obs !== observer);
    console.log("Number of observers after unregistering:", this.observers.length);
  }

  triggerEvent(event: ObservableEvent) {
    event.trigger();
    for (let obs of this.observers) {
      obs.update(event);
    }
  }
}
