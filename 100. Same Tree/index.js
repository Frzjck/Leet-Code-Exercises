// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Input: p = [1,2], q = [1,null,2]
// Output: false

// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

a = new Node("1");
b = new Node("2");
c = new Node("3");
a.left = b;
a.right = c;

const compareTrees = (tree1, tree2) => JSON.stringify(tree1) === JSON.stringify(tree2);


module.exports = {
    compareTrees,
    Node
};




// var isSameTree = function(p, q) {
//     if (p === null && q === null) return true
//     if (p === null || q === null) return false

//     if (p.val !== q.val) return false

//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
//   };