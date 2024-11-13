"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kreditkonto",
    Pension: "Pensionkonto"
};
printOut(`${AccountType.Normal}, ${AccountType.Saving}, ${AccountType.Credit}, ${AccountType.Pension}`);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const Currency = {
    NOK: { value: 1.0000, name: "Norske Kroner", denomination: "kr" },
    EUR: { value: 0.0985, name: "Europeiske Euro", denomination: "€" },
    USD: { value: 0.1091, name: "United States Dollar", denomination: "$" },
    GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
    INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
    AUD: { value: 0.1581, name: "Australske Dollar", denomination: "A$" },
    PHP: { value: 6.5189, name: "Fillippinske peso", denomination: "₱" },
    SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1435, name: "Kanadiske Dollar", denomination: "C$" },
    THB: { value: 3.3289, name: "Thai Baht", denomination: "฿" }
};

class TAccount {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;

    constructor(accountType, initialBalance = 0) {
        this.#type = accountType;
        this.#balance = initialBalance;
        this.#withdrawCount = 0;
        this.#currencyType = Currency.NOK; // Default to NOK
    }

    toString() {
        return `${this.#type} (${this.#currencyType.denomination})`;
    }

    setType(newType) {
        const oldType = this.#type;
        this.#type = newType;
        this.#withdrawCount = 0;
        printOut(`Account type changed from ${oldType} to ${newType}`);
    }

    getBalance() {
        return `${this.#balance.toFixed(2)}${this.#currencyType.denomination}`;
    }

    #convertAmount(amount, fromCurrency, toCurrency) {
        const conversionRate = fromCurrency.value / toCurrency.value;
        return amount * conversionRate;
    }

    deposit(amount, currency = Currency.NOK) {
        // Convert the amount to account's currency
        const convertedAmount = this.#convertAmount(amount, currency, this.#currencyType);
        this.#balance += convertedAmount;
        this.#withdrawCount = 0;
        printOut(`Deposit of ${amount.toFixed(2)} ${currency.name.toLowerCase()}, new balance is ${this.getBalance()}`);
    }

    setCurrencyType(newCurrency) {
        if (this.#currencyType === newCurrency) return;

        const oldCurrency = this.#currencyType;
        const convertedBalance = this.#convertAmount(this.#balance, this.#currencyType, newCurrency); // Convert the balance to the new currency
        this.#currencyType = newCurrency;
        this.#balance = convertedBalance;
        printOut(`The account currency has changed from ${oldCurrency.name} to ${newCurrency.name}`);
        printOut(`New balance is ${this.getBalance()}`);
    }

    withdraw(amount, currency = Currency.NOK) {
        // Convert the amount to account's currency
        const convertedAmount = this.#convertAmount(amount, currency, this.#currencyType);
        if (convertedAmount > this.#balance) {
            printOut(`Insufficient balance. Cannot withdraw ${amount.toFixed(2)} ${currency.name.toLowerCase()}`);
            return;
        }

        switch (this.#type) {
            case AccountType.Pension:
                printOut(`You can't withdraw from ${this.#type}`);
                break;
            case AccountType.Saving:
                if (this.#withdrawCount >= 3) {
                    printOut(`You can't withdraw from ${this.#type} more than 3 times!`);
                } else {
                    this.#balance -= convertedAmount;
                    this.#withdrawCount++;
                    printOut(`Withdrawal of ${amount.toFixed(2)} ${currency.name.toLowerCase()}, new balance is ${this.getBalance()}`);
                }
                break;
            default:
                this.#balance -= convertedAmount;
                this.#withdrawCount++;
                printOut(`Withdrawal of ${amount.toFixed(2)} ${currency.name.toLowerCase()}, new balance is ${this.getBalance()}`);
                break;
        }
    }

    resetBalance() {
        this.#balance = 0;
        printOut(`Balance has been reset to ${this.getBalance()}`);
    }
}

const myAccount = new TAccount(AccountType.Normal);
myAccount.deposit(25);
myAccount.setType(AccountType.Saving);
myAccount.deposit(75);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
myAccount.deposit(100);
myAccount.withdraw(25);
printOut(`My account balance is ${myAccount.getBalance()}`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(10);

myAccount.setType(AccountType.Pension);
myAccount.withdraw(10);

myAccount.setType(AccountType.Saving);
myAccount.withdraw(10);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
myAccount.setCurrencyType(Currency.NOK);
myAccount.deposit(150);
printOut(`myAccount balance is ${myAccount.getBalance()}`);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*myAccount.deposit(12, Currency.USD); // Deposit in USD
myAccount.withdraw(10, Currency.GBP); // Withdraw in GBP
myAccount.setCurrencyType(Currency.CAD); // Change to Canadian Dollar
myAccount.setCurrencyType(Currency.INR); // Change to Indian Rupee
myAccount.withdraw(150.11, Currency.SEK); // Withdraw in SEK
*/
printOut(newLine);
