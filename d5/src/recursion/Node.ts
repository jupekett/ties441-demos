export class Node {
  size: number = 0;
  children: Node[] = [];

  constructor(size: number) {
    this.size = size;
  }

  add(child: Node): void {
    this.children.push(child);
  }

  getSize(): number {
    console.log('Node size:', this.size);
    const childrenSize = this.children.reduce((acc, child) => acc + child.getSize(), this.size);
    console.log("Children's total size:", childrenSize);
    return childrenSize;
  }

}