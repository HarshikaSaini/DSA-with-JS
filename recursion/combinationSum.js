// sub array should be unique but element can be choose repeatedly

function combination(arr, index, target, res, sumArr) {
  if (index == arr.length) {
    if (target == 0) {
      res.push([...sumArr]);
    }
    return;
  }
  
  if(arr[index] <= target){
  sumArr.push(arr[index])
  combination(arr, index, target-arr[index], res, sumArr)
  sumArr.pop()
  }
  combination(arr, index+1, target, res , sumArr)
}

let arr = [2, 3, 6, 7];
let target = 7;
let res = [];
combination(arr, 0, target, res, new Array());
console.log(res)
