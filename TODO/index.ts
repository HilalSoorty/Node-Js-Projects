#!/usr/bin/env node
import inquirer from "inquirer";

//todos array
// function 
// operation

let todos: string[] = ["17th September", "Reading a book"]

async function createTodo(arr:string[]){

do{
    let answer = await inquirer.prompt({
        type:"list",
        message:"Select Your Action",
        name:"select",
        choices:["Add", "Update", "View", "Delete"]
        })
    
        if(answer.select === "Add"){
            let addTodo = await inquirer.prompt({
            type:"input",
            message:"Add Anything You Would like to do!",
            name:"todo"
            });
            arr.push(addTodo.todo)
            console.log(arr);
            
        }
        if(answer.select === "Update"){
            let updateToDo = await inquirer.prompt({
                type:"list",
                message:"Select the item that you wish to Alter",
                name:"todo",
                choices:arr.map(item => item)
                // yah wala prompt mai user select karei ga item jo usko update karna hai. Jo hamarey pas arr mai items hein wohi hamnei usko show karwadiye
    
            });
            let addTodo = await inquirer.prompt({
                type:"input",
                message:"Add item!",
                name:"todo",
                // yah pai user sai mangana hai kai apko update kar kai kya new cheez add on karni hai
            });
            let newArray = arr.filter(val => val !== updateToDo.todo) //is line matlab yah hai kai hamei aik aesi array chaye jismei update wala item na ho
            todos = [...newArray,addTodo.todo]  //Is line ka matlab yah hai kai newArray jis mai update wala item nhi hai, woh ismei lakey rakh do aur jo usnei new item add kiya hai addToDo mai woh yah lakey rakh
            console.log(todos);
            
        }
        if(answer.select === "View"){
            console.log(todos);
            
        }
        if(answer.select === "Delete"){
            let deleteToDo = await inquirer.prompt({
                type:"list",
                message:"Select the item that you wish to Alter",
                name:"todo",
                choices:arr.map(item => item)
            });
            let newArray = arr.filter(val => val !== deleteToDo.todo)
            todos = [...newArray]
            console.log(todos);
            
        }

}while(true)


    
}

createTodo(todos)