"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for (let i = 0; i<numbers.length; i++){
    printOut(`indeks ${i} = tall: ${numbers[i]}`)
}
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(numbers.join(`,`));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const setning = "hei på deg, hvordan har du det";
const setningArray = setning.split(' ');

for (let i = 0; i < setningArray.length; i++){
    printOut(`Ordnr: ${i+1}, Indeks: ${i}, Ord: ${setningArray[i]}`)
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const navn = ["Anne","inger","Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
    "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeElement(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
        printOut(`${element} har blitt fjernet fra arrayet.`);
    } else {
        printOut(`${element} finnes ikke i arrayet.`);
    }
    printOut(`${navn.join(',')}`);
}
printOut(newLine);

printOut(`${navn.join(',')}`);
removeElement(navn, "Anne");


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const gutteNavn = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor",
"Magnus"]

const alleNavn = navn.concat(gutteNavn);
printOut(`${alleNavn.join(',')}`);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
class TBook {
    #title;
    #author;
    #isbn;

    constructor(aTitle, aAuthor, aISBN) {
        this.#title = aTitle;
        this.#author = aAuthor;
        this.#isbn = aISBN;
    }

    toString() {
        return `Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`;
    }
}

const books = [
    new TBook("Snømannen", "Jo Nesbø", "2938748279293"),
    new TBook("Harry Potter", "J.K Rowling", "0293029399020"),
    new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084")
];

for (const book of books) {
    printOut(book.toString());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
const EWeekDays = {
    Weekday1: {value: 0x01, name: "Mandag"},
    Weekday2: {value: 0x02, name: "Tirsdag"},
    Weekday3: {value: 0x04, name: "Onsdag"},
    Weekday4: {value: 0x08, name: "Torsdag"},
    Weekday5: {value: 0x10, name: "Fredag"},
    Weekday6: {value: 0x20, name: "Lørdag"},
    Weekday7: {value: 0x40, name: "Søndag"},
    Workdays: {value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager"},
    Weekends: {value: 0x20 + 0x40, name: "Helg"},
}

const keys = Object.keys(EWeekDays);


for (const key of keys) {
    printOut(`${key}: ${EWeekDays[key].name} (Verdi: ${EWeekDays[key].value})`);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
