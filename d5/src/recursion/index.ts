import { Node } from "./Node.js";
import { FileSystem } from "./FileSystem.js";

export function execute() {
  console.log("Execute recursion main");

  // const fileSizes = [100, 200, 300, 400, 500, 600, 700, 800];

  const fs = new FileSystem();

  const n1 = new Node(100);
  const n2 = new Node(200);
  const n3 = new Node(400);
  const n4 = new Node(800);

  fs.add(n1);
  n1.add(n2);
  n1.add(n3);
  n3.add(n4);

  console.log("Filesystem total size:", fs.getSize());
}
