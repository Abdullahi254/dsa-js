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
}

const myBst = new BST()
myBst.insert(12)
myBst.insert(6)
myBst.insert(5)
myBst.insert(4)
myBst.insert(17)
myBst.insert(11)
myBst.insert(15)
myBst.insert(8)
myBst.insert(21)
myBst.insert(42)
