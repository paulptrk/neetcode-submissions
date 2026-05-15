class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let out = '';
        for (const str of strs) {
            out += str.length + '#' + str;
        }
        return out;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const out = [];
        let lenStr = "";
        for (let i = 0; i < str.length; i++) {
            if (lenStr && str[i] === "#") {
                let len = parseInt(lenStr);
                let decodedStr = "";
                const start = i + 1;
                for (let j = start; j < start + len; j++) {
                    decodedStr += str[j];
                }
                out.push(decodedStr);
                lenStr = "";
                i = start + len - 1;
            } else {
                lenStr += str[i]; 
            }
        }
        return out;
    }
}
