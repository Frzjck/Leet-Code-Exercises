// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const listReader = (head) => {
    const queue = [head];
    const resultList = [];
    while (queue.length > 0) {
        const current = queue.pop();
        resultList.push(current.val);
        if (current.next !== null) queue.push(current.next);
    }
    console.log(resultList);
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const newQueue = [a, b, c];

const reverseQueue = (queue) => {
    let prev = null;
    while (queue.length > 0) {
        const current = queue.shift();
        current.next = prev;
        prev = current;
    }
};

const reverseKGroup = (head, k) => {
    if (head === null) return null;
    let queue = [];
    let current = head;
    for (let i = 0; i < k; i++) {
        if (current === null) return head;
        queue.push(current);
        current = current.next;
    }

    let first = queue.at(-1);
    reverseQueue(queue);
    
    head.next = reverseKGroup(current, k);
    return first;
};


listReader(reverseKGroup(a, 3));










// const reverseKGroup = (head, k) => {
//     const resultList = [];
//     const queue = [head];

//     while (queue.length > 0) {
//         let currentSegment = [];

//         for (let i = 0; i < k; i++) {
//             if (queue.length > 0) {
//                 const current = queue.pop();
//                 currentSegment.unshift(current.val);
//                 if (current.next !== null) queue.unshift(current.next);
//             } else {
//                 currentSegment = currentSegment.reverse();
//                 break;
//             }
//         }
//         resultList.push(...currentSegment);
//     }
//     return resultList;
// };