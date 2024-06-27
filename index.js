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

  levelOrder(root = this.root, arrOfTree = [], queue = [root]) {
    if (root == null) {
      return [];
    }

    while (queue.length != 0) {
      let level = [];
      let n = queue.length;
      for (let i = 0; i < n; i++) {
        let node = queue.pop();
        level.push(node.data);

        if (node.left) queue.unshift(node.left);
        if (node.right) queue.unshift(node.right);
      }
      arrOfTree.push(level);
    }

    return arrOfTree;
  }

  find(value, root = this.root) {
    if (root.data === value || root.data === null) {
      return root;
    }
    if (value > root.data) {
      return this.find(value, root.right);
    } else {
      return this.find(value, root.left);
    }
  }

  depth(value, root = this.root, indexOfRoot = 1) {
    if (root.data === value) {
      console.log(indexOfRoot);
      return indexOfRoot;
    }

    if (value > root.data) {
      return this.depth(value, root.right, (indexOfRoot = indexOfRoot + 1));
    } else {
      return this.depth(value, root.left, (indexOfRoot = indexOfRoot + 1));
    }
  }

  isBalanced(root = this.root) {

  }

  insert(value, root = this.root) {
    if (root === null) {
      root = new Node(value);
      return root;
    }

    if (value > root.data) {
      root.right = this.insert(value, root.right);
    } else {
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

  height(treeHeight = this.levelOrder()) {
    return treeHeight.length;
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

let sortedArray = [10, 20, 30, 40, 50, 70, 80, 90];
let tree = new Tree(sortedArray);

tree.buildTree(sortedArray);
tree.levelOrder();
tree.depth(90);
