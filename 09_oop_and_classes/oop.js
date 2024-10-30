const user =  {
    username:"harsh",
    loginCount: 8,
    signedIn:true,

    getUserDetails : function(num){
        for(let i=0; i<num; i++){
            console.log("Get user details from Database");
        }
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username);
// console.log(user.getUserDetails(5))
// console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}

const userOne = new User("harsh",5,true);
const userTwo = new User("agharsh53",53,false);
console.log(userOne.constructor)
//console.log(userTwo)

//new :- empty object is created which is called as instance of class object