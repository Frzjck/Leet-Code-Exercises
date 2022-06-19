import * as tree from "../leet_workpieces/BinaryTree.mjs";

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// const postorder = (root) => {
// 	if (!root) return [];
// 	return [root.val, ...postorder(root.left), ...postorder(root.right)];
// };

const postorder = (root) => {
	if (!root) return [];
	const stack = [root];
	const result = [];
	while (stack.length) {
		const current = stack.pop();
		result.push(current.val);
		if (current.right) stack.push(current.right);
		if (current.left) stack.push(current.left);
	}
	return result;
};
