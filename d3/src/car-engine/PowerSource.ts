export interface PowerSource {
  start(): void;
  temperature(): number;
  stop(): void;
}
