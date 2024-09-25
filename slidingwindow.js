// Maximum sum subarray of size k

let arr  = [1,2,3,4,5];
let k = 3;

function maxsum(arr, k){
    let low = 0;
    let high = k;
    let sum = 0;
    let start = 0;
    let end = 0;
    
    for(let i = low; i < high; i++){
        sum += arr[i];
    }
    
    let max = sum;
    while(high < arr.length){
        // console.log(high, low)
        sum += arr[high] - arr[low];
        max = Math.max(max, sum);
        low++;
        high++;
        start = low;
        end = high;
    }
    return `Subarray: [${arr.slice(start, end)}] with max sum: ${max}`;
}

console.log(maxsum(arr, k))




// Maximum subarray size with sum  equal to 7

let arr1 = [2,1,5,2,8] 
let s = 7

function longestSubarraySum(arr1 , s){

   let high  = 0;
   let low = 0;
   let max = 0;
   let sum = 0;
   let left = 0;
   let right = 0
   let resArr = []
   while(high < arr1.length){
      sum = sum + arr1[high];

      while(sum > s && low <= high){
           sum = sum - arr1[low]
           low++
         }

      if(sum == s){
            left = low;
            right = high;
            max = Math.max(max , high-low+1)
        }
     high++
   }

  resArr = arr1.slice(left , right+1)
  console.log(resArr)
return max
}

let res1 = longestSubarraySum(arr1,s)
console.log(res1)

// // Minimum subarray size with sum greater than or equal to s
let arr2 = [2, 1, 5, 2, 8]
let S = 8

function minimumSubarraySum(arr , S) {
   let low = 0;
   let high = 0;
   let min = Infinity;
   let sum = 0

   while(high < arr.length){
       sum = sum + arr[high]

       while(sum >= S && low <= high){
          min = Math.min(min , high-low+1)
          sum = sum-arr[low]
          low++
       }
       high++
   }
 return min
}

let res2 = minimumSubarraySum(arr2 , S)
console.log(res2)

// anagrams in a string

let str = "cbaebacbad"; //abc // abe // 
let pattern = "cba"; // abc



// function numberOfAnagram(str, pattern) {
//   let low = 0;
//   let high = pattern.length;
//   let resStr = "";
//   let count = 0;
  
//   let sortedString = (s) => s.split('').sort().join('') 
//   resStr = str.slice(low,high)
//   console.log("init",resStr)
//   if(sortedString(resStr) === sortedString(pattern)) count++
//   console.log("init",count)

//   while (high < str.length) {
//     resStr = resStr + str[high];
//     console.log(resStr)// abce
//     resStr = resStr.slice(low+1);
//     console.log(resStr)

//     if (sortedString(resStr) === sortedString(pattern)) {
//       count++;
//     }
//     high++;
//   }
//   console.log(count);
//   return count;
// }

function numberOfAnagram (str,pattern) {
  let patLen = pattern.length;
  let count = 0;
  let index = 0;
  const sortedArray = (s) =>  s.split('').sort().join('')

  while( index < str.length-patLen ) {
    if( sortedArray(str.slice(index , index + patLen)) === sortedArray(pattern)) {
     count++
    }
    index++
  }
 
 console.log("count",count) 
}
numberOfAnagram(str, pattern);
