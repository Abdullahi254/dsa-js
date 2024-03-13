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
    get(index) {
        // returning null if index is out of range
        if (index >= this.length || index < 0) return null
        // creating 2 starting points in the loop to cut time complexity down by half
        let pointer1 = this.head
        let pointer2 = this.tail
        let counter = 0
        let counter2 = this.length - 1
        // if index is equal to counter the node has been found
        while (index != counter && index != counter2) {
            pointer1 = pointer1.next
            pointer2 = pointer2.prev
            counter += 1
            counter2 -= 1
        }
        if (index == counter) return pointer1
        if (index == counter2) return pointer2
    }
    // replacing a value 
    set(index, val) {
        // returning null if index is out of range
        if (index >= this.length || index < 0) return null
        // creating 2 starting points in the loop to cut time complexity down by half
        let pointer1 = this.head
        let pointer2 = this.tail
        let counter = 0
        let counter2 = this.length - 1
        // if index is equal to counter or counter2 the node has been found
        while (index != counter && index != counter2) {
            pointer1 = pointer1.next
            pointer2 = pointer2.prev
            counter += 1
            counter2 -= 1
        }
        if (index == counter) {
            pointer1.val = val
            return
        }
        if (index == counter2) {
            pointer2.val = val
            return
        }
    }
    insert(index, val) {
        // if index is 0 return unshift
        if (index === 0) {
            return this.unshift(val)
        }
        // if index is equal to length return push
        if (index === this.length) {
            return this.push(val)
        }
        // index out of range
        if (index > this.length || index < 0) {
            return false
        }
        let newNode = new Node(val)
        // get the previous node
        let prevNode = this.get(index - 1)
        // get the current node
        let currentNode = prevNode.next
        // set the next of new node to current
        newNode.next = currentNode
        // set the previous of new Node to previous node
        newNode.prev = prevNode
        // set the next of prevNode to new node
        prevNode.next = newNode
        // set the prev of current node to new node
        currentNode.prev = newNode
        this.length += 1
    }
    remove(index) {
        // if index is 0 return shift
        if (index === 0) {
            return this.shift()
        }
        // if index is equal to length return pop
        if (index === this.length - 1) {
            return this.pop()
        }
        // index out of range
        if (index >= this.length || index < 0) {
            return false
        }
        // get the node b4 the one to be removed
        let prevNode = this.get(index - 1)
        // get the node that is to be deleted
        let toBeDelNode = prevNode.next
        // get the node after the one to be deleted
        let afterNode = toBeDelNode.next
        // overwrite the next of prevNode with the afterNode
        prevNode.next = afterNode
        // overwrite the prev of the afterNode
        afterNode.prev = prevNode
        // completely remove any link of del node to the list
        toBeDelNode.prev = null
        toBeDelNode.next = null
        this.length -= 1
    }
    reverse() {
        // changing head to be tail and tail to be head
        let node = this.tail
        this.tail = this.head
        this.head = node
        let next;
        let prev = null
        for (let i = 0; i < this.length; i++) {
            next = node.prev
            node.next = next
            node.prev = prev
            // seting up next iteration
            prev = node
            node = next
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
// myList.reverse()
// console.log(myList.get(0))
// myList.insert(1, 23)
myList.remove(1)
myList.traverse()
// myList.pop()
// console.log("****************")
// myList.traverse()

