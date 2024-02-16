//fetch is a library
//syntax
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
//microtask Queue
//Questions when we send request to browser then a error comes in response is it come in response or in error
//ans response