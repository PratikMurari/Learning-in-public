//instead of using any use union types
var score = 33;
score = 44;
score = "55";
var Pratik = { name: "Pratik", id: 3345 };
Pratik = { username: "pm", id: 3345 };
//function
function getDbId(id) {
    //making some API calls
    console.log("DB id is: ".concat(id));
}
getDbId(3);
getDbId("3");
function getDbId2(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
//array
// const data1: number[] = [1, 2, 3, "4", "5"];         won't work
// const data2: string[] = [1, 2, 3, "4", "5"];          won't work
var data3 = [1, 2, 3, "4", "5"];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew";          won't allow
