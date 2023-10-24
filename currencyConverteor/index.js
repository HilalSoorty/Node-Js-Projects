#!/usr/bin/env node
import chalk from "chalk";
import inquirer from 'inquirer';
// Currency Converter API LINK
let apiLink = "https://v6.exchangerate-api.com/v6/69beb5c011b63b8f93abee2f/latest/PKR";
// Fetching Data function
let fetchData = async (data) => {
    let fetchData = await fetch(data);
    let res = await fetchData.json();
    return res.conversion_rates;
};
let data = await fetchData(apiLink); // Agar mai let a = fetchData(apiLink) aur log karwaoun ga toh pending likha ayega. Kyun kai data fetch karnei mai time lagta hai. There we put await. 
// Converting object into array
let countries = Object.keys(data);
// User input about first country
let firstCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Converting From",
    choices: countries,
});
// First country money
let userMoney = await inquirer.prompt({
    type: "number",
    name: "rupee",
    message: `Please enter the amount in ${chalk.redBright.bold(firstCountry.name)}`,
});
// Converting Country
let secondCountry = await inquirer.prompt({
    type: "list",
    name: "name",
    message: "Converting To",
    choices: countries,
});
let cnv = `https://v6.exchangerate-api.com/v6/69beb5c011b63b8f93abee2f/pair/${firstCountry.name}/${secondCountry.name}`;
// Fetching data for conversion rate.
let cnvData = async (data) => {
    let cnvData = await fetch(data);
    let res = await cnvData.json();
    return res.conversion_rate;
};
let conversionRate = await cnvData(cnv);
let convertedRate = userMoney.rupee * conversionRate;
console.log(`Your ${chalk.bold.redBright(firstCountry.name)} ${chalk.bold.redBright(userMoney.rupee)} in
 ${chalk.bold.redBright(secondCountry.name)} is ${chalk.bold.redBright(convertedRate)}`);
