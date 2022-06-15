// //66. Plus One START
// function plusOne(digits: number[]): number[] {
// 	if (digits.length === 1 && digits[0] === 9) {
// 		digits[0] = 0;
// 		digits.unshift(1);
// 		return digits;
// 	} else if (digits[digits.length - 1] === 9) {
// 		for (let i = 0; i < digits.length; i++) {
// 			if (digits[digits.length - 1] === 9) {
// 				digits[digits.length - 1] = 0;
// 				digits[digits.length - 2 - i] += 1;
// 			} else if (digits[digits.length - 1 - i] === 10) {
// 				if (digits[0] === 10) {
// 					digits.splice(1, 0, 0);
// 					digits[0] = 1;
// 					break;
// 				}
// 				digits[digits.length - 1 - i] = 0;
// 				digits[digits.length - 2 - i] += 1;
// 			} else break;
// 		}
// 	} else {
// 		digits[digits.length - 1] += 1;
// 	}
// 	return digits;
// }
// //66. Plus One END