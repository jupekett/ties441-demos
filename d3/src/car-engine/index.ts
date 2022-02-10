import { Car } from "./Car.js";
import { Engine } from "./Engine.js";

function sleep(ms: number): Promise<any> {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}

export async function execute() {
  const engine1 = new Engine();
  const car1 = new Car(engine1);
  car1.warmUp(60);
  // car1.run();
  // car1.stop();
}
