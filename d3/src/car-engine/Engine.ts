import { PowerSource } from "./PowerSource.js";

export class Engine implements PowerSource {
  private startTime: number = 0;

  start() {
    const now = Date.now();
    this.startTime = now;
    console.log("Engine started at", now);
  }

  stop() {
    this.startTime = 0;
    console.log("Engine stopped at", Date.now());
  }

  temperature(): number {
    const coolingLimit = 90; // degrees Celsius
    const degreesPerSecond = 7.8342
    const temperatureMultiplier = degreesPerSecond * 0.001; // per millisecond
    const timeSinceStart = Date.now() - this.startTime;
    const temperature = timeSinceStart * temperatureMultiplier;
    return temperature < coolingLimit? temperature: coolingLimit;
  }
}
