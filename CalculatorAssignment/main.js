#!/usr/bin/env node
// import { log } from "console";
import { sum } from "./add.js";
import inquirer from "inquirer";
import chalk from 'chalk';
import { isEvenOrOdd } from "./divide.js";
import { minusN } from "./minus.js";
import { mult } from "./multiply.js";
const log = console.log;
log(chalk.blue('BACKEND') + chalk.red('CALCULATOR') + chalk.red('!'));
// import { type } from "os";
// import Choices from "inquirer/lib/objects/choices.js";
const answer = await inquirer.prompt([
    {
        name: "operations",
        type: "list",
        choices: ["+", "-", "/", "*"],
        message: "Choose your operation"
    },
    {
        name: "num1",
        message: "Enter first number",
        type: "number",
    },
    {
        name: "num2",
        message: "Enter second number",
        type: "number"
    },
]);
if (answer.operations === "+") {
    const result = sum(answer.num1, answer.num2);
}
else if (answer.operations === "/") {
    const remainder = isEvenOrOdd(answer.num1, answer.num2);
}
else if (answer.operations === "-") {
    const minusSum = minusN(answer.num1, answer.num2);
}
else {
    const multiply = mult(answer.num1, answer.num2);
}
// name mai jo naam hai woh dynamic ho sakhtei hein. and from name you need to call it for printing.
// humnei tsconfig kai under bin ka command dala hai,woh yah bata ta hai kai agar koi download karna chaye ga toh konsi file download hogi?
// ts config mai name jo hai, woh apna apnei calculator yah joh bhi cheez upload karni hai uska naam kya rakhna hai.
// version in tsconfig, if you are issuing first project then the version would be 1, aur agar ap aur issue karo gai toh version increase kartei jao gei
//to upload your code on npm these are the following ways:
//1) type "npm login" in terminal which will open the login tab.
// Authentication sucessfull anei kai baad, terminal pai npm khul jaye ga
//2) type "npm publish --access=public"
// then to check whether your calc is publish, go to npm and write your calculator name. Your project name is in tsconfig with the element of name
// and to download your calc on your pc then "npx your calcultor/project name" 
// Shibang laga nai, woh apkei nodejs ki location nikal kai dei dei ga, toh jab nodejs ki file miljaye gi toh woh yah code ko nodejs mai run kardei ga
// shibang needs to be in both js and ts file.
