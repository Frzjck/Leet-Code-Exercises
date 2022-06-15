class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}
const result = [];

const nodeA = new TreeNode(1);
const nodeB = new TreeNode(2);
const nodeC = new TreeNode(3);
const nodeD = new TreeNode(4);
const nodeE = new TreeNode(5);
nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;

const inorderTrav = (root) => {
	if (!root) return [];
	return [...inorderTrav(root.left), root.val, ...inorderTrav(root.right)];
};

console.log(inorderTrav(nodeA));

module.exports = {
	inorderTrav,
	TreeNode,
};
