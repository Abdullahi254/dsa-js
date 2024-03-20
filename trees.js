class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
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
    transverse(){
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
}

const myBst = new BST()
myBst.insert(10)
myBst.insert(6)
myBst.insert(15)
myBst.insert(3)
myBst.insert(8)
myBst.insert(20)

// console.log(myBst.find(8))
console.log(myBst.transverse())

// insertion - O(logn)
// search - O(logn)
// as the tree doubles we only increase the number of steps by 1
// worst case is O(n) 