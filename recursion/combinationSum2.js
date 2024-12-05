function combination2(arr,index , target, res , subArr){
   if(target==0){
    res.push([...subArr])
    return
   }

   for(let i = index; i<arr.length; i++){
    if(arr[i] == arr[i-1] &&  i > index) continue;
    if(arr[i] > target) break;
     subArr.push(arr[i]);
     combination2(arr,i+1, target-arr[i] , res , subArr)
     subArr.pop()
   }
}

let arr = [10,1,2,7,6,1,5]
let target = 8;
let res = []
arr.sort((a,b) => a-b)
combination2(arr,0,target,res,new Array())
console.log(res)































// function combination2(arr ,index , res , target , subArr){
//   if(index == arr.length){
//     if(target == 0){
//         res.add(subArr.join(','))
//     }
//     return
//   }


//   if(arr[index] <= target){
//     subArr.push(arr[index])
//     combination2(arr,index+1 , res, target-arr[index] , subArr)
//     subArr.pop()
//   }
//   combination2(arr, index+1, res, target, subArr)

// }

// let arr = [10,1,2,7,6,1,5]
// arr.sort((a,b) => a-b)
// let res = new Set()
// let target = 8
// combination2(arr, 0, res, target , new Array() )
// const unique = Array.from(res).map(item => item.split(',').map(Number))
// console.log(unique)
