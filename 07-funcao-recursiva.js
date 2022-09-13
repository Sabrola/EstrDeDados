//A função recursiva se repete sozinha, chamando a si mesma em loop.

function fatorial (num) {

    //É importante se lembrar de colocar sua chamada de parada, caso contrario ele se reptira infinitamente.
    if (num < 0) {
        return -1;
    } 
    else if (num === 0) {
        return 1;
    } else {
        return (num * fatorial(num-1));
    }
}
var result = fatorial(8);
//console.log(result);

/////////////////////////////////////////////////////////////////////

function help(fib) {

    if ((fib == 1), (fib == 2)) {
        return 1;

    } else {
        return(help(fib-1) + help(fib-2))
    }
}

var resulte = help(7);
console.log(resulte);

////////////////////////////////////////////////////////////////////////

function potent(base, exp) {

    if(exp == 0) {
        return 1
    }
    return (base * potent(vase, exp-1))
}

var restule = potent(5, 4);
console.log(restule)

//////////////////////////////////////////////////////////////////////////////

function binary(vet, ini, fim, x){
    var middle

    if (ini > fim) {
        return -1
    } else {
        middle = Math.floor(ini + end) /2
        
        if (vet[middle] == x) {
            return middle
        } else if (x < vet[middle]) {
            return (find(vet, ini, middle - 1, x))
        } else {
            return (find(vet, middle + 1, end, x))
        }
    }
}

var resultz = find(nums, 0, nums.length, 20)
console.log(resultz)
