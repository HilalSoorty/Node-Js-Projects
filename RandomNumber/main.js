#!/usr/bin/env node
// import { log } from "console";
// import { type } from "os";
import { rnn } from "./random.js";
import { fireworks } from "./ASCII.js";
import { sadFace } from "./ASCII.js";
import inquirer from "inquirer";
import chalk from "chalk";
const guessingColor = chalk.hex('#FF00FF').bold;
const numberColor = chalk.hex('#00FFFF').bold;
const gameColor = chalk.hex('#FFA500').bold;
console.log(guessingColor('=?= GUESSING ') + numberColor('NUMBER ') + gameColor('GAME =?='));
function hintnumber() {
    if (rnn % 2 == 0) {
        console.log("Hint: Number is even.");
    }
    else {
        console.log("Hint: Number is odd");
    }
}
hintnumber();
const answer = await inquirer.prompt([
    {
        name: "rn1",
        message: "Guess The Number, If you loose, you're a nerd!",
        type: "number",
    },
    // {
    //    name:"Choose:",
    //    type:"list",
    //    choices:["Yes", "No"],
    //    message:"Want to play again?",
    //    },
]);
if (answer.rn1 === rnn) {
    console.log(chalk.bold.blueBright('Right guess! You matched the random number.'));
    console.log(fireworks);
}
else if (answer.rn1 != rnn) {
    console.log(chalk.bold.redBright('Try again! Your guess did not match the random number.'));
    console.log(chalk.bold.gray(`Your answer was, ${answer.rn1}, But the Generated number was ${rnn}`));
    console.log(sadFace);
}
// const then = await inquirer.prompt([
//   {
//        name:"Choose:",
//        type:"list",
//        choices:["Yes", "No"],
//        message:"Want to play again?",
//        },
//  ])
//  if(then.choices === "Yes"){
//  let run = rnn
//  } else{
//  console.log("null");
//  }
