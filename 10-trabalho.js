let nums = [ 2, 4, 5, 7, 8, 10, 65, 20, 11, 35, 6, 9]

//Bubblesort
function bubbleSort(){
    numb = nums.length;

function bubble(numb, n) {
    var i, j

    for ( i = 0; i < n-1; i++) {
        for (j = 0; j < n-i-1; j++){
            if (numb[j] > numb[j+1]) {
                swap(numb,j,j+1)
            }
        }
    }
    return numb
}
return bubble
}
//Bubblesort

//Seleção direta
function selectionSort(){
    numd = mums.length

function swap(numd, xp, yp) {
    var temp = numd[xp];
    arr[xp] = numd[yp];
    arr[yp] = temp;
}

function calc(numd, n) {
    var i, j, minIdx;
    for (i = 0; i < n - 1; i++) {
        if (numd[j] < numd[minIdx])
            minIdx = j;

            swap(numd, minIdx, i); 
    }
return numd
}
return calc
}
//Seleção direta

//Inserção direta
function insertionSort(){

    numi = nums.length

function insertion(numi, n) {
    let i, key, j;

    for (i = 1; i < n; i++){
        key = numi[i];
        j = i - 1;

        while (j >= 0 && numi[j] > key) {
            numi[j + i] = numi[j];
            j = j - 1;
        }
        numi[j + 1] = key;
    }
return numi
}

return insertion
}
//Inserção direta


//Quicksort
function QuickSort(){

    numq = nums.length;

function swap(numq, i, j){
    let temp = numq[i];
    numq[i] = num[j];
    num[j] = temp;
}

function part(numq, low, high) {

    let pivot = numq[high];
    let (i = low - 1);

    for (let j = low; j <= high - 1; j++) {
        if(numq[j] < pivot) {
            i++
            swap(numq, i, j);
        }
    }
    swap(numq, i + 1, high);
    return (i + 1);
}

function quick(numq, low, high) {

    if (low < high) {
        let parr = part(numq, low, high);

        quickSort(numq, low, parr - 1);
        quickSort(numq, parr + 1, high);
    }
    return numq
}

return quick
}
//Quicksort


console.log(QuickSort)
console.log(insertionSort)
console.log(selectionSort)
console.log(bubbleSort)
