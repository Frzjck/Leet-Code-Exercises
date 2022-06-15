// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

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
// const h = new Node(9);

a.next = b;
b.next = c;

d.next = e;
e.next = f;
// f.next = h;








const sumArr = (arr1, arr2) => {
    const resultArr = [];
    const bigArr = arr1.length > arr2.length ? arr1 : arr2;
    const smallArr = arr1.length > arr2.length ? arr2 : arr1;
    let acum = 0;

    for (let i = 0; i < bigArr.length; i++) {
        const a = bigArr[i];
        const b = smallArr[i] ? smallArr[i] : 0;
        if ((a + b + acum) > 9) {
            resultArr[i] = (a + b + acum) % 10;
            acum = 1;
        } else {
            resultArr[i] = a + b + acum;
            acum = 0;
        }
    }
    if (acum > 0) resultArr.push(acum);

    return resultArr;
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


const addTwoNumbers = (l1, l2) => {
    return arrToList(sumArr(listToArr(l1), listToArr(l2)));
};