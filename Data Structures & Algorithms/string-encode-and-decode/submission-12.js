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
        if (typeof str !== 'string') return [];
        if (str.length === 0) return [""];
        const strs = [];
        let newStr = '';
        for (let i = 0; i < str.length; i++) {
            if (i + 1 !== str.length && str[i] === ':' && str[i + 1] === ';') {
                strs.push(newStr);
                newStr = ''
                i++;
            } else {
                newStr += str[i];
            }

        }

        if (newStr != '') {
            strs.push(newStr);
        }

        return strs;
    }
}
