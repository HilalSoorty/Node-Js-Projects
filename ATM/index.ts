#!/usr/bin/env node
import inquirer from "inquirer";
import { faker } from '@faker-js/faker';
import Choices from "inquirer/lib/objects/choices.js";
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';

// 1.fetch the data of user
// 2.atm machine
//3. atm function, withdraw, deposit, etc.

  

// 1.fetch the data of user

interface User{
id:number,
pin:number,
name:string,
accountNumber:number,
balance: number,
}

const createUser = () => {
    let users:User[] = []

for(let i=1; i <6; i++){
    let user:User = {
        id:i,
        pin:199 + i,
        name:faker.person.fullName(),
        accountNumber:Math.floor(10000000 * Math.random()*90000000),
        balance:100000 * i,
    }

    users.push(user)
}



    return users;
};


// atm machine
const atmMachine = async (users:User[]) => {
    const res = await inquirer.prompt({
        type:"number",
        message:"Enter Your Pin Code",
        name:"pin",
    })

    const user = users.find(val => val.pin == res.pin)

    if(user){
        console.log(`Welcome ${user.name}`);
        atmFunction(user)
        return;
    } else{
        console.log("Invalid Pin, please try again!");
        
    }
};

const atmFunction = async (user:User) => {
    const answer = await inquirer.prompt({
        type:"list",
        message:"Select your desired action:",
        choices:["Withdraw", "Deposit", "Check Balance", "Exit"],
        name:"select",
    })
    for(let i = 0; i <3; i++){
    if(answer.select === "Withdraw"){
        const amount = await inquirer.prompt ({
            type:"number",
            message:"Enter your desired amount you want to Withdraw:",
            name:"rupee",
        })

        if(amount.rupee > user.balance){
            return console.log("Insufficient Balance!");
            
        }
        if(amount.rupee > 25000){
            return console.log("Maximum limit is 25,000.");
            
        }
        console.log(`Widthdraw amount: ${amount.rupee}`);
        console.log(`Remaining Balance: ${user.balance-amount.rupee}`);
        
    }}
    if(answer.select === "Deposit"){
        const deposits = await inquirer.prompt ({
            type:"number",
            message:"Enter your desired amount you want to Deposit:",
            name:"rupee",
        })
        console.log(`Deposit amount: ${deposits.rupee}`);
        console.log(`Updated Balance: ${user.balance+deposits.rupee}`);

    }
    if(answer.select === "Check Balance"){
        console.log(`Remaining Balance: ${user.balance}`);
    }
    if(answer.select === "Exit"){
        console.log("Thanks for using our ATM :)");
        
    }

}

   

const users = createUser()
atmMachine(users)
