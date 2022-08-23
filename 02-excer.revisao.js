/*Fazer um programa que manipule um vetor de, no máximo, 50 números inteiros e possua as seguintes funções:
    a - Inserir elementos: Essa operação pode ser realizada em várias etapas, ou seja, o usuário pode querer inserir 
    pequenos conjustos de elementos de cada vez, sendo essa quantidade fornecida pello usuário e passada para a função.

    b - Remover um elemento tanto pelo seu valor quanto pelo seu índice. em qualquer caso, o usuário deve selecionar o valor
    ou índice, e o mesmo deve ser pasaado para a função.

    c - Somar os elementos pares ou impares do vetor (essa função deve ser única).

    d - Somar todos os elementos do vetor que estejam endre dois índices fornecidos pelo úsuario.
*/

// C
function plusEOdd(vet, cod) {
    var plus = 0
    if(vetor[i] % 2 == 0) {
        plus += vet[i]
    }
    else {
        alert(`Esse número é impar!`)
    }
}
function plusEven(num){
    Evens = 0; Odds = 0;
    for (let i = 0; i < 10; i++){
        if(vetor[i] % 2 == 0) {
        even[Evens] = vetor[i];
        Evens++
        }
        else {
        odd[Odds] = vetor[i];
        Odds++
        }
    }
    return num

}

var num = [1, 4, 6, 14 , 4, 64, 29, 30]
console.log({num})

//Posição = Índice
plus(nums, 1, 3)
console.log(result)


// D
function plus(nums, pos1, pos2){
    result = 0
    for(var i=pos1;i<=pos2; i++){
        result += nums[i]
    }
    return result
}

var nums = [1, 4, 6, 14 , 4, 64, 29, 30]

//Posição = Índice
plus(nums, 1, 3)
console.log({result})

// B
var ananas = [1, 4, 6, 14 , 4, 64, 29, 30]

function delet(vet, indice){
    for(var i=indice+1; i < vet.lenght; i++){
        vet[i-1] = vet[i]
    }
    vet.lenght = vet.lenght - 1
}

/*function add(vet, qtd) {
    for(var i=0; i<qtd; i++){
        i = 1

    }
}*/
var p1 = 1
var p2 = 3

result = plus(vet, p1, p2)
console.log(result)

if (vetor.lenght+qtd < 50){
    add(vet, qtd)
}
else{
    console.log('Quantidade ultrapsa 50 elementos.')
}

console.log({vet})
