class HashTable {
    constructor() {
        this.table = new Array(180);
        this.size = 0;
    }

    //A função 'hash()' para transformar as chaves em índices
    // index (em inglês).

    // "_" indica que esta é uma classe privada.
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash +- key.charCodeAt(i);
            //charCodeAt() é usado para somar o código ASCII
            // dos caracteres.
        }

        //Para assegurarmos que o valor do hash não irá exeder o
        // tamanho permitido:
        return hash % this.table.length
    }

    //'_hash()' deve retornar um número entre 0 e 180 que é
    // o número de espaços do da classe 'HashTable' por isso o
    // uso do módulo '% this.table.length'
    
    //Método para inserir chaves e valores na HashTable
    set(key, valor) {
        const index = this._hash(key);
        if (this.table[index]) {
        
        //Para evitar um conflido de index, devemos guardar o par
        // de chaves em um array secundário.

        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index] [i] [0] === key) {
                this.table[index] [i] [1] = valor;
            return;
            }
        }

        this.table[index].push([key, valor]);
        }
        else {
            this.table[index].push = [];
            this.table[index].push([key, valor]);
        }

        this.size++;
    }

    //Método para obter um certo valor da HashTable.
    get(key) {
        const index = this._hash(key);
            //O index será guardado em 'table[index]'
        
        if (this.table[index]) {
            for (let i = 0; i < this.table.length; i++) {
        
            if (this.table[index] [i] [0] === key) {
                return this.table[index] [i] [1];
            }
            }
        }
        return undefined;

        }
    
    //Método para excluir um par de chaves/valores da HashTable
    remove(key) {
        const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
        for (let i = 0; i < this.table.length; i++) {
        
        if (this.table[index] [i] [0] === key) {
            this.table[index].splice(i, 1);
            this.size--;
            return true;
        }

        }
    } else {
        return false;
    }

    }

    //Método para mostrar todos os pared de chave/valor guardados
    // na HashTable
    display() {
        this.table.forEach((valores, index) => {
            const chinedValues = valores.map(
                ([key, valor]) => `[${key} : ${valor}]`
            );
            console.log(`${index} : ${chinedValues}`);
        });
    }
}

////////////////////////////////////////////////////////////////

const letters = new HashTable();

letters.set("F", 70);
letters.set("S", 83);
letters.set("A", 65);

letters.display();

console.log(letters.size); //3
letters.remove("S");
letters.display();
