let arr = [5,3,1,4,2]

for(let i = 0; i < arr.length-1; i++){
  let min = i; // 2
  for(let j = i+1; j < arr.length; j++){// 3
    if(arr[min] > arr[j]){
        min = j
    }
  }
  let temp =  arr[i]
  arr[i] = arr[min]
  arr[min] = temp // 1,3,5,4,2
}

console.log(arr)