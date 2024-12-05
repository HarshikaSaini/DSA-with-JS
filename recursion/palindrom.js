function palindrom(i,j,str){
    
  if(i >= j) return true;
  else{
    if(str[i] !== str[j]){
      return false
    }
    return palindrom(i+1 , j-1 , str)
  }
}

let str = "naman"
let res = palindrom(0, str.length - 1 , str)
console.log(res)