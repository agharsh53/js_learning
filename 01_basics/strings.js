const name = "agharsh";
const repoCount = 53

//console.log("username: "+name+repoCount)

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Harsh')
/*
console.log(gameName[0]) //H
console.log(gameName.__proto__) //{}

console.log(gameName.length) // 5
console.log(gameName.toUpperCase()) // HARSH
console.log(gameName.charAt(1)) // a
console.log(gameName.indexOf('s')) // 3

*/
const newString = gameName.substring(0,2);
console.log(newString) // Ha

const anotherString = gameName.slice(-5,4,1)
console.log(anotherString) // Hars

console.log("    harsh     ".trim()) //harsh

console.log("https://hitesh.com/hitesh%20choudhary".replace('%20','-')) //https://hitesh.com/hitesh-choudhary

console.log("agharsh53".includes("Harsh")) //false

console.log("hello-world-.com".split('-'))

let StringOne = "chaiAurCode is best learning plateform"
let stringTwo = "Frontend and backend development"

console.log(StringOne.charCodeAt(1))
console.log(String.fromCharCode(104))

console.log(stringTwo.indexOf("end"))
console.log(stringTwo.lastIndexOf("end"))
console.log(stringTwo.match(/end/g))
console.log(StringOne.repeat(2))
console.log(stringTwo.replace(/end/g,"End"))