class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
        if(this.length === 0){
           this.top = newNode;
           newNode.next = null;
        }
        else{
            newNode.next = this.top
            this.top = newNode;
            
        }
        this.length++
        return this
    }

    pop(){
        if(this.length == 0 ) return undefined
        let temp = this.top;
        this.top = temp.next;
        temp.next = null;
        this.length--
        return  temp
    }

    print(){
        let current = this.top;
        if(this.length == 0) console.log("stack is empty")
        while(current !== null){
            console.log(current.val)
            current = current.next
        }
    }
}

const obj = new Stack()
obj.push(10)
obj.push(20)
obj.push(30)
obj.push(40)
// console.log(obj.pop())
obj.print()
console.log(obj)