// function recurr(i,n){
//   if(i > n) return;
//   else{
//     console.log(i)
//     recurr(i+1 , n)
//   }
  
// }

// let res = recurr(0,3)


function recurr1(i,n){
  if(i > n) return 
  else{
    recurr1(i+1 , n)
    console.log(i)
  }

}

let res1 = recurr1(0,3)