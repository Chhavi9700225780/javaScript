// Dates

let myDate = new Date()
// console.log(myDate.toString()); //wed mar 01 2024 12:04:46
// console.log(myDate.toDateString()); //wed mar 01 2024
// console.log(myDate.toLocaleString()); //3/4/2024,12:04:46pm
// console.log(typeof myDate); //object

// let myCreatedDate = new Date(2023, 0, 23) // mon jan 23 2024
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //1/23/2024, 5:03:00
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023") //india
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //in milisecond

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // convert in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // in js months starts from 0
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})