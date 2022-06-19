import * as tree from "../leet_workpieces/BinaryTree.mjs";
import * as list from "../leet_workpieces/LinkedLists.mjs";

// const postorder = (root) => {
// 	if (!root) return [];
// 	return [...postorder(root.left), ...postorder(root.right), root.val];
// };

const postorder = (root) => {
	if (!root) return [];
	const stack = [root];
	const result = [];
	while (stack.length) {
		const current = stack.pop();
		result.unshift(current.val);
		if (current.left) stack.push(current.left);
		if (current.right) stack.push(current.right);
	}
	return result;
};
