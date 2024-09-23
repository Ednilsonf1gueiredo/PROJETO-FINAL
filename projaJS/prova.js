function calculoMediaponderada(n1,n2,n3,p1,p2,p3){
    // calculo o total de pesos
    const totalPessos  = p1 + p2 + p3;
    
    // calcular a soma  das notas multiplicando por seus respectivos pessos 
    const somaPoderada = (n1*p1) (n2*p2) (n3*p3);
    
    //calcular a media ponderada
    const mediaPonderada = somaPonderada / totalPessos;

    return mediaponderada;


}

//  exibindo a média ponderada no console.

const n1 = 8;
const n2 = 9;
const n3 = 5;

const p1 = 2;
const p2 = 1;
const p3 = 4;
 
const media = calculoMediapoderada(n1,n2,n3,p1,p2,p3);
console.log(`A media ponderada é: ${media.toFixed(2)}`);