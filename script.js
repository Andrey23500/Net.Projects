class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addNode(value) {
    //Проверка типа значения
    if (typeof value === "number") {
      let newNode = new Node(value);
      //Создание кореня дерева
      if (this.root == null) this.root = newNode;
      //Заполнение дерева
      else {
        let currentNode = this.root;
        while (currentNode) {
          if (newNode.data < currentNode.data) {
            if (!currentNode.left) {
              currentNode.left = newNode;
              return;
            }
            currentNode = currentNode.left;
          } else if (newNode.data > currentNode.data) {
            if (!currentNode.right) {
              currentNode.right = newNode;
              return;
            }
            currentNode = currentNode.right;
          }
        }
      }
    } else console.log("Error type");
  }

  showTree(node) {
    if (node !== null) {
      console.log(node.data);
      this.showTree(node.left);
      this.showTree(node.right);
    }
  }
}

let myTree = new BinaryTree();
myTree.addNode(50);
myTree.addNode(70);
myTree.addNode(60);
myTree.addNode(45);
myTree.addNode(80);
myTree.addNode(51);
myTree.addNode(47);
myTree.addNode(61);
myTree.addNode(46);
myTree.addNode(49);
myTree.addNode(78);
myTree.addNode(81);
myTree.addNode("30");
myTree.addNode(30);
myTree.addNode("str2112");
myTree.addNode(21);
myTree.addNode(39);

myTree.showTree(myTree.root);
console.log(myTree);
