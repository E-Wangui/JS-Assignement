function one(n){
    for(let i=0; i<n; i++){
        let word=""
        if(i%3==0){
            word+="fizz"
        }
        if (i%5==0){
            word+="buzz"
        }
        if (word==""){
            word=i
        }
        console.log(word)
    }
}
one(21)