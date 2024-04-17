#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let currency : any = {
    USD : 1 ,
    PKR : 278 ,
    INR : 83.60 ,
    SAR : 3.75 ,
    AED : 3.67 ,
    GBP : 0.80 ,
    CNY : 7.24 ,
    JPY : 154
}


let title = chalk.bold.green("Currency Convertor");
console.log(`\t${title}`);


let input = await inquirer.prompt([
    {
    name : "from",
    message : "Choose the Currency to convert :",
    type : "list",
    choices : ["USD","PKR","INR","SAR","AED","GBP","CNY","JPY"]
 },
    {
        name : "to",
        message : "Choose the Currency to convert in :",
        type : "list",
        choices : ["USD","PKR","INR","SAR","AED","GBP","CNY","JPY"]
},
    {
        name : "amount",
        message : "Enter your amount :",
        type : "number"
}
])


//Getting user's currency exchange rate
let fromCurrency = currency[input.from];
let toCurrency : any = currency[input.to];
let amountChange = input.amount;


//Formula to convert Currency
let baseConvert = amountChange/fromCurrency;
let convertedAmount = baseConvert*toCurrency;


//Printing Result
console.log(`  Converted Amount is : ${Math.round(convertedAmount * 100)/100}`);


