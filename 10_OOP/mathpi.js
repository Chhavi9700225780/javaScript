const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter); // writable  =>false
// enumerable =>false
//configuration =>false

// console.log(Math.PI);
// Math.PI = 5 // not overwrite
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); // name => property
//chai => object

Object.defineProperty(chai, 'name', {
    //writable: false,  //defining the property or changing the property
    enumerable: true,//false then we don't iterates on name property
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') { // orderchai not come in output
        
        console.log(`${key} : ${value}`);
    }
}