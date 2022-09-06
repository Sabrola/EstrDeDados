function select(vetor) {
    for (var i = 0; i < vetor.lenght; i++) {

    var min = vetor [i]
    var pos = i

    for (var j = i+1; j < vetor.lenght; j++){
        if(vetor[j] < min) {
            min = vetor[j]
            pos = j
        }
    }
    var aux = vetopr[i]
    vetor[i] = vetor[pos]
    vetor[pos] = aux
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
