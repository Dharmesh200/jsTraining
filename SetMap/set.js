const nums = [10, 20, 30, 40, 50, 10, 22, 20]

const allNums = new Set(nums);
console.log(typeof nums);

console.log('size', allNums.size);

allNums.forEach((val, i) => console.log(`keys:${i}=>values:${val}`));

//example 2
const arr = ['mean', 'mern', 'pern', 'mven', 'jfs', 'pfs']

// arr.add('cloud computing');

// console.log(arr);

// arr.delete('pern');
// console.log(arr);

// const arr1 = new Set(arr);
// console.log(arr1);

// console.log(arr1.has('jfs'));

// arr1.forEach((val, i)=> console.log(`keys:${i}=>values:${val}`))


let arr1 = [...arr];
console.log(arr1);

console.log(typeof arr1);

//example 3
let arr3 = [10, 20, 30, 10, 40, 20, 50]

function removeDuplicate(a) {
    let arr1 = new Set(a);
    // return arr1

    let arr2 = [...arr1]
    return arr2
}

console.log(removeDuplicate(arr3));