import { PowerSource } from "./PowerSource.js";

function idle(ms: number): Promise<any> {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export class Car {
  private engine: PowerSource;

  constructor(eng: PowerSource) {
    this.engine = eng;
  }

  async warmUp(desiredTemp: number): Promise<void> {
    if (desiredTemp > 70) {
      console.log(
        "Warming up to more than 70°C is not reasonable. Setting max to 70°C."
      );
      desiredTemp = 70;
    }
    console.log("Warming up the engine up to", desiredTemp, "degrees.");
    this.engine.start();
    while (this.engine.temperature() < desiredTemp) {
      await idle(500);
      console.log("Engine temperature:", this.engine.temperature(), "°C");
    }
    console.log("Engine is now warmed up at", this.engine.temperature(), "°C");
  }

  run() {
    this.engine.start();
  }

  stop() {
    this.engine.stop();
  }
}
