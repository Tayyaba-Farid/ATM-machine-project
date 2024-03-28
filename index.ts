#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "fast cash"],
    },
  ]);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);
    if (amountAns.amount > myBalance) {
      console.log("Insufficient amount");
    } else if (amountAns.amount <= 0) {
      console.log("0 amount has been withdrawn");
      console.log("your remaining balance is " + myBalance);
    } else if (amountAns.amount < myBalance) {
      myBalance -= amountAns.amount;
      console.log("your remaining balance is " + myBalance);
    }
  } else if (operationAns.operation === "fast cash") {
    let fastcashoptions = await inquirer.prompt([
      {
        name: "fastcash",
        message: "please choose options",
        type: "list",
        choices: [1000, 2000, 5000, 10000],
      },
    ]);
    myBalance -= fastcashoptions.fastcash;
    console.log("your remaining balance is " + myBalance);
  } else if (operationAns.operation === "check balance") {
    console.log(`your balance is ${myBalance}`);
  }
} else {
  console.log("Invalid pin! Please enter correct pin!");
}
