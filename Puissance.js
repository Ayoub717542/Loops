const prompt = require("prompt-sync")()
let  a = parseInt(prompt("Entrer la base > 0 : "))
let  b = parseInt(prompt("Entrer la  exposant >= 0  :"))
let i = 0;
let r = 0;
if (a <= 0 || b < 0){
    console.log("Les valeurs saisies ne respectent pas les conditions (base > 0, exposant >= 0")
}
while(i < b){
     r = a * a;
    i++;
}
console.log("la resulta est : "+r);
