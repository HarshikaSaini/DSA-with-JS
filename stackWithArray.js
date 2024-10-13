class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
    return this.stack;
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    let temp = this.stack.pop();
    return temp;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack[this.size() - 1];
  }

  isEmpty() {
    if (this.size() === 0) return true;
    else return false;
  }

  size() {
    return this.stack.length;
  }

  reverseString(strInput) {
    let finalString = "";
    let res = strInput.split(" ");
    for (const element of res) {
      this.push(element);
    }

    while (!this.isEmpty()) {
      finalString += " " + this.pop();
    }

    return finalString.trim();
  }

  validParanthese(p) {
    let stack = new Stack();
    for (let i = 0; i < p.length; i++) {
      let char = p[i];
      if (char == "(" || char == "{" || char == "[") {
        stack.push(char);
      } else if (char == ")" || char == "}" || char == "]") {
        if (stack.isEmpty()) {
          return false;
        }

        let top = stack.pop();
        if (
          (char === ")" && top !== "(") ||
          (char === "}" && top !== "{") ||
          (char === "]" && top !== "[")
        ) {
          return false;
        }
      }
    }
    return stack.isEmpty();
  }

  print() {
    for (const element of this.stack) {
      console.log(element);
    }
  }
}

let obj = new Stack();
// obj.push(10)
// obj.push(20)
// obj.push(30)
// obj.push(40)
// console.log(obj.reverseString("Hello world"))
// console.log(obj.peek())
// console.log(obj.isEmpty())
// obj.pop()
console.log(obj.validParanthese("(())}"));
// console.log(obj)
