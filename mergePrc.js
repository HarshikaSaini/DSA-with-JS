

// function splitArray(array){
//  if(array.length == 1) return array
//   let mid = Math.floor(array.length/2)
//   let left = array.slice(0,mid)
//   let right = array.slice(mid)

//   return mergeSorted(splitArray(left),splitArray(right))
// }


// function mergeSorted(array1,array2){
//    let i = 0;
//    let j = 0;
//    let res = []
//    while(i < array1.length && j < array2.length ){
//     if(array1[i] < array2[j]){
//     res.push(array1[i])
//     i++}
//    else {
//     res.push(array2[j])
//     j++
//    }
//   }

//   while(i < array1.length){
//     res.push(array1[i])
//     i++
//   }

//   while(j < array2.length){
//     res.push(array2[j])
//     j++
//   }

//   return res

// }

// console.log( splitArray(array) )



// function selctionSort(array){
//    for(let i = 0 ; i < array.length-1; i++){
//      let min = i;

//      for(var j = i+1 ; j < array.length; j++) {
//         if(array[min] > array[j]){
//             min = j;
//         }
//      }

//      let temp = array[i];
//      array[i] = array[min];
//      array[min] = temp
//    }

//    return array
// }

// console.log(selctionSort(array))

// function insertionSort(array) {
  
//   for(let i = 1 ; i<array.length; i++){
//     let key = array[i];
//     let j = i-1;
//     while( j >= 0  && array[j] > key) {
//       array[j+1] = array[j]
//       j--;
//     }
//     array[j+1] = key
//   }
 
//   return array
 
// }


// console.log(insertionSort([5,-1,4,3,0]))


