import { IObserver } from './IObserver.js';

export interface ISource {
  register(observer: IObserver): void;
  unregister(observer: IObserver): void;
}
