function countSumSeq(ind, arr, sumInner, sum, resArr) {
  if (ind == arr.length) {

    if (sum == sumInner) {
      for (const i of resArr) {
        console.log(i);
      }
      console.log("\n")
    }
    return;
  }

  resArr.push(arr[ind])
  sumInner +=  arr[ind]
  countSumSeq(ind+1 , arr ,  sumInner, sum, resArr)

  sumInner = sumInner - arr[ind]
  resArr.pop(arr[ind])
  countSumSeq(ind+1 , arr ,  sumInner, sum, resArr)
}

let arr = [1,2,1];
let sum = 2;
let resArr = [];
let res = countSumSeq(0, arr, 0, sum, resArr);