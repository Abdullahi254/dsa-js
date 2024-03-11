class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        // if length is 0
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            //set prev of new tail to be previous tail
            newNode.prev = this.tail
            // setting next of current tail to be the new tail
            this.tail.next = newNode
            // setting new tail to be the new node
            this.tail = newNode
        }
        // length increment
        this.length += 1;
    }
    pop() {
        // don't do anyhing if length is 0
        if (this.length < 1) return
        // reset list if it has only one node to be popped
        if (this.length == 1) {
            this.head = null
            this.tail = null
            this.length = 0
            return
        }
        // get the second last node
        let secondLast = this.tail.prev
        // set it's next to null
        secondLast.next = null
        // overwrite the tail to be the secondLast node for it to be the last node now
        this.tail = secondLast
        this.length -= 1
    }
    //removing the first node
    shift() {
        // don't do anyhing if length is 0
        if (!this.head) return
        // reset list if it has only one node to be shifted
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length = 0
            return
        }
        // get the second node in list
        let secondNode = this.head.next
        // sever the link to the head
        secondNode.prev = null
        // make the second node the new head
        this.head = secondNode
        this.length -= 1;
    }
    // adding a new node from the start of the lists
    unshift(val) {
        // if list is empty apply push method
        if (!this.head) {
            this.push(val)
        } else {
            // create new Node
            let newNode = new Node(val)
            // set new node's next to point to the current head
            newNode.next = this.head
            // set the current head prev to point to new Node(now it has become a normal second node)
            this.head.prev = newNode
            // make the new node to be the new head
            this.head = newNode
            this.length += 1
        }
    }
    traverse() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}

const myList = new DoublyLinkedList()
myList.push(1)
myList.push(2)
myList.push(3)
myList.push(4)
// myList.shift()
myList.unshift(78)
myList.traverse()
// myList.pop()
// console.log("****************")
// myList.traverse()
