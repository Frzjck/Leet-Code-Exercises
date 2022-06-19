export class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

export const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);
const f = new ListNode(6);
const h = new ListNode(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = h;

export const listReader = (head) => {
	const queue = [head];
	const resultList = [];
	while (queue.length > 0) {
		const current = queue.pop();
		console.log(current.val);
		resultList.push(current.val);
		if (current.next !== null) queue.push(current.next);
	}
};

export const listToArr = (head) => {
	if (head === null) return [];
	return [head.val, ...listToArr(head.next)];
};

export const arrToList = (arr) => {
	if (arr.length < 1) return null;
	let current = new ListNode(arr.shift());
	current.next = arrToList(arr);
	return current;
};
