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
        const max = this.values[0]
        const end = this.values.pop()
        this.values[0] = end
        this.sinkDown()
        return max
    }
    sinkDown() {
        let idx = 0
        let leftChilIndex;
        let rightChilIndex;
        let rightChild, leftChild;
        let element = this.values[0]
        let length = this.values.length
        let swap = null
        while (true) {
            leftChilIndex = (2 * idx) + 1
            rightChilIndex = (2 * idx) + 2
            leftChild = this.values[leftChilIndex]
            rightChild = this.values[rightChilIndex]
            swap = null
            if (leftChilIndex < length) {
                // if the left child is greater than the parent make the switch
                if (leftChild > element) {
                    swap = leftChilIndex
                }
            }
            if (rightChilIndex < length) {
                // if the right child is greater than the parent make the switch only:
                // if the swap wasn't done earlier with the leftChild
                // or if the swap was done and the rightchild is greater than the leftchild
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChilIndex
                }
            }
            // break the loop if swap is not done. Meaning that all the nodes are in their respective position
            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
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

// BIG(0)
// insertion O(log N)
// removal O(log N)
// search O(N)