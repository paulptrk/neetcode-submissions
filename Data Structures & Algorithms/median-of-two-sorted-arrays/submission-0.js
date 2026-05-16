class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const total = nums1.length + nums2.length;
        const half = Math.floor(total / 2);
        let A;
        let B;
        if (nums1.length < nums2.length) {
            A = nums1;
            B = nums2;
        } else {
            A = nums2;
            B = nums1;
        }
        let left = 0;
        let right = A.length - 1;

        while (true) {
            const midA = Math.floor((left + right) / 2);
            const midB = half - (midA + 1) - 1;

            const Aleft = midA >= 0 ? A[midA] : Number.NEGATIVE_INFINITY;
            const Aright = midA + 1 < A.length ? A[midA + 1] : Number.POSITIVE_INFINITY;
            const Bleft = midB >= 0 ? B[midB] : Number.NEGATIVE_INFINITY;
            const Bright = midB + 1 < B.length ? B[midB + 1] : Number.POSITIVE_INFINITY;

            if (Aleft <= Bright && Bleft <= Aright) {
                if (total % 2 === 0) {
                    return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
                } else {
                    return Math.min(Aright, Bright);
                }
            } else if (Aleft > Bright) {
                right = midA - 1;
            } else {
                left = midA + 1;
            }
        }
    }
}
