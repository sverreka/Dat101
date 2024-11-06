"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
function todaysDate() {
    const event = new Date();
    printOut(event.toLocaleString('no-NB', { timeZone: 'CET' }));
}
todaysDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function todaysDateBetter() {
    const event = new Date();
    const date = event.toLocaleString('no-NB', { 
        timeZone: 'CET',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
     })
    printOut(`Dagens dato er ${date}!`);
}

function gameRelease(){
    const dateToday = new Date();
    const releaseDate = new Date('2025-05-14');
    const timeToRelease = releaseDate - dateToday;
    const timeInDays = Math.ceil(timeToRelease / (1000*60*60*24));

     printOut(`Det betyr at 2XKO lanseres om bare ${timeInDays} dager! Finn fram din indre gamer å hold datoen KLAR!`)
}

function countdown(){
    const event = new Date();
    const date = event.toLocaleString('no-NB', { 
        timeZone: 'CET',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
     })
    

}

todaysDateBetter();
gameRelease();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Create a function that receives the radius of a circle and prints the diameter, circumference, and area.*/
function circle(r){
    let radius = r;
    let diameter = r*2;
    let omkrets = diameter*Math.PI;
    let areal = Math.PI * radius ** 2;

    printOut(`Radius: ${radius}`);
    printOut(`Diameter: ${diameter}`);
    printOut(`Circumference: ${omkrets.toFixed(2)}`);
    printOut(`Area: ${areal.toFixed(2)}`);
}

circle(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle.*/
function rectangle(h,w){
    let height = h;
    let width = w;

    let circumference = 2*height + 2*width;
    let area = height*width

    printOut(`Height: ${height}, Width: ${width}`);
    printOut(`Circumference: ${circumference}`);
    printOut(`Area: ${area}`);
}

rectangle(4,5);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function conversion(d,t){
    let degree = d;
    let type = t;
    let celcius = 0;
    let fahrenheit = 0;
    let kelvin = 0;

    if (type==="celcius"){
        fahrenheit = (degree)*9/5+32;
        kelvin = degree+273.15
        
        printOut(`${degree} degrees ${type} is converted to: `);
        printOut(`Fahrenheit: ${fahrenheit}`);
        printOut(`Kelvin: ${kelvin}`);

    } else if (type==="fahrenheit"){
        celcius = Math.floor((degree-32)*5/9);
        kelvin = (celcius+273.15);
        
        printOut(`${degree} degrees ${type} is converted to: `);
        printOut(`Celcius: ${celcius}`);
        printOut(`Kelvin: ${kelvin}`);
    } else if (type==="kelvin"){
        celcius = degree - 273.15;
        fahrenheit = (degree)*9/5+32;
        
        printOut(`${degree} degrees ${type} is converted to: `);
        printOut(`Celcius: ${celcius}`);
        printOut(`Fahrenheit: ${fahrenheit}`);
    }
}
conversion(30, "celcius");
printOut(newLine);
conversion(120, "fahrenheit");
printOut(newLine);
conversion(579, "kelvin");
printOut(newLine);
printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function salesTax(p,g){
    let gross = p;
    let taxGroup = g.toLowerCase();
    let vat = 0;
    let net = (100 * gross) / (vat + 100);

    if (taxGroup === "normal"){
        vat = 25;
        net = (100 * gross) / (vat + 100);
        printOut(`${gross} is ${net.toFixed(2)} without normal VAT.`);

    }else if (taxGroup === "food"){
        vat = 15;
        net = (100 * gross) / (vat + 100);
        printOut(`${gross} is ${net.toFixed(2)} without food VAT.`);
        

    }else if (taxGroup === "hotel" || taxGroup === "transport" || taxGroup === "cinema"){
        vat = 10;
        net = (100 * gross) / (vat + 100);
        printOut(`${gross} is ${net.toFixed(2)} without hotel, transport, and cinema VAT.`);
        

    }else {
        printOut(`Error: "${taxGroup}" is an unknown tax group!`);

    }
}

salesTax(2300, "normal");
salesTax(500, "food");
salesTax(1300, "hotel");
salesTax(1005,"test");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculation(s,d,t){
    let speed = s;
    let distance = d;
    let time = t;

    
    if ((isNaN(speed) && isNaN(distance)) || (isNaN(speed) && isNaN(time)) || (isNaN(distance) && isNaN(time))) {
        printOut(`Speed: ${speed.toFixed(2)}`);
        printOut(`Distance: ${distance.toFixed(2)}`);
        printOut(`Time: ${time.toFixed(2)}`);
        printOut(newLine);

    }else if (isNaN(distance)){
        if (!isNaN(speed) && !isNaN(time)){
            distance = speed*time;
            printOut(`Speed: ${speed.toFixed(2)}`);
            printOut(`Distance: ${distance.toFixed(2)}`);
            printOut(`Time: ${time.toFixed(2)}`);
            printOut(newLine);
        }


    }else if (isNaN(time)){
        if (!isNaN(speed) && !isNaN(distance)){
            time = distance/speed;
            printOut(`Speed: ${speed.toFixed(2)}`);
            printOut(`Distance: ${distance.toFixed(2)}`);
            printOut(`Time: ${time.toFixed(2)}`);
            printOut(newLine);
        }

    } else  if (isNaN(speed)){
        if (!isNaN(distance) && !isNaN(time)){
            speed = distance/time;
            printOut(`Speed: ${speed.toFixed(2)}`);
            printOut(`Distance: ${distance.toFixed(2)}`);
            printOut(`Time: ${time.toFixed(2)}`);
            printOut(newLine);
        }

    }
    
}
calculation(NaN,100,3);
calculation(100,NaN,30);
calculation(67,50,NaN);
calculation(NaN,NaN,100);
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function textAltering(s,m,t,b){
    let textString = s;
    let maxSize = m;
    let textCharacter = t;
    let booleanValue = b;

    let strLen = textString.length;
    let missingLen = maxSize - strLen;

    if (strLen >= maxSize){
        printOut(textString);
        return textString;
    }

    if (booleanValue){
        textString = textCharacter.repeat(missingLen) + textString;

    } else {
        textString = textString + textCharacter.repeat(missingLen);
    }
    printOut(textString);
    return textString;
}
textAltering("Test",13,"A",true);
textAltering("Test",13,"A",false);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function checkEquations() {
    let lines = 200;
    let allHold = true;
    let leftStart = 1;
    let rightStart = 3;
    let leftAdditions = 2;
    let rightAdditions = 1;

    for (let i = 1; i <= lines; i++) {
        let leftSide = sumRange(leftStart, leftStart + leftAdditions);
        let rightSide = sumRange(rightStart, rightStart + rightAdditions);

        let result;
        if (leftSide !== rightSide) {
            allHold = false;
            result = `line ${i}: ${leftSide} != ${rightSide}`;
        } else {
            result = `line ${i}: ${leftSide} == ${rightSide}`;
        }

        printOut(`${result} | Equation: sum(range(${leftStart}, ${leftStart + leftAdditions})) == sum(range(${rightStart}, ${rightStart + rightAdditions}))`);

        
        leftStart = rightStart + rightAdditions;
        rightStart = leftStart + leftAdditions + 1;
        leftAdditions += 1;
        rightAdditions += 1;
    }

    return allHold;
}

function sumRange(start, end) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += i;
    }
    return sum;
}

const result = checkEquations(200);
printOut(`maths fun`);






/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    if (n === 0) {
        return 1;  
    } else {
        let answer = n * factorial(n - 1);  
        printOut(`Factorial of ${n} is ${answer}`);  
        return answer;
    }
}

factorial(4);
printOut(newLine);
