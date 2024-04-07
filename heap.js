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
            let n = this.values.length -1
            let temp
            // bubbling the val to be inserted in the correct index
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
    print() {
        console.log(this.values)
    }
}

const myHeap = new MaxBinaryHeap()
myHeap.insert(41)
myHeap.print()