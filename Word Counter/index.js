#!/usr/bin/env node
import inquirer from 'inquirer';
function wordCount(paragraph) {
    let freeWhiteSpaces = paragraph.replace(/\s/g, ""); //This is regix, this helps in removing the space counter. Agar kisi nai space kara hai b/w words then it'll be ignored and it will only focus on counting the words
    return freeWhiteSpaces.length;
}
async function startWordCounting(wordCount) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "Write a paragraph:",
            name: "paragraph",
        });
        console.log(wordCount(res.paragraph));
    } while (true);
}
startWordCounting(wordCount);
