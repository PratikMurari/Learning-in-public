// var generateName = require('sillyname');

//or we can use import instead of require
import generateName from 'sillyname';
var sillyName = generateName();

console.log ('Hello, my name is '+sillyName+'.');

//to install any package, use the command: // npm install <package-name> or npm i <package-name>
//for multiple package, just use space to separate them eg: npm i <package-name> <package-name> <package-name>

//from version 12 of node we have moved to ES6 modules, so we can use import instead of require
//it kinda standardise the frontend and backend code, so we can use the same syntax in both places
//to use import, we need to add "type": "module" in package.json file

import superheroes from "superheroes";
const name = superheroes.random();

console.log(`My superhero name is ${name}.`);