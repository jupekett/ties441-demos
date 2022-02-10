import { Source } from "./Source.js";
import { Observer } from "./Observer.js";
import { ObservableEvent } from "./ObservableEvent.js";

/*
function sleep(ms: number): Promise<any> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
} */

export async function execute() {
  // Available events
  const event1 = new ObservableEvent("click");
  const event2 = new ObservableEvent("car drove by");

  // Source
  const source1 = new Source();

  // First batch of observers
  // Observers are registered on instantiation
  const observer1 = new Observer(source1);
  const observer2 = new Observer(source1);
  source1.register(observer1); // Re-registering won't work

  // First event happening
  source1.triggerEvent(event1);

  // Register more observers
  const observer3 = new Observer(source1);
  const observer4 = new Observer(source1);

  // Second event happening
  source1.triggerEvent(event2);

  // Unregister some observers
  source1.unregister(observer2);
  source1.unregister(observer3);

  // First event happening again
  source1.triggerEvent(event1);
}
