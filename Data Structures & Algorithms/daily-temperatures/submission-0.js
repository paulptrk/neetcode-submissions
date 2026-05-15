class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const stack = [];
    const res = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      while (
        stack.length > 0 &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        const top = stack.pop();
        res[top] = i - top;
      }
      stack.push(i);
    }

    return res;
  }
}