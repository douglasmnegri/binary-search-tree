class Node {
    constructor(data = null, left = null, right = null) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
  }
  
  class Tree {
    constructor(array) {
      this.root = this.buildTree(array);
    }
  
    buildTree(array) {
      if (array.length === 0) {
        return null;
      }
      let mid = Math.floor(array.length / 2);
      const root = new Node(
        array[mid],
        this.buildTree(array.slice(0, mid)),
        this.buildTree(array.slice(mid + 1))
      );
      return root;
    }
    
    prettyPrint() {
      const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
      prettyPrint(this.root);
    }
  }
  
  let sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  let tree = new Tree(sortedArray);
  tree.prettyPrint();
  