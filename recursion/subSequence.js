function subSeq(ind, arr, ans) {
  if (ind >= arr.length) {
    for (let i of ans) {
      console.log(i);
    }
    console.log("\n");
    return;
  }

  ans.push(arr[ind]);
  //console.log(ind , ans)
  subSeq(ind + 1, arr, ans);


  ans.pop(arr[ind]);
  //console.log("pop index", ind ,"===== poped ele" ,arr[ind] , "==" , ans)
  subSeq(ind + 1, arr, ans);
}

let arr = [3, 2, 1];
let ans = [];
let res = subSeq(0, arr, ans);
