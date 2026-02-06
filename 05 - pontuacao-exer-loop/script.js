//POntuação menor ou igual a tres - baixo
//POntuação maior 3 e menores igual a 18 - medio 
// pontuação maiores que 18 e menores igual que 21 - alto

let pontuacaoTotal = document.querySelector(".painel")

for (let i = 1; i <= 21; i++){
     //criadno element java script 
     let bloco  = document.createElement("div")
     //Adcionando a classe pelo elemento com java script
     bloco.classList.add("bloco")

     bloco.textContent = i

     //verificar se é par ou impar
     if ( i <= 3 ) {
         //Adcionando a classe pelo elemento com java script
        bloco.classList.add("nivel-baixo")
     }
     else if( i > 3 && i <= 18){
        //Adcionando a classe pelo elemento com java script
        bloco.classList.add("nivel-medio")
     }
     else{
        bloco.classList.add("nivel-alto")
     }

     //Adciona o filho para a lista
     pontuacaoTotal.appendChild(bloco)
}