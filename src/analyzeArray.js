export default function analyzeArr(arr) {
    let len = arr.length
    
    // average
    let sum = 0
    for (let i = 0; i < len; i++) {
        sum += arr[i]
    }
    let avg = Math.floor(sum / len) 

    // min and max
    let minimum = Math.min(...arr)
    let maximum = Math.max(...arr)

    return {
        average: avg,
        min: minimum,
        max: maximum,
        length: len
    }

}