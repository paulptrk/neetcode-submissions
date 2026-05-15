class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const hashMap1 = {};
        const hashMap2 = {};

        for (let i = 0; i < s.length; i++) {
            hashMap1[s[i]] = (hashMap1[s[i]] ?? 0) + 1;
            hashMap2[t[i]] = (hashMap2[t[i]] ?? 0) + 1;
        }

        for (let char in hashMap1) {
            if (hashMap1[char] !== hashMap2[char]) return false;
        }

        return true;
    }
}
