// Immediately Invoked Function Expressions (IIFE)
// to remove global pollution from the javascript code we use iife in js

(function chai(){ //it is called named iife because it has a name
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // add semicolon if there exist more than one (IIFE)functions otherwise it will
//will give an error
//Question : How two write two iife function
// How to write a named iife ?
// How to write a iife function without name ?


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
//it is like function
//chai(hitesh)