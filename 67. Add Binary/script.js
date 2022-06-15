// Given two binary strings a and b, return their sum as a binary string.



// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"


// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

let a = "1",
    b = "11",
    c = "100010";


// const addBinary = (a, b) => (parseInt(a,2)+parseInt(b,2)).toString(2);
// const addBinary = (a, b) => (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
const addBin = (a, b) => Number(a) & Number(b);


// console.log(addBinary(a, b));





const addBinary2 = (a, b) => (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);

//Verguenza de codigo xD
const addBinary = (a, b) => {
    const maxLen = Math.max(a.length, b.length);
    let response = "";
    let acum = 0;
    for (let i = 1; i < maxLen + 1; i++) {
        if (a.at(-i) && b.at(-i)) {
            let sum = parseInt(a.at(-i)) + parseInt(b.at(-i)) + acum;
            acum = 0;
            if (sum > 1) {
                acum = 1;
                sum = sum % 2;
            }
            response = sum + response;
            console.log(sum, acum, response);
        } else {
            if (a.at(-i) || b.at(-i)) {
                let sum = a.at(-i) || b.at(-i);
                sum = parseInt(sum) + acum;
                acum = 0;
                if (sum > 1) {
                    acum = 1;
                    sum = sum % 2;
                }
                response = sum + response;
                console.log(sum, acum, response);

            }
        }
    }
    if (acum) response = acum + response;
    return response;
};



var addBinary3 = function (a, b) {
    let overflow = false;
    let result = "";
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        const x = i >= a.length ? 0 : +a[a.length - i - 1];
        const y = i >= b.length ? 0 : +b[b.length - i - 1];
        result = ((x + y + overflow) % 2) + result;
        overflow = x + y + overflow > 1;
    }
    return overflow ? 1 + result : result;
};



console.log(1 + true);