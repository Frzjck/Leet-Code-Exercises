// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const nodeA = new Node(1);
const nodeB = new Node(2);
const nodeC = new Node(3);
const nodeD = new Node(4);
const nodeE = new Node(5);
const nodeF = new Node(6);
const nodeG = new Node(7);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;
nodeC.right = nodeG;

const maxDepth = (root, depth = 0) => {
	if (!root) return depth;
	return Math.max(
		maxDepth(root.left, depth + 1),
		maxDepth(root.right, depth + 1)
	);
};

console.log(maxDepth(nodeA));
