// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
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

const isBalanced = (root) => {
	return reader(root) === false ? false : true;
};

const reader = (root) => {
	if (root === null) return -1;
	const depthLeft = reader(root.left);

	if (depthLeft === false) return false;
	const depthRight = reader(root.right);

	if (depthRight === false) return false;
	if (Math.abs(depthLeft - depthRight) > 1) return false;
	return Math.max(depthLeft, depthRight) + 1;
};

console.log(isBalanced(nodeA));
