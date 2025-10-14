// Utility Types Source
//https://www.typescriptlang.org/docs/handbook/utility-types.html

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

let myUser: User = {
  _id: "12344",
  name: "Pratik",
  email: "P@P.com",
  isActive: false,
};

myUser.email = "p@mail"

// myUser._id = "3434" 
// cannot reassign because of readonly


// Mix and Match of Utility Types
type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}