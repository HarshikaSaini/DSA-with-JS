
let arr = [5,2,4,1,3];

function iSort(arr) {
 
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; 
        for (var j = i-1; j>=0 && arr[j] > key; j--){
            
                arr[j+1] = arr[j];
        }
        arr[j+1] = key;
        console.log(key , arr[j])
    
 }
    return arr;
}
console.log(iSort(arr))
