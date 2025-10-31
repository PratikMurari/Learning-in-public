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

