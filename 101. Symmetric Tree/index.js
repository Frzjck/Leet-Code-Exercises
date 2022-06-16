class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// const nodeA = new Node(1);
// const nodeB = new Node(2);
// const nodeC = new Node(3);
// const nodeD = new Node(4);
// const nodeE = new Node(5);
// const nodeF = new Node(6);
// const nodeG = new Node(7);

// const nodeA = new Node(1);
// const nodeB = new Node(2);
// const nodeC = new Node(2);
// const nodeD = new Node(3);
// const nodeE = new Node(4);
// const nodeF = new Node(4);
// const nodeG = new Node(3);

const nodeA = new Node(1);
const nodeB = new Node(2);
const nodeC = new Node(2);
const nodeD = new Node(2);
const nodeE = new Node(2);
const nodeF = new Node(2);
// const nodeG = new Node(3);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;
// nodeC.right = nodeG;

//          A
//     B        C
//   D   E    F   G

const reader = (branchA, branchB) => {
	if (!branchA && !branchB) return true;
	if (!branchA || !branchB) return false;
	const queueA = [branchA];
	const queueB = [branchB];
	while (queueA.length) {
		const currentA = queueA.pop();
		const currentB = queueB.pop();
		if (currentA.val !== currentB.val) return false;
		if (currentA.left && currentB.right) {
			if (currentA.left) queueA.unshift(currentA.left);
			if (currentB.right) queueB.unshift(currentB.right);
		} else if (!currentA.left && !currentB.right) {
		} else return false;

		if (currentA.right && currentB.left) {
			if (currentA.right) queueA.unshift(currentA.right);
			if (currentB.left) queueB.unshift(currentB.left);
		} else if (!currentA.right && !currentB.left) {
		} else return false;
	}
	return true;
};

// Recursive solution

const isSymmetric = (root) => {
	if (root == null) return true;
	return compareBranches(root.left, root.right);
};

const compareBranches = (branchA, branchB) => {
	if (branchA == null && branchB == null) return true;
	if (branchA == null || branchB == null || branchA.val != branchB.val)
		return false;
	return (
		compareBranches(branchA.left, branchB.right) &&
		compareBranches(branchA.right, branchB.left)
	);
};

console.log(isSymmetric(nodeA));
