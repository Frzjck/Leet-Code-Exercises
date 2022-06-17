// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrToBST = (arr) => {
	if (arr === "undefined" || arr.length === 0) return null;
	const midIndex = Math.floor((arr.length - 1) / 2);
	const root = new Node(arr[midIndex]);
	root.left = arrToBST(arr.slice(0, midIndex));
	root.right = arrToBST(arr.slice([midIndex + 1]));
	return root;
};

arrToBST(numArr);
