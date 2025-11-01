//Narrowing
function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toUpperCase();
  }
  return val + 3;
}

//Test cases
console.log(detectType("Hello world!"));
console.log(detectType(5));

//common case
function provideId(id: string | null) {
  if (!id) {
    return console.log("Please provide ID");
  }
  return console.log("Your ID is " + id);
}

//Test cases
provideId(null);
provideId("12345");

//Documentation
// Addition Stuff
//Type Guards and Differentiating Types

function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

//Section 29 The in Operator Narrowing
//Documentation :
//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}
