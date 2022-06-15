class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const a = new Node(2);
const b = new Node(4);
const c = new Node(3);

const d = new Node(5);
const e = new Node(6);
const f = new Node(4);
const h = new Node(9);

a.next = b;
b.next = c;

d.next = e;
e.next = f;
f.next = h;


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




const listToArr = (head) => {
    if (head === null) return [];
    return [head.val, ...listToArr(head.next)];
};



const arrToList = (arr) => {
    if (arr.length < 1) return null;
    let current = new Node(arr.shift());
    current.next = arrToList(arr);
    return current;
};