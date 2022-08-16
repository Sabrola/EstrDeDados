/*Fazer um programa que manipule um vetor de, no máximo, 50 números inteiros e possua as seguintes funções:
    a - Inserir elementos: Essa operação pode ser realizada em várias etapas, ou seja, o usuário pode querer inserir 
    pequenos conjustos de elementos de cada vez, sendo essa quantidade fornecida pello usuário e passada para a função.

    b - Remover um elemento tanto pelo seu valor quanto pelo seu índice. em qualquer caso, o usuário deve selecionar o valor
    ou índice, e o mesmo deve ser pasaado para a função.

    c - Somar os elementos pares ou impares do vetor (essa função deve ser única).

    d - Somar todod os elementos do vetor que estejam endre dois índices fornecidos pelo úsuario.
*/

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
console.log(result)
