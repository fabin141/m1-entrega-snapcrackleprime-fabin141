function snapCracklePrime(maxValue){

    let array = [];
    function numeroPrime(numero){
        let verificacao = 0;
        for(let j=1; j <= numero; j++){
            if(numero % j == 0){
                verificacao++
            }
        }
        return verificacao;
    }
    for(let i = 1; i <= maxValue; i++){
        if(i % 2 != 1 && i % 5 != 0){
            if(numeroPrime(i) == 2){
                array.push(" Prime")
            }else{
                array.push(i)
            }

        }
        if(i % 2 != 0 && i % 5 !=0){
            if(numeroPrime(i) == 2){
                array.push('SnapPrime')
            }
            else{
                array.push('Snap')
            }
        }
        if(i % 2 != 0 && i % 5 == 0){
            if(numeroPrime(i) == 2){
                array.push('SnapCracklePrime')
            }
            else{
                array.push('SnapCrackle')
            }
        }
        if(i % 5 == 0){
                array.push('Crackle')
            }
        
    }
    let arrayString = array.join(', ');
    return arrayString;
 }


console.log(snapCracklePrime(16));