// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// 1 Open brackets must be closed by the same type of brackets.
// 2 Open brackets must be closed in the correct order.


const trueString1 = "({})";

const trueString2 = "({[]}[])";

const trueString3 = "({}[])";

const trueString4 = "([()](()){()}[])";




const falseString1 = "({)";
const falseString2 = "[(])";
const falseString3 = "[({]})";
const falseString4 = "({[[(][)]]})";


const isValid = (s) => {
    const scope = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") scope.push(s[i]);
        else if (s[i] === ")" && scope[scope.length - 1] === "(" ||
            s[i] === "]" && scope[scope.length - 1] === "[" ||
            s[i] === "}" && scope[scope.length - 1] === "{") scope.pop();
        else return false;
    }
    return !(scope.length);
};



const isValid2 = function (s) {
    const left = [];
    const legend = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            left.push(s[i]);
        } else if (legend[left.pop()] !== s[i]) {
            return false;
        }
    }
    return left.length ? 0 : 1;
};




console.log(isValid2(trueString4));