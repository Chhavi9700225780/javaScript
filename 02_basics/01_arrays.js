// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //add all the elements of array to string
//change in type output 0,1,2,3,4,5

// console.log(myArr); [0,1,2,3,4]
// console.log( newArr); //0.1.2.3.


// slice, splice

console.log("A ", myArr); //[0,1,2,3,4,5]

const myn1 = myArr.slice(1, 3)

console.log(myn1); //[1,2]
console.log("B ", myArr); //[0,1,2,3,4,5]


const myn2 = myArr.splice(1, 3) // to add , to delete , to replace 
console.log("C ", myArr);  // [0,4,5]
console.log(myn2); //[1,2,3]
//slice no change in original array while in spice change in original array