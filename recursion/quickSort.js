function quickSort(arr , low , high){
  if(low<high){
    let partitionIndex = inPlace(arr,low,high);
    quickSort(arr, low , partitionIndex-1)
    quickSort(arr , partitionIndex+1 , high)
  }
}

function inPlace(arr , low , high){
    let pivot = arr[low];
    let i = low;
    let j = high;
    while( i < j){
        while(arr[i] <= pivot && i <= high){
            i++
        }

        while(arr[j] > pivot && j >= low){
            j--
        }
        
        if(i < j) swapping(arr,i,j)
    }
   
    swapping(arr, low , j)
    return j
}

function swapping(arr , i , j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
}

let arr = [10,3,4,1,4,4,5,6,2]
quickSort(arr , 0, arr.length-1)
console.log(arr)