#!/usr/bin/env node
import inquirer from 'inquirer';
import { faker } from '@faker-js/faker';
import chalk from 'chalk';
class customer {
    constructor(fName, LName, age, gender, mobileNumber, accountNumber) {
        this.firstName = fName;
        this.lastName = LName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.accountNumber = accountNumber;
    }
}
class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addCustomer(obj) {
        this.customer.push(obj);
    }
    ;
    addAccountNo(obj) {
        this.account.push(obj);
    }
    ;
    transaction(accObj) {
        let newAccounts = this.account.filter((acc) => acc.accountNumber !== accObj.accountNumber);
        this.account = [...newAccounts, accObj];
    }
}
;
let myBank = new Bank();
// Creating Customer
for (let i = 1; i <= 3; i++) {
    let fName = faker.person.firstName('male');
    let lName = faker.person.lastName();
    // let mobileNumber = parseInt(faker.phone.number("3##########"))
    let mobileNumber = parseInt(faker.phone.number());
    const cus = new customer(fName, lName, 25 * i, 'male', mobileNumber, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccountNo({ accountNumber: cus.accountNumber, balance: 10000.999 * i });
}
// Bank Functionality
async function bankService(bank) {
    do {
        let service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Please Select The Provided Service:",
            choices: ["View Balance", "Cash Withdraw", "Cash Deposit", "Exit"]
        });
        if (service.select === "View Balance") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number:"
            });
            let findAccount = myBank.account.find((acc) => acc.accountNumber == res.num);
            if (!findAccount) {
                console.log(chalk.red.italic("Invalid Account Number, Please Try Again!"));
            }
            if (findAccount) {
                let name = myBank.customer.find((item) => item.accountNumber == findAccount?.accountNumber);
                console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)}
Your Account Balance Is ${chalk.bold.blue("$", findAccount.balance)}`);
                // console.log(`Dear ${chalk.green.italic(name?.lastName)} 
                // Your Account Balance Is ${chalk.bold.blue("$",findAccount.balance)}`);
            }
        }
        if (service.select === "Cash Withdraw") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number:"
            });
            let findAccount = myBank.account.find((acc) => acc.accountNumber == res.num);
            if (!findAccount) {
                console.log(chalk.red.italic("Invalid Account Number, Please Try Again!"));
            }
            if (findAccount) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter Your Cash Amount:",
                    name: "rupee"
                });
                if (ans.rupee > findAccount.balance) {
                    console.log(chalk.red.bold("Insufficient Balance."));
                }
                let newBalance = findAccount.balance - ans.rupee;
                //    transaction method call
                bank.transaction({ accountNumber: findAccount.accountNumber, balance: newBalance });
            }
            ;
        }
        ;
        if (service.select === "Cash Deposit") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number:"
            });
            let findAccount = myBank.account.find((acc) => acc.accountNumber == res.num);
            if (!findAccount) {
                console.log(chalk.red.italic("Invalid Account Number, Please Try Again!"));
            }
            if (findAccount) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter Your Cash Amount:",
                    name: "rupee"
                });
                let newBalance = findAccount.balance + ans.rupee;
                //    transaction method call
                bank.transaction({ accountNumber: findAccount.accountNumber, balance: newBalance });
            }
        }
        if (service.select === "Exit") {
            return;
        }
        ;
    } while (true);
}
bankService(myBank);
