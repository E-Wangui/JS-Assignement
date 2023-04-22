function word(words){
   let writting= words.split(" ")
   let y =writting.map((x)=>{
        return x.split("").reverse().join("")
   }).join(" ")
   console.log(y);

}
word("The Giant In Technology!")
