export class ObservableEvent {
  private eventName: string;

  constructor(event: string) {
    this.eventName = event;
  }

  getEventName(): string {
    return this.eventName;
  }

  trigger(): void {
    console.log("An event was triggered:", this.eventName);
  }
}
