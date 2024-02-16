//console.log("Hello")
//promises has three states
//1 pending
//2 fulfilled
//3 reject
//how to make promises it is a object // Q and Blue bird library
//const promisesOne  = new Promise(function);

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, networkcalls
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() // it is a method connection between resolve and .then
    }, 1000)
})
//consumption of promises
//.then is directly connected to resolve
promiseOne.then(function(){
    console.log("Promise consumed");
})
    // Seacond way
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})
    //Third promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username // we can not take the value of return through variable
})
.then((username) => { // chaning
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected")) //default*/



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
                     //AsyncAwait Syntax//
async function consumePromiseFive(){
    try {   
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


 async function getAllUsers(){
     try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
 }

 getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
//here data comes first before all the code //Why??