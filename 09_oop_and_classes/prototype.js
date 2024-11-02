// let myName = "harsh    ";
// let mychannel = "chai    ";
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor :"hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.harsh = function () {
    console.log("Harsh is present in all objects")
}

Array.prototype.heyHarsh = function() {
    console.log("Harsh says hello")
}
//heroPower.harsh()
myHeros.harsh()
myHeros.heyHarsh()
//heroPower.heyHarsh()

//inheritance
const User = {
    name:"user",
    email:'user@google.com'
}
const Teacher  = {
    makeVideo:true,
}
const TeachingSupport  = {
    isAvailable:false,
}
const TASupport  = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__ : TeachingSupport
}

TASupport.__proto__ =User

//Modern Syntax
//(TeachingSupport gain all properties of Teacher)
Object.setPrototypeOf(TeachingSupport,Teacher);


let anotherUsername = "Agharsh53    ";
String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is ${this,this.trim().length}`);
}

anotherUsername.trueLength();
"harsh".trueLength();
"iceTea".trueLength()