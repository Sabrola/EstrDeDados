function sort (array, left, right) {

    var i = left
    var j = right
    var aux

    var pivotidx = (left + right) / 2
    var pivot = parseInt(array[pivotidx.toFized()])

    //Partição
    while(i <= j) {
        while(parseInt(array[i]) < pivot) {
            i++
        }
        while (parseInt(array[j]) > pivot){
            aux = array[i]
            array[i] = array[j]
            array[j] = aux
            i++
            j--
        }
    }

    //recursão
    if (left < j) {
        sort(array, left, j)
    }
    if (i < right) {
        sort(array, i, right)
    }

}

let nums = [6, 7, 8, 9, 2, 44, 6, 78, 5, 3, 26, 7, 89, 609]

sort(nums, 0, nums.length-1)
