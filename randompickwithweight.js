//Objective is to design a class that takes an array of values that represents
//the 'weight' of that specific index. We have one method:
//'pickIndex' should return a randomly picked index


//O(n) solution for the constructor to create our prefixSums array
//O(logn) solution for 'pickIndex' method. We use binary search to find our index 

class RandomWeight {
    constructor(w) {
        this.prefixSums = new Array(w.length).fill(0)
    
        let prefixSum = 0
        for (let i = 0; i < w.length; i++) {
            prefixSum += w[i]
            this.prefixSums[i] = prefixSum
        }
        
        this.totalSum = prefixSum
    }

    pickIndex() {
        //The array is already presorted, so we can do a binary search
        let target = Math.floor(this.totalSum * Math.random())
        let low = 0
        let high = this.prefixSums.length - 1
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2)
            if (this.prefixSums[mid] > target) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        
        return low
    }
}

let newWeight = new RandomWeight([1,3])
newWeight.pickIndex()