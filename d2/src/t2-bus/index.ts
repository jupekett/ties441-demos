import { Bus } from "./Bus.js";
import { IncrementButton } from "./IncrementButton.js";
import { ResetButton } from "./ResetButton.js";
import { Counter } from "./Counter.js";

function initialize() {
  const containerId = "app";

  // Create car button and counter
  const carSpecifier = "Henkilöautoja";
  const carButton: IncrementButton = new IncrementButton(
    carSpecifier,
    containerId
  );
  const carCounter = new Counter(carSpecifier, 0, containerId);

  // Create truck button and counter
  const truckSpecifier = "Kuorma-autoja";
  const truckButton: IncrementButton = new IncrementButton(
    truckSpecifier,
    containerId
  );
  const truckCounter = new Counter(truckSpecifier, 0, containerId);

  // Create reset button
  const resetButton: ResetButton = new ResetButton("Nollaa", containerId);

  // Register components to the message bus
  const bus = new Bus();
  carButton.register(bus);
  carCounter.register(bus);
  truckButton.register(bus);
  truckCounter.register(bus);
  resetButton.register(bus);
}

initialize();
