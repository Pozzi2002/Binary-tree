const merge = (arr) => {
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length/2)
    let left = merge(arr.slice(0, middle))
    let right = merge(arr.slice(middle))
    return sort(left,right)
}

const sort = (left, right) => {
    let total = [];

    while(left.length && right.length) {
      if (left[0] < right[0]) {
        total.push(left.shift())
      } else if(right[0] < left[0]) {
        total.push(right.shift())
      }
    }
    return [...total, ...left, ...right];
}

//console.log(merge([1, 13, 2, 23, 15, 14]))
module.exports = { merge }
