class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class QNode {
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
        let newNode = new QNode(val)
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
            let node = this.first
            this.first = null
            this.last = null
            this.length -= 1
            return node.val
        } else {
            let node = this.first
            this.first = this.first.next
            this.length -= 1
            return node.val
        }   
    }
}


class BST {
    constructor() {
        this.root = null
    }
    insert(val) {
        const newNode = new Node(val)
        // inserting first node
        if (!this.root) {
            this.root = newNode
            return this
        } else {
            // starting node
            let node = this.root
            while (node) {
                // moving to the right if val is greater than node val
                if (val > node.val) {
                    if (node.right) {
                        // if there's a next right node overwrite node with it
                        node = node.right
                    }
                    // no right so this is the slot for our new node
                    else {
                        node.right = newNode
                        return this
                    }
                } else {
                    // if there's a next left node overwrite node to be it
                    if (node.left) {
                        node = node.left
                    }
                    // no left so this is the slot for our new node
                    else {
                        node.left = newNode
                        return this
                    }
                }
            }
        }
    }
    find(val) {
        let node = this.root
        while (node) {
            // if node is found return true
            if (node.val === val) return true
            // check the right
            if (val > node.val) {
                if (node.right) {
                    node = node.right
                } else return false
            // check the left
            } else {
                if (node.left) {
                    node = node.left
                } else return false
            }
        }
    }
    traverse(){
        // using bredth first method(using array to transverse a BST for demostration purposes)
        let q = [this.root]
        let visited = []
        let node;
        while(q.length > 0){
            node = q.shift()
            if(node.left){
                q.push(node.left)
            }
            if(node.right){
                q.push(node.right)
            }
            visited.push(node.val)
        }
        return visited
    }
    traverse2(){
        // using bredth first method(using queue to transverse a BST)
        let q = new Q()
        //adding first node to queue
        q.enqueue(this.root)
        // visited queue will have a list of all the nodes
        let visited = new Q()
        //declaring node that will be used in the loop to catch each node in each iteration
        let node;
        while(q.length > 0){
            // grabing nodes from the queue and decreasing the queue length in each iteration
            node = q.dequeue()
            // if child node exists push it to the queue
            if(node.left){
                q.enqueue(node.left)
            }
            if(node.right){
                q.enqueue(node.right)
            }
            // filling in the nodes in each iteration
            visited.enqueue(node)
        }
        return visited
    }
    traverse3(){
        // The depth first pre-order method
        let visited = []
        const transverse = (node)=>{
            visited.push(node.val)
            // all the nodes in the left will be traversed b4 heading to the right
            if(node.left) transverse(node.left)
            if(node.right) transverse(node.right)
        }
        transverse(this.root)
        return visited
    }
    traverse4(){
        // The depth first post-order method
        let visited = []
        const traverse = (node)=>{
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            visited.push(node.val)
        }
        traverse(this.root)
        return visited
    }
    traverse5(){
        // The depth first in-order method
        let visited = []
        const traverse = (node)=>{
            if(node.left) traverse(node.left)
            visited.push(node.val)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return visited
    }
}

const myBst = new BST()
myBst.insert(10)
myBst.insert(6)
myBst.insert(15)
myBst.insert(3)
myBst.insert(8)
myBst.insert(20)
// console.log(myBst.find(8))
// console.log(myBst.traverse2())
// console.log(myBst.traverse3())
// console.log(myBst.traverse4())
console.log(myBst.traverse5())

// insertion - O(logn)
// search - O(logn)
// as the tree doubles we only increase the number of steps by 1
// worst case is O(n) 


//BREDTH FIRST SEARCH VS DEPTH FIRST SEARCH
// space complexity in bst could be worse than in depth first.
// On the other hand they have similar time complexity.

