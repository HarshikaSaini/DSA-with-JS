class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor(val) {
    const newNode = new Node(val);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(val) {
    // o(1)
    const newNodeToPush = new Node(val);
    if (!this.head) {
      this.head = newNodeToPush;
      this.tail = this.head;
    } else {
      this.tail.next = newNodeToPush;
      this.tail = newNodeToPush;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    console.log("deleted", temp);
    return this;
  }

  unshift(val) {
    const valToAdd = new Node(val);
    valToAdd.next = this.head;
    this.head = valToAdd;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    // if (this.length === 0) {
    //   this.tail = null;
    // }
    if(this.length == 1) {
      this.head = null;
      this.tail=null
      this.length--
      return this
    }
    let temp = this.head; // [ , ]     [ , ] -> [ , ]       [ , ]
    this.head = temp.next;
    temp.next = null;
    this.length--;
    console.log("deleted", temp);
    return temp;
  }

  get(index) {
    console.log(index);
    let temp = this.head;
    if (index > this.length || index < 0) return undefined;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    console.log("get", temp);
    return temp;
  }

  set(index, val) {
    let temp = this.get(index);
    if (temp) {
      temp.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index == 0) return this.unshift(val);
    if (index == this.length) return this.push(val);
    if (index > this.length || index < 0) return false;

    const newNode = new Node(val);
    let temp = this.get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    if (index < 0 || index > this.length - 1) return undefined;

    let before = this.get(index - 1);
    let temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return this;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return temp;
  }

  findMiddle() {
    return this.get(Math.floor(this.length / 2));
  }

  removeDuplicatesFromSortedList() {
    let temp = this.head;
    while (temp !== null && temp.next !== null) {
      if (temp.val === temp.next.val) {
        temp.next = temp.next.next;
        this.length--
      } else {
        temp = temp.next;
      }
    }
    return this;
  }

  removeDuplicatesFromUnsortedList(){
    let set = new Set()
    let current = this.head
    let temp = null
    while(current !== null){
      if( set.has(current.val) ) {
         temp.next = current.next
         this.length--
      }
      else{
         set.add(current.val)
         temp = current
      }
      current = current.next
    }
    return this
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let first = new SinglyLinkList(10);
// first.push(25);
// first.push(30);
// first.push(35);
// first.push(40);
// first.insert(1,100)
// first.printList()

first.push(20);
first.push(30);
first.push(20);
first.push(40);
first.push(50);
first.push(30);
first.push(60);
first.printList()
console.log("----------")
// first.reverse()
// first.findMiddle()
first.removeDuplicatesFromUnsortedList();
first.printList();
console.log(first.length);
