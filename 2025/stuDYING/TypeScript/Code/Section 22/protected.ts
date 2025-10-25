class User {
  protected _courseCount = 1;

  readonly city: string = "Deradun";
  constructor(
    public name: string,
    public email: string,
    private userId: string
  ) {}

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

class SubUser4 extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const Pratik = new User("Pratik", "p@m.com", "U1234");
console.log(Pratik);

//protected can be accessed in the child class BUT not outside the class
