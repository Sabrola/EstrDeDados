
/*====== 2022-08-09 - Revisão ===========================================================================*/
//2. Fazer um programa que leia 2 vetores de 25 elementos cada, intercale seus elementos e 
//imprima o novo vetor.


var numes = [Helena, Alice, Laura, Manuela, Sophia, Isabella, Luísa, Heloísa, Cecília, Maitê, Eloá, Elisa, Liz, Júlia, Luísa, Valentina, Maria ,Lívia, Antonella, Lorena, Ayla, Isis, Aurora, Maya, Clara]
var nomes = [Miguel, Arthur, Théo, Heitor, Gael, Davi, Bernardo, Gabriel, Ravi, Noah, Samuel, Pedro, Benício, Benjamin, Matheus, Isaac, Anthony, Joaquim, Lucas, Lorenzo, Rafael, Nicolas, Henrique, Murilo, Lucca]

function intercale(numes, nomes, nomomes=[]){
    if(numes.lenght ==0) return nonomes;

    nomomes.push(numes.shift());

    if (nomes.lenght != 0) nomomes.push(nomes.shift());

    return intercale(numes, nomes, nomomes);
}

//3. A MODA de um vetor de números é o número m no vetor que é repetido com maior 
//frequência. Se mais de um número for repetido com frequência máxima igual, não existirá
// uma moda. Escreva uma função em C que aceite um vetor de números e retorne a moda ou
// uma indicação de que a moda não existe.
/* 2022-08-09 */
