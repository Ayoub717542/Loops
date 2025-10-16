const prompt = require("prompt-sync")()
let somme =0;
let n;
while(n != 0){
 n = parseInt(prompt("Entrer 10 positive numbers : "))
  if ( n < 0){
    n = parseInt(prompt("donner un nomber Positif  : "))

    }
         somme += n;
}
console.log(" la somme des nombres valides est : "+somme)


