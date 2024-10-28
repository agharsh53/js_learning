const promiseOne = new Promise(function(resolve,resected){
    //Do an async task
    //DB call, Cryptography,
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
    },1000); 
})

// then is used to connect the resolve the object and return output in function
promiseOne.then(function(){
    console.log("Promise Command");
}).catch(function(error) {
    console.error("Promise rejected with error:", error);
});

new Promise(function(resolve,rejected){
setTimeout(function(){
    console.log("Async task 2")
    resolve();
},1000);
}).then(function(){
    console.log("Async 2 resolve")
})

const promiseThree = new Promise(function(resolve,rejected){
    setTimeout(function(){
        resolve({username:"agharsh53",email:"agrawalharsh53@gmail.com"})
    })
})
promiseThree.then(function(user){
      console.log(`Username: ${user.username}`)
      console.log(`Email Id: ${user.email}`)
})

const promiseFour = new Promise(function(resolve,rejected){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Harsh", password:"1234"});
        }else{
            rejected('Error: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
console.log(user);
return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("The promise is either resolve or rejected"))