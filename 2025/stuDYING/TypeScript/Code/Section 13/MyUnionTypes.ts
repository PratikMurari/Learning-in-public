//instead of using any use union types
let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let Pratik: User | Admin = { name: "Pratik", id: 3345 };
Pratik = { username: "pm", id: 3345 };

//function
function getDbId(id: number | string) {
  //making some API calls
  console.log(`DB id is: ${id}`);
}

getDbId(3);
getDbId("3");

function getDbId2(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
}

//array
// const data1: number[] = [1, 2, 3, "4", "5"];         won't work
// const data2: string[] = [1, 2, 3, "4", "5"];          won't work
const data3: (number | string)[] = [1, 2, 3, "4", "5"];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";          won't allow
