function fact(n) {
  if (n == 1) return 1;
  else {
    console.log(n)
    ans = fact(n - 1);
    return ans * n;
  }
}

let res = fact(5);
console.log(res);
