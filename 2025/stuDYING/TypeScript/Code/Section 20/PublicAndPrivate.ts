class User2Renamed {
  // By default, all properties and methods are public
  public name: string;
  email: string;
  private readonly city: string = "Deradun";
  //readonly property is accessible but cannot be modified,
  //To stop it from access use private modifier
  //private can only be accessed within the class
  //you can also mark private using #city: string = "Deradun";
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
    this.city = "Mumbai"; // Allowed: can be set within the class
  }
}

const pratikUser = new User2Renamed("Pratik", "p@m.com");

// Pratik.city = "Mumbai";

console.log(pratikUser);

// something I noticed was after marking city as private, it lost it's readonly property
