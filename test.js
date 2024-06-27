import Tree from "./index.js";

let sortedArray = [10, 20, 30, 40, 50, 70, 80, 90];
let tree = new Tree(sortedArray);

console.log(tree.isBalanced()); // Tree is balanced and returns true.
console.log(tree.preorder()); // Returns "50 30 20 10 40 80 70 90"
console.log(tree.postorder()); // Returns "10 20 40 30 70 90 80 50"
console.log(tree.inorder()); // Returns "10 20 30 40 50 70 80 90"

tree.insert(120);
tree.insert(125);
tree.insert(155);
tree.insert(205);

console.log(tree.isBalanced()); // Tree isn't balanced and returns false.
tree.rebalance();
console.log(tree.isBalanced()); // Tree is balanced again. Returns true.

console.log(tree.preorder()); // Returns "80 40 20 10 30 70 50 125 120 90 205 155"
console.log(tree.postorder()); // Returns "10 30 20 50 70 40 90 120 155 205 125 80"
console.log(tree.inorder()); // Returns "10 20 30 40 50 70 80 90 120 125 155 205"