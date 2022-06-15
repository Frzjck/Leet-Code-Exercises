// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Input: head = [1,1,2]
// Output: [1,2]

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

const nodeA = new Node(1);
const nodeB = new Node(1);
const nodeC = new Node(3);
const nodeD = new Node(3);
const nodeE = new Node(5);

nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
nodeD.next = nodeE;

const listReader = (root) => {
	let current = root;
	while (current !== null) {
		console.log(current.val);
		current = current.next;
	}
};

const removeDuplicates = (root) => {
	let current = root;
	let concat = root;
	while (current !== null) {
		if (current?.val !== current?.next?.val) {
			current = current.next;
			concat.next = current;
			concat = current;
		} else {
			current = current.next;
		}
	}
};
removeDuplicates(nodeA);
listReader(nodeA);
module.exports = {};
