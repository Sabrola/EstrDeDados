function hanoi (n, origin, destiny, aux) {

    if(n == 1) {
        console.log("Mova disco do pino " + origin + " para o pino " + destiny + ".")
    } else {
        hanoi(n - 1, origin, aux, destiny)
        console.log("Mova disco do pino " + origin + " para o pino " + destiny + ".")
        hannoi(n - 1, aux, destiny, origin)
    }

}

hanoi(3, 'A', 'B', 'C');
