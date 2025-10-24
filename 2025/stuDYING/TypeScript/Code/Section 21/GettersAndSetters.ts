class User4 {

  private _courseCount = 1;

  readonly city: string = "Deradun";
  constructor(
    public name: string,
    public email: string,
    private userId: string
  ) {
  }

  private deleteToken() {
    console.log("Token deleted");
  }

  // Getter
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }
  // Setter
  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const Pratik = new User4("Pratik", "p@m.com", "U1234");
console.log(Pratik);

//Pratik.deleteToken; // Error: Property 'deleteToken' is private and only accessible within class 'User4'.

//difference between js and ts in getters and setters
//in js we call them as methods but in ts we call them as properties
//in ts we don't use () while calling getters and setters
//also void return type is not allowed in setters