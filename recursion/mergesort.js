function divide(arr , low , high){
  if(low == high){
    return
  }

  let mid = Math.floor((low+high)/2)
  divide(arr,low,mid)
  divide(arr,mid+1,high)
  merge(arr,low,mid,high)
}

function merge(arr,low,mid,high){
   let temp = []
   let left = low
   let right = mid+1
   while(left <=  mid && right <= high){
    if(arr[left] < arr[right]){
      temp.push(arr[left])
      left++
    }else{
      temp.push(arr[right])
      right++
    }
   }

   while(left <= mid ){
    temp.push(arr[left])
    left++
   }

   while(right <= high){
    temp.push(arr[right])
    right++
   }

   for (let i = 0; i < temp.length; i++) {
    arr[low + i] = temp[i];
  }
  }

let arr = [9,4,1,4,5,6,2]
divide(arr,0,arr.length-1)
console.log(arr)