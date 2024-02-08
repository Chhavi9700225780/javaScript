//var c = 300
//let a =400
let a = 300
if (true) {
    let a = 10
    const b = 20
    //var c = 30  
    // console.log("INNER: ", a); //10
    
}



// console.log(a); // no output // 400
// console.log(b); // no output
// console.log(c); output c = 30


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two() //it never be executed if above console.log(website); is executed else it's output wiil be hitesh

}
one();
// when we run code on console browser and run a code on node js then here scope is different 

// function one(){
    
//}

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); //error website is not defined
}

// console.log(username); //error username is not defined



                               // ++++++++++++++++++ interesting ++++++++++++++++++
                                                  /* CONCEPT*/

console.log(addone(5))
                          //output 6
function addone(num){
    return num + 1
}



addTwo(5)                    // error it is not accessiable it comes in a hosting
//execution of function before its decleration in holding the value of function into the variables
const addTwo = function(num){
    return num + 2
}
//addTwo(5) //no error