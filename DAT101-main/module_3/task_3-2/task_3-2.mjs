"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

let result = "";

/*For loop som printer ut 1 til 10 stigende*/
for (let i = 1; i <= 10; i++){
    result += i;
    if (i < 10){
        result += ",";
    }
}
printOut(result);


/*For loop som printer ut 10 til 1 synkende*/
result = "";
for (let i = 10; i >= 1; i--){
    result += i;
    if (i > 1){
        result += ",";
    }
}
printOut(result);


printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
let target = 45;
let guess = 0;



/*While loop som velger eit tilfeldig tall mellom 1 og 60 til den treffer rett tall som står i target variabelen*/
while (guess!==target){
    guess = Math.floor(Math.random()*60) + 1;
}
printOut(`Tallet er: ${guess}`)
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
target = 133733;
guess = 0;
let guessAttempts = 0;

let tidStart = Date.now();

/*While loop som velger eit tilfeldig tall mellom 1 og 60 til den treffer rett tall som står i target variabelen*/
while (guess!==target){
    guess = Math.floor(Math.random()*1000000) + 1;
    guessAttempts++;
}

let tidSlutt = Date.now();
let totalTid = tidSlutt - tidStart;
printOut(`Tallet er: ${guess}. Det tok ${guessAttempts} forsøk og ${totalTid} millisekund på å gjette riktig.`);


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let prime = "";
for (let i=2;i<=200;i++){
    let divisor = 2;
    let isPrime = true;

    while (divisor <= Math.sqrt(i)) {
        if (i % divisor === 0){
            isPrime = false;
            break;
        }
        divisor++;
    }
    if (isPrime) {
        prime += i + ", ";
    }
}
/*Fjerner komma som kommer på slutten*/
if (prime.length > 0) {
    prime = prime.slice(0, -2); // Remove the last comma and space
}

printOut(prime);
printOut(newLine);



printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let colum = 9;
let row = 7;
let text = "";

for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= colum; j++){
        text += "K";
        text += i;
        text += "R";
        text += j;
        text += " ";
    }
    text += "<br>";
}
printOut(text);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let student = [];
let karakter = "";

for (let i = 0; i < 5; i++) {
    student[i] = Math.floor(Math.random() * 236) + 1; 
    if (student[i]/236*100 <= 100){karakter = "A"}
    if (student[i]/236*100 <= 88){karakter = "B"}
    if (student[i]/236*100 <= 76){karakter = "C"}
    if (student[i]/236*100 <= 64){karakter = "D"}
    if (student[i]/236*100 <= 52){karakter = "E"}
    if (student[i]/236*100 <= 40){karakter = "F"}
    printOut(`Student ${i + 1}: Score = ${student[i]}, Karakter = ${karakter}`);

}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

//Funskjon for å finne 3 par
function trePar(arr) {
    const count = {};

    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    const par = Object.values(count).filter(v => v === 2);

    return par.length === 3;
}

//Funksjon for å finne tårn

function towertest(arr) {
    const count = {};

    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    const counts = Object.values(count);

    return counts.includes(4) && counts.includes(2);
}




let kast = null;
let threePairs = false;
let twoOfaKind = false;
let yahtzee = false;
let tower = false
let attemptsStraight = 0;
let attemptsYahtzee = 0;
let attemptsThreePairs = 0;
let attemptsTower = 0;
let straight = false;

while (!straight || !yahtzee || !threePairs || !tower) {
    let dice = [];

    for (let i = 0; i < 6; i++) {
        let j = Math.floor(Math.random() * 6) + 1;
        dice[i] = j;
    }
    /*Straight*/
    attemptsStraight++;
    dice.sort();
    if (!straight && dice[0] === 1 && dice[1] === 2 && dice[2] === 3 && dice[3] === 4 && dice[4] === 5 && dice[5] === 6) {
        kast = dice;
        straight = true; 
        printOut(`Ditt kast er: ${kast.join(", ")}`);
        printOut(`Du fikk Straight på ${attemptsStraight} forsøk!`)
    }


    /*Yahtzee*/
    attemptsYahtzee++;
    if (!yahtzee && dice.every(value => value === dice[0])) {
        kast = dice;
        yahtzee = true; 
        printOut(`Ditt kast er: ${kast.join(", ")}`);
        printOut(`Du fikk Yahtzee på ${attemptsYahtzee} forsøk!`)
    }

    /*Three Pairs*/
    attemptsThreePairs++;
    if (!threePairs && trePar(dice)){
        threePairs = true;
        kast = dice;
        printOut(`Ditt kast er: ${kast.join(", ")}`);
        printOut(`Du fikk 3 par på ${attemptsThreePairs} forsøk!`)
    }

    /*Tower*/
    attemptsTower++;
    if (!tower && towertest(dice)){
        tower = true;
        kast = dice;
        printOut(`Ditt kast er: ${kast.join(", ")}`);
        printOut(`Du fikk tårn på ${attemptsTower} forsøk!`)
    }

}

printOut()
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
