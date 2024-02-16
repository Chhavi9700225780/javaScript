const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);// without this username is not defined
        console.log(this); // output user object
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); // empty {}
// if we want to make user 2 then our code become bulky


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // not need
}
// new => it is a constructor function it gives a new instance to avoid overwrite  // 1 => creats a empty object 
//2 => calls a constructor function by new keyword
//3=> all the values injected by this keyword in this object

const userOne = new User("hitesh", 12, true)  
const userTwo = new User("ChaiAurCode", 11, false)//overwrite 
console.log(userOne.constructor); //it is a reference of user , object , promise 
//console.log(userTwo);