const prompt = require("prompt-sync")()

let max = 0;
let somme =0;
let n;
 
while( n != 0){
    n = parseInt(prompt("Entrer Un Serie Nombres positifs "))
        if ( n < 0 || n>100 ){
    n = parseInt(prompt("donner un nomber Positif Et Inferieur a 100 : "))

    }
         somme += n;
    

 if ( max < n ){
    max = n
 }
}
console.log("La somme d'un serie Nombres positifs est : "+somme)
console.log("Le max d'un serie Nombres positifs est : "+max)
