function ISprime(num){
    if(num<=1){
        return false
    }
    for(let i = 2 ; i < num ; i++){
        if (num%i === 0){
            return false
        }
    }
    return true
}

ans = ISprime(7)
console.log(ans)