let map = new Map()
    map.set("1","name")
    map.set("2","age")
    map.set("3","add")

// console.log(map)
// console.log(map.has("2")) // work on keys
// console.log(map.get("1")) // work on keys to get values

// console.log(map.size)


let map2 = new Map()
let array = [1,2,3,4,5,2,1];

array.forEach(element => {
   
   if(map2.has(element)) {    
      map2.set(element, map2.get(element) + 1)
   }
   else {
     map2.set(element,1)
   }
    
});

console.log(map2)