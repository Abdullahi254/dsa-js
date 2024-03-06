class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1
        return this
    }

    pop() {
        let current = this.head
        if (this.head === null) {
            console.log("NO list to pop")
            return undefined
        }
        if (this.head.next === null) {
            this.head = null
            this.tail = null
            this.length -= 1
            console.log("cleared list")
            return
        }
        while (current) {
            //find the second to last item
            if (current.next.next === null) {
                //change second to last item's next to null
                current.next = null
                this.length -= 1
                return
            }
            current = current.next
        }
    }
    // removing the first element of the list
    shift() {
        if (this.head === null) {
            console.log("NO list to pop")
            return undefined
        }
        if (this.head.next === null) {
            this.head = null
            this.tail = null
            this.length -= 1
            console.log("cleared list")
            return
        }
        //find the head and the next node in the list
        //replace the head with the next node
        let newHead = this.head.next
        this.head = newHead
        this.length -= 1
    }

    // adding new node at the top of the list
    unshift(val) {
        if (this.length > 0) {
            // create a new node
            const newHead = new Node(val)
            // replace the new node's next with the current head
            newHead.next = this.head
            //replace the current head with the new node
            this.head = newHead
            this.length += 1
        }
        else {
            this.push(val)
        }
    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        // traversing through the list
        while (current) {
            // if the index matches the counter return the node
            if (index === counter) {
                return current.val
            }
            counter += 1
            current = current.next
        }
    }
    //overwriting the value of an excisting node
    set(index, val) {
        if (index > this.length - 1 || index < 0) return false
        let current = this.head
        let counter = 0
        while (counter !== index) {
            current = current.next
            counter++
        }
        current.val = val
        return true
    }
    //inserting new node between two existing nodes
    insert(index, val) {
        //push if it's at the end
        if (index === this.length) {
            this.push(val)
            return
        }
        //unshift whrn index is 0
        if (index === 0) {
            this.unshift(val)
            return
        }
        // when out of range return false
        if (index < 0 || index > this.length) {
            return false
        }
        const newNode = new Node(val)
        // find the node before where the new node is to be inserted
        let preNode = this.head
        let counter = 0
        while (counter !== index - 1) {
            preNode = preNode.next
            counter++
        }
        // current is the node after
        let current = preNode.next
        // overwrite the next of newNode with the current
        newNode.next = current
        // overwrite the next of prevnode with the the new node
        preNode.next = newNode
        this.length += 1;
        return true
    }
    remove(index, val) {
        //pop if index is at the end
        if (index === this.length - 1) {
            this.pop()
            return
        }
        // shift if index is 0
        if (index === 0) {
            this.shift()
            return
        }
        // when out of range return false
        if (index < 0 || index > this.length - 1) {
            return false
        }
        // get the node before the node that is to be removed
        let prevNode = this.head
        let counter = 0
        while (counter !== index - 1) {
            prevNode = prevNode.next
            counter++
        }
        // current is the node to be deleted
        let current = prevNode.next
        // overwrite the next with the current's next
        prevNode.next = current.next
        this.length -= 1;
        return true
    }
    reverse() {
        // exchanging head and tail so when transversing you start from the tail
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next;
        for (let i = 0; i < this.length; i++) {
            // setting next to the node's next
            next = node.next
            // current node next setting to the previous node
            node.next = prev
            // setting previous node to be current node for next iteration
            prev = node
            // advancing current node to the next for next iteration
            node = next
        }
    }

    tranverse() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }
}



const list = new SingleLinkedList()

list.push(1)
list.push(2)
list.push(3)
// list.unshift(6)
// list.set(1,5)
// list.insert(1, 5)
// console.log(list.get(8))
// list.shift()
// list.pop()
// list.pop()
// list.remove(0)
list.reverse()
list.tranverse()
// console.log(list.head.next.val)


