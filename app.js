let numbers = prompt()
console.log(numbers)
let numbersArray = numbers.split(",")
let total = numbersArray.reduce((acc,cur)=>{
return acc+=parseFloat(cur)
},0)
console.log(total)