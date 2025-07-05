console.log("stdin isTTY:", process.stdin.isTTY);
console.log("stdout isTTY:", process.stdout.isTTY);

/*
What Is tty-test.js?
It’s just a simple Node.js script that checks if your terminal is in a TTY (teletype) mode, 
which is necessary for interactive input like inquirer.prompt().

TL;DR
tty-test.js is just a terminal status check using Node's built-in process.stdin.isTTY and process.stdout.isTTY.
It tells you if your app can use interactive input/output.
Running it may reset weird I/O bugs by reinitializing how Node sees the terminal.
*/
