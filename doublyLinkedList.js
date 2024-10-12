class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    let temp = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    // return this;
    return temp;
  }

  unshiift(val){
    const newNode = new Node(val)
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
    }else{
        newNode.next = this.head;
        this.head.prev = newNode
        this.head = newNode;
        newNode.prev = null 
    }
    this.length++
    return this
  }

  shift(){
    if(this.length == 0) return undefined
    if(this.length == 1) {
      this.head = null;
      this.tail=null
      this.length--
      return this
    }
    let temp = this.head
    // this.head.next =  temp.next
    this.head = this.head.next;
    this.head.prev = null
    temp.next=null
    this.length--
    return this
  }

  get(index) {
    if(index < 0 || index > this.length) return undefined
    let temp = this.head
    for(let i = 0; i<index; i++){
      temp = temp.next
    }
    return temp
  }

  
  set(index,val){
    let newNode = new Node(val)
    if(index < 0 || index > this.length) return undefined
    if(this.length == 1){
      this.head = newNode
      newNode.prev = null
      newNode.next = null
      return this
    }else{
      let temp = this.get(index)
      temp.val = newNode.val
    }
  return this
  }

  insert(index,val){
    let temp = this.get(index);
    let newNode = new Node(val);
    newNode.prev = temp.prev
    newNode.next = temp.prev.next
    temp.prev.next = newNode;
    temp.prev = newNode.next
    this.length++
    console.log(newNode)
    return this
  }

  remove(index){
    if(index < 0 || index > this.length) return undefined
    if(index == 0) return this.shift()
    if(index == this.length) return this.pop()
    
    let temp = this.get(index);
    temp.prev.next = temp.next
    temp.next.prev = temp.prev
    temp.prev = null;
    temp.next = null
    this.length--
    return temp
  }
  

 swapHeadAndTail(){
  if(this.length == 1) return ;
  let temp = new Node();
  temp.val = this.head.val;
  this.head.val = this.tail.val;
  this.tail.val = temp.val;
  return this
 }

 
 reverse(){
  let temp = null;
  let current = this.head
  // this.head.next = this.head.prev 
  // this.head.prev = temp;
  while(current !== null){
   temp = current.prev
   current.prev = current.next
   current.next = temp
   current = current.prev
  }

  temp = this.head;
  this.head = this.tail;
  this.tail = temp
 return this

 }


 isCyclic(){
  let fast = this.head;
  let slow = this.head;
  while(fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next
    if(fast == slow ){
      return true
    }
   
  }
  return false
 }

 palindrome(){
  let left = this.head;
  let right = this.tail;
  if(this.length == 1) return this.head
  for(let i = 0; i < Math.floor(this.length / 2); i++){
    if(left.val !== right.val) return false
    left = left.next
    right = right.prev
  }
  return true
 }

print() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let obj = new DoublyLinkedList(10);
obj.push(20);
obj.push(10);
// obj.pop()
// let res = obj.pop();
// obj.unshiift(25)
// obj.unshiift(30)
// obj.shift()
// console.log(res)
// let res =  obj.get(2)
// console.log(res)
// obj.insert(2,100)
// obj.set(2,100)
// obj.remove(0)
// obj.swapHeadAndTail()
// obj.reverse()
// obj.tail.next = obj.head.next
// let res = obj.isCyclic()
// console.log(res)
console.log(obj.palindrome())
obj.print();
console.log(obj);
