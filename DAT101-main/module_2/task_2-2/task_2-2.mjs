"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

let a = 2 + 3 * 2 - 4 * 6
var b = 2 + 3 * (2-4) * 6
printOut("2 + 3 * 2 - 4 * 6 = " +a);
printOut("2 + 3 * (2 - 4) * 6 = " +b);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const inch = 25.4 /*milimetres*/
let meter = 25, cm = 34 + meter*100
let milimeter = cm*10
let answer = (milimeter/inch).toFixed(2)


printOut("25 meters and 34 cm in inches = "+answer);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
var days = 3
var hours = 12 
var minutes = 14
var seconds = 45
var part3 = (days*24*60) + (hours*60) + minutes + (seconds/60)


printOut("3 days, 12 hours, 14 minutes and 45 seconds converted to minutes is "+part3 +" minutes" );
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

var total = 6322.52;

var days = Math.floor(total / (24*60));
var remaining = total % (24*60);

var hours = Math.floor(remaining / 60);
remaining = remaining%60;

var minutes = Math.floor(remaining);

var seconds = Math.round((remaining - minutes)*60);




printOut("Days= " +days.toFixed(0) +", hours= " +hours.toFixed(0) + ", minutes= "+minutes.toFixed(0) +", seconds= " +seconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
var dollars = 54
var usd = 76/8.6;  
var nok = 1/usd;
printOut("1 USD to NOK = "+usd.toFixed(2));
printOut("1 NOK to USD = "  +nok.toFixed(2));
printOut("54 USD converted to NOK is " +dollars*usd.toFixed(0) + " Kroner")
printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
function amount(string) {
    printOut("Amount of characters in the string: " +string.length)
}

function nineteen(string) {
    printOut("The nineteenth character in the string is: " +string[19])
}

function fromforward(string) {
    for (var i = 35; i < 35+8; i++) {
        printOut("the " +i +"th character is " +string[i])
    }
}

function printIndex(string) {
    var index = string.indexOf("earth")
    printOut("The word earth starts at index " +index)
}
var text = "There is much between heaven and earth that we do not understand."

amount(text)
nineteen(text)
fromforward(text)
printIndex(text)

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


printOut("Is 5 greater than 3? "+ Boolean(5 > 3));
printOut("Is 7 greater than or equal to 7? "+ Boolean( 7 >= 7));
printOut("Is 'a' greater than 'b'? "+ Boolean(a>b));
printOut("Is '1' less than 'a'? "+ Boolean(1<a));
printOut("Is '2500' less than 'abcd'? "+ Boolean('2500'<'abcd'));
printOut("'arne' is not equal to 'thomas' "+ Boolean('arne' !='thomas'));
printOut("(2 equals 5) is this statement true? "+ Boolean(2==5));
printOut("('abcd' is greater than 'bcd') is this statement false? "+ Boolean('abcd' > 'bcd'));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

var text1= "254"
var nr1 = parseInt(text1)
var text2= "57.23"
var nr2 = parseFloat(text2)
var text3= "25 kroner"
var nr3=parseInt(text3)


printOut("The numbers extracted are now: " +nr1 +", " +nr2 +", " +nr3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
var random = Math.floor(Math.random() *360)
printOut("the random number is: " +random);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
var daystotal = 131
var days = 131%7
var weeks = (daystotal-days)/7
printOut("In 131 days there are " +weeks +" weeks, and " +days +" days.");
printOut(newLine);