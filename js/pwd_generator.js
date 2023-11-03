const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ';', ':', "'", '"', '<', '>', ',', '.', '?', '/', '`', '~', '\t', '\n'];

let allArrays=[alphabets,numbers,symbols]
let pwd="";

function generatepwd() {
    let length=document.getElementById("length").value;
console.log(length)
    for(let i=0;i<length;i++){
        let randomArrayIndex=Math.floor(Math.random()*3);
        let randomCharacterIndex=Math.floor(Math.random()*allArrays[randomArrayIndex].length);

        pwd+= allArrays[randomArrayIndex][randomCharacterIndex];

    }
    document.getElementById("password").textContent=pwd
    pwd="";
}