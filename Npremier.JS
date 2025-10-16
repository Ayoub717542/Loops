const prompt = require("prompt-sync")()
let n = prompt("donner un nomber : ")
while (n >= 0){
 let cpt = 0

    for(let i = 1 ; i <= n;i++) {
        if (n % i === 0){
            cpt += 1;
        }
    }}
     if (cpt === 2){
        console.log("ce nomber est premier")
    }else {
        consol.log("ce nomber n est pas premier")
    } 


     