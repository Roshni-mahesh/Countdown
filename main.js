"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
console.log(chalk_1.default.bold.rgb(204, 204, 204)("\t\t<<< ========================================================= >>> "));
console.log(chalk_1.default.redBright.bold("\n\t\t          Welcome to CountDown Timer App created by Roshni Mahesh\n"));
console.log(chalk_1.default.bold.rgb(204, 204, 204)("\t\t<<< ========================================================= >>> "));
var respons = await inquirer_1.default.prompt([
    {
        type: "number",
        name: "userInput",
        message: chalk_1.default.blue.bold("Please enter the Amount of second"),
        validate: function (input) {
            if (isNaN(input)) {
                return chalk_1.default.greenBright.bold("please enter valid number");
            }
            else if (input > 60) {
                return chalk_1.default.yellowBright.bold("second must be in 60");
            }
            else {
                return true;
            }
        }
    }
]);
var input = respons.userInput;
function startTime(val) {
    var inTime = new Date().setSeconds(new Date().getSeconds() + val);
    var intervalTime = new Date(inTime);
    setInterval((function () {
        var currentTime = new Date();
        var timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log(chalk_1.default.red.bold("Timer has expired"));
            process.exit();
        }
        var minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        var seconds = Math.floor(timeDiff % 60);
        console.log("".concat(minute.toString().padStart(2, "0"), ":").concat(seconds.toString().padStart(2, "0")));
    }), 1000);
}
startTime(input);
