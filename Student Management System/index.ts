#!/usr/bin/env node
import inquirer from "inquirer";
import { faker } from '@faker-js/faker';
import chalkAnimation, { pulse } from 'chalk-animation';
import chalk from 'chalk';



const exampleEmail = faker.internet.email();
console.log(`For Example: ${exampleEmail}`)




// FUNCTION: creating unique ID
function generateStudentID(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let studentID = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      studentID += characters.charAt(randomIndex);
    }
  
    return studentID;
  }
  

  const studentID = generateStudentID(8); 
//   console.log(studentID);


//   Fetching users Data.
  interface status {
    id:number,
    accountNumber:number|string ,
    name:string,
    email:string,
    PortfolioProfile:string,
    gender:string,
    Courses:string
    pin:number
  }

  const createStatus = () => {
    let users: status[] = [];

    for (let i = 1; i < 6; i++) {
        let user: status = {
            id: i,
            pin:i+199,
            accountNumber: studentID, 
            name: faker.person.fullName(),
           email:exampleEmail,
           PortfolioProfile: faker.image.avatar(),
           gender:faker.person.sexType(),
           Courses:faker.helpers.arrayElement(['Generative Ai. Metaverse. Web 3.0', 'Cloud Native and Mobile Web', 'Blockchain.']),
        };
        users.push(user);
        
    }

    return users;
}


 
// LMS SYSTEM

const LMS = async (user:status[]) => {
    

    
    const res = await inquirer.prompt({
        // default: exampleEmail,
        type:"input",
        message:chalk.hex('#344e41').bold("Please Enter Your Email Adress"),
        name:"email",
        
    })
    
    const foundUser = user.find(val => val.email == res.email) 
    if (foundUser) {
        console.log(`User found: ${foundUser.name}`);
        let select = await inquirer.prompt({
            type:"list",
            message:chalk.hex('#344e41').bold("Please Select Your Desired Action"),
            name:"opt",
            choices:["Users Information", "Enroll Now: Batches Are Opening *NEW*", "Pay Semester Fees"]

        })
        if(select.opt === "Users Information" ){
            console.log(chalk.bold.italic.gray("User Information:"));
            console.log(chalk.hex('#3a5a40').bold(`Account Number: ${foundUser.accountNumber}`));
            console.log(chalk.hex('#3a5a40').bold(`Name: ${foundUser.name}`));
            console.log(chalk.hex('#3a5a40').bold(`Email: ${foundUser.email}`));
            console.log(chalk.hex('#3a5a40').bold(`Gender: ${foundUser.gender}`));
            console.log(chalk.hex('#3a5a40').bold(`Course: ${foundUser.Courses}`));
            console.log(chalk.hex('#3a5a40').bold(`Portfolio Profile URL: ${foundUser.PortfolioProfile}`));

        }
        if(select.opt === "Pay Semester Fees"){
            let paysemester = await inquirer.prompt({
                type:"checkbox",
                name:"pay",
                message:chalk.hex('#344e41').bold("Pending Fees: Semester 2."),
                choices:[`Pay Rs.4,500 For ${foundUser.Courses} Semester 2. `]
            })
            if(paysemester.pay){
                // console.log(chalk.redBright.bold("It'll Take Few Minutes For The Transaction To Be Sucessfull."));
                chalkAnimation.pulse('It will Take Few Minutes For The Transaction To Be Sucessfull.');
                
                
                setTimeout(() => {
                    console.log(chalk.greenBright.bold("Your Payment Of Rs.4,500 is Recieved."));
                   
                  
                }, 5000);
                
            };
        };
        if(select.opt === "Enroll Now: Batches Are Opening *NEW*"){
            let newCourses = await inquirer.prompt({
                type:"list",
                name:"courses",
                message:chalk.hex('#344e41').bold("What Course Do You Like To Enroll In?"),
                choices:["Generative Ai. Metaverse. Web 3.0", "Cloud Native and Mobile Web", "Blockchain"]
            })
            if (newCourses.courses === "Generative Ai. Metaverse. Web 3.0" ||
            newCourses.courses === "Cloud Native and Mobile Web" ||
            newCourses.courses === "Blockchain") {
            let giveEmail = await inquirer.prompt({
                type: "input",
                name: "givename",
                message: chalk.underline.magentaBright.bold("Please Provide Email/Full Name for Registration In New Course *Note Fee Of Per Course Is Rs.4,500*")
                
               
            });
            if(giveEmail.givename){
             let bank = await inquirer.prompt({
                type:"list",
                name:"banks",
                message:chalk.hex('#344e41').bold("Select Your Desired Bank"),
                choices:["Meezan Bank", "UBL", "HBL", "Standard Charted"]
             })
             if(bank.banks === "Meezan Bank"|| "UBL"|| "HBL"|| "Standard Charted"){
                // console.log(`Please Wait, Your Transaction Is Taking Place, 
                // And Your Account With the ${giveEmail.givename} Is Being Registing`);
                chalkAnimation.pulse(`Please Wait, Your Transaction Is Taking Place, And Your Account With the ${giveEmail.givename} Is Being Registing`)
                setTimeout(() => {
                    console.log(chalk.green.bold(`Congratulations ${giveEmail.givename} Your Account is Registered, And 
                    Rs.4,500 Is Deducted From ${bank.banks}`));
                    
                }, 5000);
             };
            };
          };
    };

    } else {
    //    chalkAnimation.glitch("ERROR : USER NOT FOUND!!")
    const glitch = chalkAnimation.glitch('ERROR : USER NOT FOUND!!'); // Animation starts

    // Start the animation after 1 second
    setTimeout(() => {
        glitch.start();
    }, 1000);
    
    // Stop the animation after 5 seconds
    setTimeout(() => {
        glitch.stop();
    }, 5000);
};
};



const statusData = createStatus();
LMS(statusData)