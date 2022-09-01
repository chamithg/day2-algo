/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i]; //2

    for (let j = i + 1; j < nums.length; j++) {
      let num2 = nums[j]; //4

      if (num1 + num2 === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([3, 2, 4], 6));
