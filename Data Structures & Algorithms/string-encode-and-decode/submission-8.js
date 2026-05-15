class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return [];
        let encodedStr = '';
        for (let i = 0; i < strs.length; i++) {
            encodedStr += strs[i] + ((i !== strs.length - 1) ? ':;' : '');
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        return (typeof str === 'string') ? str.split(':;') : [];
    }
}
