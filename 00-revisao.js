
/*====== 2022-08-09 - Revisão ===========================================================================*/
//2. Fazer um programa que leia 2 vetores de 25 elementos cada, intercale seus elementos e 
//imprima o novo vetor.


/*var numes = [Helena, Alice, Laura, Manuela, Sophia, Isabella, Luísa, Heloísa, Cecília, Maitê, Eloá, Elisa, Liz, Júlia, Luísa, Valentina, Maria ,Lívia, Antonella, Lorena, Ayla, Isis, Aurora, Maya, Clara]
var nomes = [Miguel, Arthur, Théo, Heitor, Gael, Davi, Bernardo, Gabriel, Ravi, Noah, Samuel, Pedro, Benício, Benjamin, Matheus, Isaac, Anthony, Joaquim, Lucas, Lorenzo, Rafael, Nicolas, Henrique, Murilo, Lucca]

function intercale(numes, nomes, nomomes=[]){
    if(numes.lenght ==0) return nonomes;

    nomomes.push(numes.shift());

    if (nomes.lenght != 0) nomomes.push(nomes.shift());

    return intercale(numes, nomes, nomomes);
}

console.log(`${intercale}`)*/

function intercale(numes, nomes){

    var nonomes = []
    for(var i=0; i <10;i++){

    nomomes.push(numes[i])
    nomomes.push(nomes[i])
    }

console.log(nonomes)
}

var numes = [Helena, Alice, Laura, Manuela, Sophia, Isabella, Luísa, Heloísa, Cecília, Maitê, Eloá, Elisa, Liz, Júlia, Luísa, Valentina, Maria ,Lívia, Antonella, Lorena, Ayla, Isis, Aurora, Maya, Clara]
var nomes = [Miguel, Arthur, Théo, Heitor, Gael, Davi, Bernardo, Gabriel, Ravi, Noah, Samuel, Pedro, Benício, Benjamin, Matheus, Isaac, Anthony, Joaquim, Lucas, Lorenzo, Rafael, Nicolas, Henrique, Murilo, Lucca]

intercale(numes, nomes)

//3. A MODA de um vetor de números é o número m no vetor que é repetido com maior 
//frequência. Se mais de um número for repetido com frequência máxima igual, não existirá
// uma moda. Escreva uma função em C que aceite um vetor de números e retorne a moda ou
// uma indicação de que a moda não existe.

var Carls = [Carls, Farls, Marls, Karls, Varls, Carls, Harls, Jarls, Larls, Parls, Barls, Warls, Farls, Carls, Parls, Garls, Aarls, Carls, Farls, Warls, Narls, Marls, Larls, Oarls, Narls, Parls, Darls, Sarls, Carls, Narls, Barls, Tarls]

function moda(Carls){
    return ((Carls.sort((a, b) =>
    (Carls.filter(v => v === a).lenght) - (Calrs.filter(v => v === b).lenght))
    ).pop())
}

module.exports = moda
console.log(`${moda}`)
/* 2022-08-09 */
