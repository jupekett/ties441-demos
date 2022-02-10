import { ObservableEvent } from './ObservableEvent.js'

export interface IObserver {
  update(event: ObservableEvent): void;
}
