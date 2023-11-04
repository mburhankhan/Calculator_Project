//Import Variables

import inquirer from "inquirer";

import { multiply } from "./mul.js";
import { subtract } from "./sub.js";
import { divide } from "./div.js";
import {sum} from "./add.js"


//Call First Function
answer()

//Function # 1
async function answer() {
    
    let query_1 = await inquirer.prompt([
        //Query # 1
        {
            message: "Enter your first number?",
            type: "number",
            name: "num1",
        },
        //Query # 2
        {
            message: "Enter your second number",
            type: "number",
            name: "num2",
        },
        //Query # 3
        {
            message: "Select Operator",
            choices: ["+", "-" , "*" , "/" ],
            type: "list",
            name: "operator"
        }
    ])
    
    //Calculations & Fucntion # 2
     function condition() {
        if (query_1.operator === "+") {
            return sum(query_1.num1,query_1.num2 );
        }
        else if (query_1.operator === "-") {
            return subtract(query_1.num1, query_1.num2);
        }
        else if (query_1.operator === "*") {
            return multiply(query_1.num1, query_1.num2);
        }
        else if (query_1.operator === "/") {
            return divide(query_1.num1, query_1.num2);
        }
    }

    //Stored Result
    let result = condition();
    console.log(`\n\nAnswer: ${result}\n`)
    
    //Call Second Function
    answer_2()
}


// Function # 3

async function answer_2()  {
    // Query # 4
    let query_2 = await inquirer.prompt(
        {
            message: "Do you want to restart your calculation?",
            type: "list",
            choices: ["Yes","No"],
            name: "Restart"
        }
    )
    //Restart Condition
    if (query_2.Restart === "Yes") {
        answer()
    }
}

