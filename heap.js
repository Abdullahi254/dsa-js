//MAX BINARY HEAP

// For any index of an array n
// The left child is stored at 2n +1 
// The right child is stored at 2n +2

// For any child node at index n
// Its parent is at index floored((n-1)/2)

class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }
    insert(val) {
        if (this.values.length < 1) {
            this.values.push(val)
        } else {
            // pushing the element to the list of values
            this.values.push(val)
            let n = this.values.length - 1
            let temp
            // bubbling up the val to be inserted in the correct index
            // while the child is greater than the parent the loop will continue to iterate
            while (this.values[n] > this.values[Math.floor((n - 1) / 2)]) {
                //swaping if the child is greater than the parent
                temp = this.values[Math.floor((n - 1) / 2)]
                this.values[Math.floor((n - 1) / 2)] = this.values[n]
                this.values[n] = temp
                n = Math.floor((n - 1) / 2)
            }
        }
    }
    // removing the max element which is the root node and then sorting the heap for every node to be place right
    extractMax() {
        if (this.values.length < 1) {
            return this.values[0]
        } else {
            //getting the last element
            let lastElement = this.values[this.values.length - 1]

            // placing the last element to be the root node
            this.values[0] = lastElement
            // poping the last element to remove it at the end
            this.values.pop()
            // getting the first element to use it when bubbling down to place it in the right place
            let node = this.values[0]

            let n = 0
            let childOne = this.values[1]
            let childTwo = this.values[2]
            // while node is smaller than either of it's children, continue to bubble it down
            while (node < childOne || node < childTwo) {
                if (childOne >= childTwo) {
                    this.values[n] = childOne
                    this.values[(2 * n) + 1] = node
                    n = (2 * n) + 1
                }
                else if (childTwo > childOne) {
                    this.values[n] = childTwo
                    this.values[(2 * n) + 2] = node
                    n = (2 * n) + 2
                }
                node = this.values[n]
                childOne = this.values[(2 * n) + 1]
                childTwo = this.values[(2 * n) + 2]
            }
        }
    }
    print() {
        console.log(this.values)
    }
}

const myHeap = new MaxBinaryHeap()
// myHeap.insert(41)
console.log("BEFORE EXTRACTION ***********************")
myHeap.print()
myHeap.extractMax()
console.log("AFTER EXTRACTION ***********************")
myHeap.print()