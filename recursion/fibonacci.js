// function fibo(n){
//   if(n <=1 ) return n
//   return fibo(n-2) + fibo(n-1)
// }

// let res = fibo(6)
// console.log(res)

// var y = 10;
// {
//   var y = 20;
//   function x() {
//     console.log("hi");
//   }
//   x();
// }

// console.log(y);

let b = 200;
{ 
  let b = 20;
  var a = 10;
  function ad(){
    const b = 20
    // let b = 1000;
   console.log(b)
  }

  const c = 30;
  console.log(a); // 10
  console.log(b); // 
  console.log(c);
  ad()
}

console.log(b);
