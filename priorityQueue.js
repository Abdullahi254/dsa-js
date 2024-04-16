// we are going to implement a priority queue using a binary heap
// Each element in a priority queue has an associated priority. 
// In a priority queue, elements with high priority are served before elements with low priority.

class Node {
    constructor(val = null, priority = 0) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = []
    }
    bubbleUp() {
        let idx = this.values.length - 1
        let element;
        let parentIdx;
        let parent;
        while (idx > 0) {
            parentIdx = Math.floor(idx - 1 / 2)
            parent = this.values[parentIdx]
            element = this.values[idx]
            if (element.priority <= parent.priority) break;
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }
    sinkDown() {
        let idx = 0
        let leftChilIndex;
        let rightChildIndex;
        let rightChild, leftChild;
        let element = this.values[0]
        let length = this.values.length
        let swap = null
        while (true) {
            leftChilIndex = (2 * idx) + 1
            rightChildIndex = (2 * idx) + 2
            leftChild = this.values[leftChilIndex]
            rightChild = this.values[rightChildIndex]
            swap = null
            if (leftChilIndex < length) {
                if (leftChild.priority > element.priority) {
                    swap = leftChilIndex
                }
            }
            if (rightChildIndex < length) {
                if ((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)) {
                    swap = rightChildIndex
                }
            }
            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
    enqueue(node) {
        this.values.push(node)
        this.bubbleUp()
    }
    dequeue() {
        const max = this.values[0]
        const end = this.values.pop()
        this.values[0] = end
        this.sinkDown()
        return max
    }
}

const myPriorityQueue = new PriorityQueue()
const task1 = new Node("common Cold", 0)
const task2 = new Node("low fever", 1)
const task3 = new Node("gunshot wound", 6)
const task4 = new Node("high fever", 4)
const task5 = new Node("broken limb", 2)
myPriorityQueue.enqueue(task1)
myPriorityQueue.enqueue(task2)
myPriorityQueue.enqueue(task3)
myPriorityQueue.enqueue(task4)
myPriorityQueue.enqueue(task5)

console.log("priority list ***************************")
let removeNode = myPriorityQueue.dequeue()
console.log(removeNode)
let removeNode2 = myPriorityQueue.dequeue()
console.log(removeNode2)
let removeNode3 = myPriorityQueue.dequeue()
console.log(removeNode3)
let removeNode4 = myPriorityQueue.dequeue()
console.log(removeNode4)
let removeNode5 = myPriorityQueue.dequeue()
console.log(removeNode5)

