import * as tree from "../leet_workpieces/BinaryTree.mjs";

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const arr = [1, 2, 3, 4, 5, 1, 2, 4, 6];

console.log(tree.treeReader(tree.arrayToTree(arr)));
