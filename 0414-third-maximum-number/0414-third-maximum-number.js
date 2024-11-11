/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const uniqueNums = [...new Set(nums)]

    if(uniqueNums.length < 3) {
        return Math.max(...uniqueNums);
    }

    uniqueNums.sort((a, b) => b - a)
    return uniqueNums[2]
};