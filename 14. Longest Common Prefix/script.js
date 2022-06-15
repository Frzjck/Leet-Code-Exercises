
// //14. Longest Common Prefix START
// function longestCommonPrefix(strs: string[]): string {
// 	let comPrefix: string = "";
// 	let [...destFirstStr] = strs[0];

// 	for (let i = 0; i < destFirstStr.length; i++) {
// 		let currentLetter = destFirstStr[i];
// 		let stop = false;
// 		for (let j = 0; j < strs.length; j++) {
// 			if (currentLetter !== strs[j].charAt(i)) stop = true;
// 		}
// 		if (stop) return comPrefix;
// 		comPrefix += currentLetter;
// 	}
// 	return comPrefix;
// }
// //14. Longest Common Prefix END