/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    const LastKElements = nums.splice(-k,k)
    nums.unshift(...LastKElements)
    console.log(LastKElements)
};