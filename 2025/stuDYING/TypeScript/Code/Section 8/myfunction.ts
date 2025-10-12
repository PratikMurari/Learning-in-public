//Function 1
//This is how we defin a function type in tyscript
function addTwo(num: number): number {
  return num + 2;
  //return "hello" //This will give an error as we have defined the return type as number
}

console.log(addTwo(7));

//Function 2
function getUpper(val: string) {
  return val.toUpperCase();
}

console.log(getUpper("Hello"));

//Function 3
function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

signUpUser("Pratik", "pratik@gmail.com", false);

loginUser("P", "P@P.com"); //Normally it won't work, only if u provide a default value to it

// **** New **** //

// Function 4 (what we will do when we don't know the return type of the function)

// function getValue(myVal:number):boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return 100 ok;
// }

//Function 5, how to apply function type on Fat Arrow function

const getHello = (s: string): string => {
  return "";
};

//Function 6
const heros = ["batman", "thor", "ironman"];
//const heros = [1, 2, 3];

//Beauty about typescript is it can infer the type on its own
// heros.map((hero) => {
//   return `hero is ${hero}`;
// });

//But if we want to define the return type of the function then we can do it like this
//And this is considered a better syntax
heros.map((hero):string => {
  return `hero is ${hero}`;
});

//Function 7 

function consoleError(errmsg: string): void {
  console.log(errmsg);
  //return 1; //This will give an error as we have defined the return type as void
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
  //return 1; //This will give an error as we have defined the return type as void
}

export {};
