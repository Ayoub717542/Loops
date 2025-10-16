const prompt = require("prompt-sync")();
let N = prompt("donner un number : ")
for (let i = 1 ; i <= 10 ; i++){
    let R = N*i;

    console.log(N +"*"+ i +"="+ R )
}
