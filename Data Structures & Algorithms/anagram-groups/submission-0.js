class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {};

        for (let str of strs) {
            const anagramArr = new Array(26).fill(0);
            for (let char of str) {
                anagramArr[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = anagramArr.join(',');
            if (hashMap[key] === undefined) hashMap[key] = [];
            hashMap[key].push(str);
        }
        return Object.values(hashMap);
    }
}
