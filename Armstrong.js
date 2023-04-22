let Arm =(num)=>{
    let numString= num.toString()
    let theNum= numString.length
    let sum=0
    for(let i=0; i<theNum; i++){
        sum+=Math.pow(numString[i],theNum)
    } 
    console.log(num==sum) 
}
Arm(407)