//how to assign variable
// let letVariable = "Hello World"
// var varVariable = "Hello Kenya"
// const constVariable = "Hello KamiLimu"

// console.log("letVariable", letVariable)
// console.log("varVariable", varVariable)
// console.log("constVariable", constVariable)

// letVariable = 1
// varVariable = true
// constVariable = "New Value"

// console.log("letVariable", letVariable)
// console.log("varVariable", varVariable)

//primitives
// let noValue
// let num = 1
// let str = "string"
// let bool = true
// let un = undefined
// let nulll = null

// console.log(typeof num)
// console.log(typeof str)
// console.log(typeof bool)
// console.log(typeof un)
// console.log(typeof nulll)

//this works because var is scoped to a function or globally
// if (true) {
//   var a = "hasValue"
// }
// console.log(a)

// //this will not work
// if (true) {
//   let b = "hasValue"
// }
// console.log(b)

// let b = 10
// if (b > 11) {
//   console.log("b is greater than 11")
// } else if (b == 10) {
//   console.log("b is equals to 10")
// } else {
//   console.log("b is not greater than 11")
// }

//for loop
// for (let i = 10; i > 0; i--) {
//   console.log(i)
// }

//while loop
// let i = 1
// while (i < 10) {
//   console.log(i)
//   i = i + 1
// }

// //do while
// let j = 1
// do {
//   console.log(j)
//   j++ // j = j+1
// } while (j < 10)

//logical "and" operator is &&
// let j = 2
// if (j == 2 && j < 10 && typeof j == "number" && j > 0) {
//   console.log("j is one and j is less than 10")
// } else {
//   console.log("j is not one or it is not less than 10")
// }

//logical "or" operator is ||
// let k = 2
// if (k == 2 || k == 1 || typeof k == "string") {
//   console.log("k is equals to one or two")
// } else {
//   console.log("k is not equals to one or two")
// }

// let ternaryExample

// if (example > 2) {
//   ternaryExample = "greater than two"
// } else {
//   ternaryExample = "not greater than two"
// }

// let example = 1

// const ternaryExample = example > 2 ? "greater than two" : "not greater than two"

// console.log(ternaryExample)

// let truthyExample = false
// if (truthyExample) {
//   console.log("example is truthy")
// } else {
//   console.log("example is falsy")
// }

// let a = 1
// let b = "1"

// if (a !== b) {
//   console.log("the values are equal")
// } else {
//   console.log("the numbers are not equal")
// }

//function
// function myFunc() {
//   console.log("this is my function")
// }

// const myOtherFunction = function () {
//   console.log("This is a function expression")
// }

// const arrowFunction = () => {
//   console.log("this is an arrow function")
// }

// arrowFunction()

//parameters

// function param(name, age) {
//   return `My name is ${name}. My age is ${age}`
// }

// let myString = param("Abdul", 28)

// param("Abdul", 28)
// param("Japheth", 32)
// param("Huldah", 22)
// param("David", 96)

//default params

// function param(name = "Abdul", age = 28) {
//   console.log(`My name is ${name}. My age is ${age}`)
// }

// param("Japheth", 32)

//named parameters
// function param({ name, age }) {
//   console.log(`My name is ${name}. My age is ${age}`)
// }

// param({ age: 28, name: "Abdul" })

//higher order function
// const arrowFunction = () => {
//   console.log("this is an arrow function")
// }

// function myFunc(aFunc) {
//   aFunc()
// }

// myFunc(function () {
//   console.log("here")
// })

//objects
const myObj = {
  name: "Abdul",
  age: 25,
  "my key": "keys",
  myOtherObj: {
    value1: "value",
    nameOfCat: "Boy",
  },
}

// myObj.name = "Japheth"
// myObj["age"] = 24
// delete myObj["my key"]
// console.log(myObj)

// const { name: newName, age: newAge } = myObj
// console.log(newName, newAge)

// console.log(Object.values(myObj))

// console.log(myObj)
// Object.freeze(myObj)

// myObj.name = "Japheth"
// myObj.age = 32
// console.log(myObj)

//arrays
const myArr = [1, 2, 3, 4, 5]
// console.log(myArr.splice(0, 2))

myArr[2] = "new value"

console.log(myArr[2])
