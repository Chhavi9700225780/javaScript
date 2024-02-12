// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Map
//it is a object that hols key value pairs and inserts value in order it has unique value
// it does not hold duplicate values;

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")// not insert 


// console.log(map);
 //====================FOR OF LOOP ON MAP==================
for (const [key, value] of map) {
    // console.log(key, ':-', value); // key and values comes alone 
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);   // it not iterate on object ? WHY??
    
// }