const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //output user object
    }
    //this is used to reference the current content means global object

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() //sam, welcome to website

// console.log(this); //output {} --> empty because it does not have global object
//and if print this on browser window then output will be window because on browser window global object is window

 function chai(){
   let username = "hitesh"
   console.log(this.username); 
 // in function this's output willbe undefined
}

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()