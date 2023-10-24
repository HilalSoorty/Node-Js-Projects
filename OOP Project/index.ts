#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk'

class student {
    name:string;
constructor(n:string){
this.name = n;
}
}

class Person {
    Students:student[]=[];

    addStudent(obj:student){
this.Students.push(obj);
    }
}

const persons = new Person()


const programStart =async (persons:Person)=>{
   do{
    console.log(chalk.hex('#344e41').bold("WELCOME TO THE CHIT CHAT CAFE"));

    const  ans = await inquirer.prompt({
             type:"list",
             message:chalk.hex('#344e41').bold("To Whom Do You Like To Talk With?"),
             name:"select",
            choices:["By Your Ai", "Student"]
        });
        if(ans.select === "By Your Ai"){
            console.log(chalk.hex('#606c38').bold("Feel Free You're now talking to your best friend."));
            console.log(chalk.hex('#606c38').bold("How was your day today, huh?"));
            
            
        }
        if(ans.select === "Student"){
            const ans = await inquirer.prompt({
                type:"input",
                message:chalk.hex('#344e41').bold("Please enter the name of the student, you're trying to talk with"),
                name:"student"
            });
            const studentFind = persons.Students.find(val => val.name == ans.student)
            if(!studentFind){
                const name = new student (ans.student)
                persons.addStudent(name)

                console.log(chalk.hex('#606c38').bold(`Hello I'm ${name.name}, and I'm fine by the Grace of God.`));
                console.log(chalk.hex('#606c38').bold(persons.Students));
              }  
if(studentFind){
    console.log(chalk.hex('#606c38').bold(`Hello Again ${studentFind.name}, How's your Day Today?`));
                console.log(chalk.hex('#606c38').bold(persons.Students));
}
        }
   } while(true)
    }
    programStart(persons)