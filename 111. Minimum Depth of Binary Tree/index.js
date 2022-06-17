// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

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

const minDepth = (root) => {
	if (root === null) return Infinity;
	if (root.left === null && root.right === null) return 1;
	return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
