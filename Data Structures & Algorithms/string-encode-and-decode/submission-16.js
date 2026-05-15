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
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            let len = parseInt(str.substring(i, j));

            i = j + 1;

            out.push(str.slice(i, i + len));

            i += len;
        }

        return out;
    }
}
