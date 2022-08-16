/*======2022-08-16 - Revisão ===========================================================================*/
//4 - Fazer um programa que leia um vetor e separe os elementos pares em outros dois vetores.

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

var even = []
var odd = []

var Evens = []
var Odds = []


Evens = 0; Odds = 0;
for (let i = 0; i < 6; i++){
    if(vetor[i] % 2 == 0) {
        even[Evens] = vetor[i];
        Evens++
        }
        else {
        odd[Odds] = vetor[i];
        Odds++
        }
}

console.log(nums)
console.log('--------------------------------------------------------')
console.log(Evens)
console.log('--------------------------------------------------------')
console.log(Odds)
/* 2022-08-16 */
