function quickSort(array) {
   
    let left = [];
    let right = [];
    let pivot = array[0]
    
  if (array.length <= 1) return array;

  for (let i = 1; i < array.length ; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log( quickSort([-4, 5, -1, 3, 2, -9]) );
