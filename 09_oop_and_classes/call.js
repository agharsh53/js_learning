//window = {this=window}
//node = {}

function setUserName(Username){
   //Complex DB calls
   this.Username = Username,
   console.log("Called");
}


function createUser(username, email,password){
    setUserName.call(this,username),
    this.email = email,
    this.password = password
}
const chai = new createUser("chai", "chai@fb.com",'1234')
console.log(chai);