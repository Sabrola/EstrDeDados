//Busca Sequencial
//Percorre todo o vetor valor a valor até achar o número perguntado

vet = [1, 2, 3, 4, 5, 6, 7]

function search (vet, item){
    let place = 0;
    let found = 'false';
    while(place < vet.lenght && !found){
        if (vet[place] === item){
            found = true;
        } else {
            place = place+1;
        }
    }

    return found;
}
