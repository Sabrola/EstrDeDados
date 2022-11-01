//Sem indice é necesario percorrer o vetor completo. Por exemplo
    //Em um vetor de 3 elementos se o usuario deseja colocar um elemento em seu final ele precissará
    //percorer todo o vetor checando se o NEXT() é vazio, o que indica o vetor terminou

            ///A. --- > 
//Adicionando no começo: adicionar um elemento antes do primerio apontando para ele, o que o tornará no
    //novo primero.

//Lista duplamente encadeada
    //Tem doisd ponteiros o que facilita a adição e remoção de elemtos anteriores ou posteriores

//Lista circular
    //O úmtimo elemento aponta para o primeiro, chamado e cabeça, que geralmente é desenhado vazio.


function LinkedList() {

    let Node = function(element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    //append() => Para adicionar elementos a lista.
    this.append = function(element){
        let node = new Node(element),
        current;

        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
            current = current.next;
            }
            current.next = node;
        }
        length++;
    } ;

    this.size = function() {
        return length
    };

    //a- Mostrar os elementos da lista

    Dog.prototype.toString = function dogToString() {
        return `${this.name}`;
      };
}



//b- Remover o primeiro elemento da lista

//c- Inserir um elemento no inicio da lista

//d- Retornar a posição do elemento na lista. Se o elemento
    //não existir, retorne -1

//e- Remover um elemento de uma posição específica da lista





Llist = new LinkedList();

Llist.append(12);
Llist.append(67);

console.log(Llista.size());
console.log(toString());

Llist.append(15);

console.log(Llista.size());
console.log(Llist.toString());
