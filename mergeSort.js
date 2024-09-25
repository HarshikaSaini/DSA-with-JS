let arr = [3, 1, 2, 4];

function mergeSplit(arr) {
    console.log(`\n******************`);
    console.log(`Splitting: [${arr}]`);
    console.log(`******************\n`);
    
    if (arr.length === 1) {
        console.log(`Base case reached: [${arr}]`);
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    
    console.log(`Left: [${left}], Right: [${right}]\n`);
    
    return merge(mergeSplit(left), mergeSplit(right));
}

function merge(arr1, arr2) {
    console.log(`\n##########################`);
    console.log(`Merging: [${arr1}] and [${arr2}]`);
    console.log(`##########################\n`);
    
    let i = 0;
    let j = 0;
    let res = [];
    
    while (i < arr1.length && j < arr2.length) {
        console.log(`Comparing: ${arr1[i]} and ${arr2[j]}`);
        
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            console.log(`Pushed: ${arr1[i]}`);
            i++;
        } else {
            res.push(arr2[j]);
            console.log(`Pushed: ${arr2[j]}`);
            j++;
        }
        console.log(`Current result: [${res}]\n`);
    }
    
    while (i < arr1.length) {
        res.push(arr1[i]);
        console.log(`Pushed from left remainder: ${arr1[i]}`);
        console.log(`Current result: [${res}]\n`);
        i++;
    }
    
    while (j < arr2.length) {
        res.push(arr2[j]);
        console.log(`Pushed from right remainder: ${arr2[j]}`);
        console.log(`Current result: [${res}]\n`);
        j++;
    }
    
    console.log(`Merged result: [${res}]\n`);
    return res;
}

console.log(`\n========== Final Sorted Array ==========`);
console.log(mergeSplit(arr));
console.log(`========================================\n`);