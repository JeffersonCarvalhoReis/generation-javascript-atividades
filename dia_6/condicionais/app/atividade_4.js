import leia from 'readline-sync' 

let caracteristica1, caracteristica2, caracteristica3

caracteristica1 = leia.question("Escreva a primeira caracteristica do seu animal (vertebrado ou invertebrado) ")

if (caracteristica1 === 'vertebrado') {
    caracteristica2 = leia.question("Escreva a segunda caracteristica do seu animal (ave ou mamifero) ")

    if (caracteristica2 === 'ave') {
        caracteristica3 = leia.question("Escreva a terceira caracteristica do seu animal (carnivoro ou onivoro) ")
        if (caracteristica3 === 'carnivoro') {
            console.log("Seu animal é uma águia!")
        } else if (caracteristica3 === 'onivoro') {
            console.log("Seu animal é uma pomba!")
        } else {
            console.log("Caracteristca inválida")
        }
    } else if (caracteristica2 === 'mamifero') {
        caracteristica3 = leia.question("Escreva a terceira caracteristica do seu animal (herbivoro ou onivoro) ")
        if (caracteristica3 === 'herbivoro') {
            console.log("Seu animal é uma vaca!")
        } else if (caracteristica3 === 'onivoro') {
            console.log("Seu animal é um homem!")
        } else {
            console.log("Caracteristca inválida")
        }
    } else {
        console.log("Caracteristca inválida")
    }
} else if (caracteristica1 === 'invertebrado') {
    caracteristica2 = leia.question("Escreva a segunda caracteristica do seu animal (inseto ou anelideo) ")

    if (caracteristica2 === 'inseto') {
        caracteristica3 = leia.question("Escreva a terceira caracteristica do seu animal (herbivoro ou hematofago) ")
        if (caracteristica3 === 'herbivoro') {
            console.log("Seu animal é uma lagarta!")
        } else if (caracteristica3 === 'hematofago') {
            console.log("Seu animal é uma pulga")
        } else {
            console.log("Caracteristca inválida")
        } 
    } else if (caracteristica2 === 'anelideo') {
        caracteristica3 = leia.question("Escreva a terceira caracteristica do seu animal (onivoro ou hematofago) ")
        if (caracteristica3 === 'onivoro') {
            console.log("Seu animal é uma minhoca!")
        } else if (caracteristica3 === 'hematofago') {
            console.log("Seu animal é uma sanguessuga")
        } else {
            console.log("Caracteristca inválida")
        }
    } else {
        console.log("Caracteristca inválida")
    }
} else {
    console.log("Caracteristca inválida")
}