class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Q {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    // pushing the nodes to the end when new one is added
    enqueue(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.first = newNode
            this.last = this.first
        }
        else {
            this.last.next = newNode
            //overwriting the last node to be the new node added
            this.last = newNode
        }
        this.length += 1
    }
    // removing the nodes added first in the queue
    dequeue() {
        if (this.length < 1) {
            return null
        }
        if (this.length === 1) {
            this.first = null
            this.last = null
        } else {
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

const instance = new Q()
instance.enqueue(1)
instance.enqueue(2)
instance.enqueue(3)
instance.enqueue(4)
instance.enqueue(5)
instance.tranverse()
console.log("********************************* After-poping(remember first in the queue was 1)")
instance.dequeue()
instance.tranverse()

// BIG O
// insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)