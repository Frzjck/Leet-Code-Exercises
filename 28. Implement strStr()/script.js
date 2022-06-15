// Input: haystack = "hello", needle = "ll"
// Output: 2

const haystack = "aaaaa";
const needle = "bba";
let strStr = (haystack, needle) => {
    if (needle === "") return 0;
    return haystack.indexOf(needle);
};


console.log(strStr(haystack, needle));