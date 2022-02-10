class Button {
  private element: HTMLButtonElement;

  constructor(text: string, parentId: string) {
    this.element = document.createElement("button");
    this.element.textContent = text;

    let parent = document.getElementById(parentId);
    parent?.append(this.element);
  }

  attachAction(action: Function) {
    // console.log("attached action", action);
    this.element.addEventListener("click", (event) => {
      event.preventDefault();
      action();
    });
  }
}

export { Button };
