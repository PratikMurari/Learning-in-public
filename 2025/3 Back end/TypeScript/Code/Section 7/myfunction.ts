//Function 1
function addTwo(num:number){
    return num+2;
}

console.log(addTwo(7));

//Function 2
function getUpper(val:string){
    return val.toUpperCase();
}

console.log(getUpper("Hello"));

//Function 3
function signUpUser (name:string, email:string, isPaid:boolean){}

let loginUser =  (name:string, email:string, isPaid:boolean=false) => {}

signUpUser("Pratik","pratik@gmail.com",false)

loginUser ("P","P@P.com") //Normally it won't work, only if u provide a default value to it

export{};