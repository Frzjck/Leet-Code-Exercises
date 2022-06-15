// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
console.log(!!(10.5 % 10));


const palindromCheck = (num) => {
    const reversed = [...String(num)].reverse().join("");
    if (reversed === String(num)) return true;
    return false;
};



/////// Solution without string convertion
const palindromCheckNoString = (num) => {
    if (num < 0 || num % 1) return false;
    if (num < 10) return true;
    let auxNum = num;
    const numArr = [];
    while (auxNum > 0) {
        numArr.unshift(auxNum % 10);
        auxNum = (Math.floor(auxNum / 10));
    }
    for (let i = 0; i < numArr.length; i++) {
        console.log(numArr[i], numArr.reverse()[i]);
        if (numArr[i] !== numArr.reverse()[i]) return false;
    }
    return true;
};

const isPalindromeElegant = function (x) {
    if (x < 0) return false;
    let reversedInteger = 0;
    for (let i = x; i > 0; i = (i - i % 10) / 10) reversedInteger = reversedInteger * 10 + i % 10;
    return reversedInteger === x;
};