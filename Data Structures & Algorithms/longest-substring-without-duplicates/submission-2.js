class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let map = new Map();
        let longest = 0;

        for (let right = 0; right < s.length; right++) {
            map.set(s[right], (map.get(s[right]) || 0) + 1);
            while (map.get(s[right]) > 1) {
                map.set(s[left], map.get(s[left]) - 1);
                left++;
            }
            longest = Math.max(longest, right - left + 1);
        }
        return longest;
    }
}
