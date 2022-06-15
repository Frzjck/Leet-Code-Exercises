const { inorderTrav, TreeNode } = require("./index");

describe("zero", () => {
	it("should return empty array if no root", () => {
		expect(inorderTrav()).toEqual([]);
	});
});
describe("one", () => {
	it("should return array containing single value if passed one node", () => {
		const nodeA = new TreeNode(1);
		const nodeB = new TreeNode(2);
		const nodeC = new TreeNode(3);
		expect(inorderTrav(nodeA)).toEqual([1]);
		expect(inorderTrav(nodeB)).toEqual([2]);
		expect(inorderTrav(nodeC)).toEqual([3]);
	});
});
describe("many", () => {
	it("should return inorder traversed graph", () => {
		const nodeA = new TreeNode(1);
		const nodeB = new TreeNode(2);
		const nodeC = new TreeNode(3);
		const nodeD = new TreeNode(4);
		const nodeE = new TreeNode(5);
		nodeA.left = nodeB;
		nodeA.right = nodeC;
		nodeB.left = nodeD;
		nodeB.right = nodeE;
		expect(inorderTrav(nodeA)).toEqual([4, 2, 5, 1, 3]);
	});
});
