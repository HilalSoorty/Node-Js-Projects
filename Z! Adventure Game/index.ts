#!/usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk'

// Classes of Player and an Opponent.
class Player {
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        // let fuel = this.fuel + 25
        // this.fuel = fuel
this.fuel = 100

    }
}

class Opponent {
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

// User Input Pn and On.
let player = await inquirer.prompt({
    
    type:"input",
    name:"name",
    message:"Please Enter Your Name"
})


let opponent = await inquirer.prompt({
    type:"list",
    name:"select",
    message:"Select Your Opponent",
    choices:["Skeleton", "Zombie", "CJ"]
})

// Gathering and Storing Data of Player and Opponenet in a variable so it can be accessible for furether use easily.
let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    if(opponent.select === "Skeleton"){
        let ask = await inquirer.prompt({
            type:"list",
        name:"select",
        message:"Choose Your Action",
        choices:["Attack", "Drink Portion", "Run For Your Life"]
        })
        if(ask.select === "Attack"){
            let num = Math.floor(Math.random()*2)
            if(num > 0){
             p1.fuelDecrease()
             console.log(chalk.bold.red(`${p1.name}, Fuel is ${p1.fuel}`));
             console.log(chalk.bold.green(`${o1.name}, Fuel is ${o1.fuel}`));
              if(p1.fuel <= 0){
                console.log(chalk.red.bold.italic("SUCH A LOOSER, HAHA!"));
                process.exit()
              }
            }
            if(o1.fuel <= 0){
               o1.fuelDecrease()
               console.log(chalk.bold.green(`${p1.name}, Fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name}, Fuel is ${o1.fuel}`));
                if(num <= 0){
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit()
                  }
            }
        }
        if(ask.select === "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You Drinked The Portion, You Fuel Is Re-Stored To ${p1.fuel}`));
            
        }
        if(ask.select === "Run For Your Life"){
            console.log(chalk.red.bold.italic("SUCH A LOOSER, HAHA!"));
            process.exit()
        }
    }

// Zombie
    if(opponent.select === "Zombie"){
        let ask = await inquirer.prompt({
            type:"list",
        name:"select",
        message:"Choose Your Action",
        choices:["Attack", "Drink Portion", "Run For Your Life"]
        })
        if(ask.select === "Attack"){
            let num = Math.floor(Math.random()*2)
            if(num > 0){
             p1.fuelDecrease()
             console.log(chalk.bold.red(`${p1.name}, Fuel is ${p1.fuel}`));
             console.log(chalk.bold.green(`${o1.name}, Fuel is ${o1.fuel}`));
              if(p1.fuel <= 0){
                console.log(chalk.red.bold.italic("SUCH A LOOSER, HAHA!"));
                process.exit()
              }
            }
            if(o1.fuel <= 0){
               o1.fuelDecrease()
               console.log(chalk.bold.green(`${p1.name}, Fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name}, Fuel is ${o1.fuel}`));
                if(num <= 0){
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit()
                  }
            }
        }
        if(ask.select === "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You Drinked The Portion, You Fuel Is Re-Stored To ${p1.fuel}`));
            
        }
        if(ask.select === "Run For Your Life"){
            console.log(chalk.red.bold.italic("SUCH A LOOSER, HAHA!"));
            process.exit()
        }
    }

// CJ
    if(opponent.select === "CJ"){
        let ask = await inquirer.prompt({
            type:"list",
        name:"select",
        message:"Choose Your Action",
        choices:["Attack", "Drink Portion", "Run For Your Life"]
        })
        if(ask.select === "Attack"){
            let num = Math.floor(Math.random()*2)
            if(num > 0){
             p1.fuelDecrease()
             console.log(chalk.bold.red(`${p1.name}, Fuel is ${p1.fuel}`));
             console.log(chalk.bold.green(`${o1.name}, Fuel is ${o1.fuel}`));
              if(p1.fuel <= 0){
                console.log(chalk.red.bold.italic("SUCH A LOOSER, HAHA!"));
                process.exit()
              }
            }
            if(o1.fuel <= 0){
               o1.fuelDecrease()
               console.log(chalk.bold.green(`${p1.name}, Fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name}, Fuel is ${o1.fuel}`));
                if(num <= 0){
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit()
                  }
            }
        }
        if(ask.select === "Drink Portion"){
            p1.fuelIncrease()
            console.log(chalk.bold.italic.green(`You Drinked The Portion, You Fuel Is Re-Stored To ${p1.fuel}`));
            
        }
        if(ask.select === "Run For Your Life"){
            console.log(chalk.red.bold.italic("SUCH A LOOSER, HAHA!"));
            process.exit()
        }
    }
} while(true)

