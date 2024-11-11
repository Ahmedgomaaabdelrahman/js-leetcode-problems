/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let occuranceObj = {}
    // for (let i = 0; i < nums.length ; i++ ){
    //     if (nums[i] in occuranceObj) {
    //         return true
    //     }
    //     occuranceObj[nums[i]] = 1
    // }
    // return false
    let numsSet = new Set(nums)
    return numsSet.size != nums.length

};