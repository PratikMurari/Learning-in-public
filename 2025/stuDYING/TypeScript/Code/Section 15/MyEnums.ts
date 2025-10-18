const enum SeatChoice { // const enum gets inlined during compilation
  AISLE, // default value set as 0 then 1, 2, 3
  MIDDLE = "middle seat", // custom string value but you have to set all the rest too
  WINDOW = 10, // custom numeric value
  FOURTH, // will be 11 since previous is 10
}

const hcSeat = SeatChoice.AISLE;
console.log(hcSeat);

const hcSeat2 = SeatChoice.MIDDLE;
console.log(hcSeat2);

const hcSeat3 = SeatChoice.FOURTH;
console.log(hcSeat3);

export {};
