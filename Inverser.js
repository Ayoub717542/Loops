const prompt = require("prompt-sync")()
let tab=[]
for (let i = 0 ; i<5 ; i++){
    tab[i]=prompt("donner 5 nombers : ")

}
console.log("les entieres dans l'ordre inverse sont : ")
let inverse = tab.slice().reverse();
console.log(inverse);
