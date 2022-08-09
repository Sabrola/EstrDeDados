/*====== 2022-08-09 - Revisão ===========================================================================*/

let num = [2, 5, 7, 8, 4, 3, 9]


par = Math.even(...num)
impar = Math.odd(...num)

console.log(`${par} são números pares. E ${impar} são números impares.`)

function somaPar(x) {
    let soma = 0;
    for (let i = 0; i <= x; i += 2) soma += i
    return soma;
}

console.log(somaPar(2, 5, 7, 8, 4, 3, 9));

function somaImpar(x) {
    let soma = 0;
    for (let i = 0; i != x; i += 2) soma += i
    return soma;
}

console.log(somaImpar(2, 5, 7, 8, 4, 3, 9));


/* 2022-08-09 */
