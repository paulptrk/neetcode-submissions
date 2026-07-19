class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        
        const charFrequency = new Array(26).fill(0);
        const a = 'a'.charCodeAt(0);

        for (let i = 0; i < s.length; i++) {
            const sCharIndex = s.charCodeAt(i) - a;
            charFrequency[sCharIndex]++;

            const tCharIndex = t.charCodeAt(i) - a;
            charFrequency[tCharIndex]--;
        }

        return charFrequency.every(freq => freq === 0);
    }
}
