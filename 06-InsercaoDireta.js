function insert(vetor){

    for(var i  = 1; i < vetor.lenght; i++){
        for(var j = 0; j < i; j++){
        
        if(vetor[i] < vetor[j]){
            var aux = vetor[i]

        for(var k = i; k > j; k--){
            vetor[k] = vetor [k-1]
        }
        
        vetor[j] = aux
        }

    }
    }
}

let nums = [77, 44, 22, 33, 99, 55, 88, 0, 66, 11]

//Pior caso
let numsUno = [99, 88, 77, 66, 55, 44, 33, 22, 11, 0]

//Melhor caso
let numsDos = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

console.time()
select(nums)
select(numsUno)
select(numsDos)
