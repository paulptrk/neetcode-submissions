class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            const leftChar = s[left].toLocaleLowerCase();
            const rightChar = s[right].toLocaleLowerCase();

            const leftCode = leftChar.charCodeAt(0);
            const rightCode = rightChar.charCodeAt(0);

            if (!(leftCode >= 48 && leftCode <= 57) && !(leftCode >= 97 && leftCode <= 122)) {
                left++;
                continue;
            }
            if (!(rightCode >= 48 && rightCode <= 57) && !(rightCode >= 97 && rightCode <= 122)) {
                right--;
                continue;
            }

            if (leftChar !== rightChar) {
                return false;
            }

            left++;
            right--;

        }

        return true;
    }
}

