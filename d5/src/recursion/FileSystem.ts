import { Node } from "./Node.js";

export class FileSystem {
  children: Node[] = [];

  add(child: Node) {
    this.children.push(child);
  }

  getSize(): number {
    const childrenSize = this.children.reduce((acc, child) => acc + child.getSize(), 0);
    return childrenSize;
  }
}
