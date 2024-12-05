let nums = [1,2,3]
let target = 4

var combinationSum4 = function (nums, target) {
    let res = []
    let count = { value : 0}
    combination(nums, 0, target, res, new Array(), count)
    return count;
};

function combination(arr, index, target, res, subArr, count) {
    if (index == target) {
        if (target == 0) {
            res.push([...subArr]) 
            count.value += 1
            console.log("indside base case", count)
            
        }
        return 
    }


    if (arr[index] <= target) {
        subArr.push(arr[index])
        console.log("Before calling ------- index--", index , "count --", count)
        combination(arr, index, target - arr[index], res, subArr, count)
        console.log("After calling ------- index--", index , "count --", count)
        subArr.pop()
    }
    combination(arr, index + 1, target, res, subArr, count)
}

let k = combinationSum4(nums, target)
console.log(k)