import * as tree from "../leet_workpieces/BinaryTree.mjs";

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

const postorder = (root) => {
	if (!root) return [];
	return [root.val, ...postorder(root.left), ...postorder(root.right)];
};
