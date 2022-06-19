export class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

export const treeA = () => {
	const nodeA = new TreeNode(1);
	const nodeB = new TreeNode(2);
	const nodeC = new TreeNode(3);
	const nodeD = new TreeNode(4);
	const nodeE = new TreeNode(5);
	const nodeF = new TreeNode(6);
	const nodeG = new TreeNode(9);
	nodeA.left = nodeB;
	nodeA.right = nodeC;
	nodeB.left = nodeD;
	nodeB.right = nodeE;
	nodeC.left = nodeF;
	nodeC.right = nodeG;
	return nodeA;
};

export const treeReader = (root) => {
	const queue = [root];
	while (queue.length) {
		const current = queue.pop();
		console.log(current);
		if (current.left) queue.unshift(current.left);
		if (current.right) queue.unshift(current.right);
	}
};

export const arrayToTree = (arr) => {
	const nodeArr = arr.map((elem) => new TreeNode(elem));
	for (let i = 0; i < nodeArr.length; i++) {
		if (nodeArr[i]) {
			nodeArr[i].left = nodeArr[i * 2 + 1] || null;
			nodeArr[i].right = nodeArr[i * 2 + 2] || null;
		}
	}
	return nodeArr[0];
};
