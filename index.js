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

  insert(value, root = this.root) {
    if(root === null) {
      root = new Node(value);
      return root;
    }

    if(value > root.data) {
      root.right = this.insert(value, root.right);
    }
    else {
      root.left = this.insert(value, root.left);
    }

    return root;
  }

  delete(value, root = this.root) {
    if (root == null) {
      return root;
    }

    if (value === root.data) {
      if (root.left === null && root.right === null) {
        return null;
      } else if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      } else {
        let tempNode = this.minValue(root.right);
        root.data = tempNode.data;
        root.right = this.delete(tempNode.data, root.right);
        return root;
      }
    } else if (value < root.data) {
      root.left = this.delete(value, root.left);
      return root;
    } else {
      root.right = this.delete(value, root.right);
      return root;
    }
  }

  minValue(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
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

tree.insert(120);
tree.prettyPrint();
