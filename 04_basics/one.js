// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); //power is not defined


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

//Questions 1 => value of this on browser is window.
//+=+================EXECUTION CONTEXT =================//
//1.GLOBAL EXECUTION CONTEXT
//2. FUNTION EXECUTION CONTEXT
//3. EVAL EXECUTION CONTEXT
//MEMORY CREATION PHASE is only used to allocate the memory to variables etc
//EXECUTION PHASE is used to execute the code of js
     //1. global execution (THIS)
        // 2. memory phase 
//a. val1 = undefined
// b. val2 = undefined
//c. addNum = defination
// d. result 1 = undefined
//e. result2 = undefined
// 3. Execution phase 
//a. val1 = 10
//b. 5
//c. addNum = here comes a new executional context 
            // here first creates a new variable enviornment + Execution thread
            // 1. memory phase ==> val1 = undefined , val2 = undefined , total = undefined
            //2. Execution context ==> num1 =10, num2 =5, total =15 and this toal is return back to global execution context
            // it will be deleted after return
let val1 = 10;
let val2 =5;
function addNum( num1 , num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1 , val2);
let result2 = addNum(10, 2);

//===============Last in Fast Out===========//
function one(){
    console.log("2");
    two();
}
function two(){
    console.log("3");
    three();
}
function three(){
    console.log("one");

}
one();
two();
three();