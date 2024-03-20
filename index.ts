#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([{ message: "enter first number", type: "number", name: "firstnumber" }, { message: "enter second number", type: "number", name: "secondnumber" }, { message: "select one of the operators to perform opetation", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multiplication", "Division"], },]);
//condiional statement
if (answer.operator === "Addition") { console.log(answer.firstnumber + answer.secondnumber);}

else if (answer.operator === "Subtraction") { console.log(answer.firstnumber - answer.secondnumber); }
else if (answer.operator === "Multiplication") { console.log(answer.firstnumber * answer.secondnumber); }
else if (answer.operator === "Division") { console.log(answer.firstnumber / answer.secondnumber) ;}
else{console.log("please select valid operator")}


 
