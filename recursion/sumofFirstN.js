function firstN(sum , n){
  if(n < 1) return sum;
  else{
    console.log("n" , n)
    sum = firstN(sum, n-1) + n
    console.log("sum =============",sum)
    return sum
  }
}


let res = firstN(0 , 3)
console.log(res)