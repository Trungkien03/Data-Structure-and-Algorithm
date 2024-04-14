/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/
/*  =>  this code is got Time Limit Exceeded error cause it got two loop, cause reduce performance
 
function containsDuplicate(nums: number[]): boolean {
  if (nums.length < 0) {
    return false;
  }
  let saveNum: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < saveNum.length; j++) {
      if (nums[i] === saveNum[j]) {
        return true;
      }
    }
    saveNum.push(nums[i]);
  }

  return false;
}

*/
function containsDuplicate(nums) {
    const saveNumList = new Set();
    for (const num of nums) {
        if (saveNumList.has(num)) {
            return true;
        }
        saveNumList.add(num);
    }
    return false;
}
console.log("====================================");
console.log(containsDuplicate([2, 14, 18, 22]));
console.log("====================================");
