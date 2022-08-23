function main (){
    let opt
    let vetor = []
    do {
        opt = Number(prompt(`1 - Cadrastar, 2 - Mostrar, 3 - y, 4 - z, 5 - Sair`))
        switch(opt) {
            case 1:
            N = Number(prompt(`Insira quantidade de elementos desejados:`))
            if (vetor.lenght+qtd < 50){
                add(vet, qtd)
            }
            else{
                console.log('Quantidade ultrapsa 50 elementos.')
            }
            break
            case 2: alert(vetor)
            break
            case 3: 
            let cod = prompt(`Deseja remover por indice ou valor?`)
            if (cod === "i"){
                let indice = Number(prompt(`Digite o indice que deseja remover:`))
                removeEventListener(vetor, indice)
                alert(vetor)
            }
            else {
                
            }
            break
            case 4: 
                let type = prompt(`Digite par ou impar:`)
                result = plusEodd(vetor, type)
                alert(result)
            break
            case 5: 
                let p1 = Number(prompt(`Insira a posição inicial:`))
                let p2 = Number(prompt(`Insira a posição final:`))
                result = plus_indice(vetor, p1, p2)
                alert(result)
                break
            case 6:
                alert(`Programa será encerrado.`)
        }
    }

    while(0)
}
