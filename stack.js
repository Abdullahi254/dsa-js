// push and pop are an example of LIFO (you can call it a stack implmentation)

// below we are using a linked list to show a stack implementation

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    // basically adding a new node on the top of the stack
    push(val) {
        let newNode = new Node(val)
        if (this.length < 1) {
            this.first = newNode
            this.last = newNode
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        this.length += 1
    }
    // removing the first node as for LIFO
    pop() {
        if (this.length < 1) {
            return null
        }
        if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
            // overwriting first to be the next node after the current first
            this.first = this.first.next
        }
        this.length -= 1
    }
    tranverse() {
        let current = this.first
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}

const instance = new Stack()
instance.push(5)
instance.push(4)
instance.push(3)
instance.push(2)
instance.push(1)
instance.tranverse()
console.log("********************************* After poping(remember last in the stack was 1)")
instance.pop()
instance.tranverse()

// BIG O
// insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)