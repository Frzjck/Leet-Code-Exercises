import * as tree from "../leet_workpieces/BinaryTree.mjs";
import * as list from "../leet_workpieces/LinkedLists.mjs";

const postorder = (root) => {
	if (!root) return [];
	return [...postorder(root.left), ...postorder(root.right), root.val];
};
