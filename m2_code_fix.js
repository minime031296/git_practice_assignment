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

ans = ISprime(num)
console.log(ans)