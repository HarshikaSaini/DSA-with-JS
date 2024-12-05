function rev(i,j,arr){
  if(i >= j) return ;
  else{
    swap(i,j,arr)
    rev(i+1, j-1, arr)
  }
}

function swap(i,j,arr){
  let temp = arr[i];
  arr[i] = arr[j]
  arr[j] = temp
}

let arr = [1,5,6,7,2]
let res = rev(0, arr.length-1, arr)
console.log(arr)