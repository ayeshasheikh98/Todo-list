#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition === true) {
    let option = await inquirer.prompt([{
            type: "list",
            name: "useroption",
            message: "select option",
            choices: ["add", "remove"]
        }]);
    if (option.useroption === "add") {
        let ans = await inquirer.prompt([{
                type: "input",
                name: "userans",
                message: "write something to add in the task list?",
            }]);
        if (ans.userans !== "") {
            todos.push(ans.userans);
            console.log(todos);
        }
        else {
            console.log("please write something to add");
        }
    }
    else if (option.useroption === "remove") {
        let removeChoice = await inquirer.prompt([{
                type: "list",
                name: "remove_item",
                message: "select item to remove",
                choices: todos
            }]);
        let index_to_remove = todos.indexOf(removeChoice.remove_item);
        if (index_to_remove >= 0) {
            todos.splice(index_to_remove, 1);
            console.log(`you removed : `, removeChoice.remove_item);
            console.log(todos);
        }
    }
    let user_ans = await inquirer.prompt([{
            type: "confirm",
            name: "selection",
            message: "do you want to continue?",
            default: true
        }]);
    if (user_ans.selection === false) {
        condition = false;
    }
}
console.log(`Thank you for using todo list`);
