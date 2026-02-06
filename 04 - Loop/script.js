//Estrutura repetição

// For

//While

// DO While

// Exemplo for

//Exemplo de for somando numeros

let soma = 0;

for (let i = 1; i <= 5; i++){
    soma += i;
}

console.log("A soma é: " + soma);


let somaNumerospar = 0

for(let i = 0; i <= 10; i++) {

    if( i % 2 === 0){
       somaNumerospar += i
    }

}

console.log("A soma dos numeros pares é igual á:", + somaNumerospar)

let multiplicarCinco = 0

for(let m = 0; m <= 10; m++){

    multiplicarCinco =+ m * 5

    console.log("5 x", + m, "= "  + multiplicarCinco)
}

// fazer ordem decresente de 4 em 4 começando 50


for(let i = 50; i >= 0; i-=4){


 console.log("Ordem: " + i)

}