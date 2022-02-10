import { IncrementButton } from "./IncrementButton.js";
import { ResetButton } from "./ResetButton.js";
import { Counter } from "./Counter.js";

function initialize() {
  const containerId = "app";
  const container = document.getElementById(containerId);

  const carButton: IncrementButton = new IncrementButton("Henkilöautoja", containerId);
  const carCounter = new Counter(0, containerId);
  carButton.attachCounter(carCounter);

  const truckButton: IncrementButton = new IncrementButton("Kuorma-autoja", containerId);
  const truckCounter = new Counter(0, containerId);
  truckButton.attachCounter(truckCounter);

  const resetButton: ResetButton = new ResetButton(containerId);
  resetButton.attachCounter(truckCounter);
  resetButton.attachCounter(carCounter);

}

initialize();
