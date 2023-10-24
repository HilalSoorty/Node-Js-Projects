#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
// The app will show the students multiple choice questions and promt the user to reply. 
// In the end it will show the students the result of the quiz.
console.log(chalk.hex('#344e41').bold("WELCOME STUDENTS, ANSWER THE FOLLOWING, READ THE QUESTIONS PROPERLY!!"));
let ques1 = await inquirer.prompt({
    type: "input",
    name: "ques1",
    message: chalk.hex('#344e41').bold("Please Enter Your Full Name.")
});
// console.log(ques1);
let ques2 = await inquirer.prompt({
    type: "input",
    name: "ques1",
    message: chalk.hex('#344e41').bold("Please Enter Your Father's Name.")
});
// console.log(ques2);
let ques3 = await inquirer.prompt({
    type: "number",
    name: "ques1",
    message: chalk.hex('#344e41').bold("Please Enter Your Guardian / Father's Phone No.")
});
let ques4 = await inquirer.prompt({
    type: "input",
    name: "ques1",
    message: chalk.hex('#344e41').bold("Please Enter Your Email Address")
});
let ques5 = await inquirer.prompt({
    type: "input",
    name: "ques1",
    message: chalk.hex('#344e41').bold("Please Enter Your Date Of Birth.")
});
let ques6 = await inquirer.prompt({
    type: "input",
    name: "ques1",
    message: chalk.hex('#344e41').bold("Please Enter Your Permanent Address.")
});
console.log(chalk.hex('#606c38').bold(`Response of the Data that You Filled : 
${ques1.ques1}
${ques2.ques1} 
${ques3.ques1} 
${ques4.ques1}
${ques5.ques1} 
${ques6.ques1}`));
const neon = chalkAnimation.neon("THANK YOU FOR FILLING THE FORM, WE WILL BE IN TOUCH WITH YOU SHORTLY :)");
setTimeout(() => {
    neon.start();
}, 1000);
// Stop the animation after 5 seconds
setTimeout(() => {
    neon.stop();
}, 5000);
