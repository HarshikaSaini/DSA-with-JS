//longest substring with exactly 2 distinct character

let str = "araaaaacii"
let k = 2; 
let resStr = ""
let low = 0 ;
let high = k;
let left = 0;

let max = 0

resStr = str.slice(low,k) //ar

while(high < str.length) { // 2<6 // 3<6 // 4<6 // 5<6
    resStr = resStr + str[high] //ara araa araac
    let set = new Set(resStr.split(''))
    size = set.size // 2 //3
   

    if(size > k){
      resStr = resStr.slice(low+1) //raac  //aac //aaci  //aci
      low++ //1 //2 //3 //4
    }

    if(set.size == k){
        left = low
        max = Math.max(max,high-low+1) 
    }
    high++ 
    
}
console.log(str.slice(left,max))
console.log(max)



