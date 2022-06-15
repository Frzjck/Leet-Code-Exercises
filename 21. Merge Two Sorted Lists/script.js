// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(4);
const c = new Node(6);

const d = new Node(2);
const e = new Node(3);
const f = new Node(7);
const h = new Node(9);

a.next = b;
b.next = c;

d.next = e;
e.next = f;
f.next = h;


const mergeTwoLists = (list1, list2) => {
    if (!list1 || !list2) return list1 || list2;
    if (list1 === null) return list2;
    const smaller = list1.val < list2.val ? list1 : list2;
    const bigger = list1.val > list2.val ? list1 : list2;
    smaller.next = mergeTwoLists(smaller.next, bigger);
    return smaller;
};


// var mergeTwoLists = function (l1, l2) {
// 	if (!l1 || !l2) return l1 || l2
// 	if (l1.val < l2.val) {
// 		l1.next = mergeTwoLists(l1.next, l2)
// 		return l1
// 	} else {
// 		l2.next = mergeTwoLists(l1, l2.next)
// 		return l2
// 	}
// }

const listReader = (head) => {
    const queue = [head];
    const resultList = [];
    while (queue.length > 0) {
        const current = queue.pop();
        console.log(current.val);
        resultList.push(current.val);
        if (current.next !== null) queue.push(current.next);
    }
    console.log(resultList);
};




listReader(mergeTwoLists(a, d));