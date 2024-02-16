function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)//setUserame(username)Wrong call //
    //explicitly calling
    //call=> to hold the reference
    //pass the current execution context to other function 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);//