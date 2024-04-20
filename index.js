#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "Sentence",
    type: "input",
    message: "Please enter sentence or Paragraph we count word:"
});
const word = answer.Sentence.trim().split(" ");
console.log(`You sentence word count is ${word.length}`);
