"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 2;
if (wakeUpTime == 7) {
  printOut("I can take the bus to school.");
} else if(wakeUpTime == 8){
  printOut("I can take the train to school")
}else {
  printOut("I have to take the car to school");
}


printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let value = -17;

if (value > 0){
  printOut("Positive")
} else if(value < 0) {
  printOut("Negative")
} else if(value == 0){
  printOut("Zero")
}
printOut(newLine);

printOut("--- Part 6 and 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let photoSize = 4;
let maxSize = 6;
let randomSize = Math.random() * 8;

if (randomSize < photoSize){
  printOut("Image is to small")
} else if (randomSize >= maxSize){
  printOut("Image is too large")
} else {
  printOut("Thank you")
}
printOut("Replace this with you answer!");
printOut(newLine);


printOut("--- Part 8 and 9 ----------------------------------------------------------------------------------------------");
const monthList = ["January", "February", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "October", "November", "December"];
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
const noOfMonth = monthList.length;
const monthIndex = Math.floor(Math.random() * noOfMonth);
const monthName = monthList[monthIndex];
const days = daysInMonth[monthIndex];

printOut(`Month: ${monthName}`);
if (monthName.includes("r")) {
    printOut(`${monthName}: You must take vitamin D`);
} else {
    printOut(`${monthName}: You do not need to take vitamin D`);
}


printOut(`There are ${days} days in ${monthName}.`);




/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
let status;

if (monthName === "Mars" || monthName === "Mai") {
  status = "The Gallery is closed";
} else if (monthName === "April") {
  status = "The Gallery has temporary premises in the building next door";
} else {
  status = "The Gallery is open!";
}

printOut(`Month: ${monthName}`);
printOut(status)
printOut(newLine);
