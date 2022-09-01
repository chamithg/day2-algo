/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (i in nums) {
    num1 = nums[i];
    for (j = i; j < nums.length; j++) {
      num2 = nums[j];
      if (num1 + num2 == target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
