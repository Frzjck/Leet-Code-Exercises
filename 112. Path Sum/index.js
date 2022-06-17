// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const nodeA = new Node(1);
const nodeB = new Node(2);
const nodeC = new Node(2);
const nodeD = new Node(3);
const nodeE = new Node(3);
const nodeF = new Node(4);
const nodeG = new Node(4);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;
nodeC.right = nodeG;

const rootToLeaf = (root, sum) => {
	if (root === null) return Infinity;
	if (root.left === null && root.right === null) return root.val - sum === 0;
	return (
		rootToLeaf(root.left, sum - root.val) ||
		rootToLeaf(root.right, sum - root.val)
	);
};
