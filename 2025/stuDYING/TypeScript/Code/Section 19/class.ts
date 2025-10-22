class User {
  name: string;
  email: string;
  readonly city: string = "Deradun";
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const Pratik = new User("Pratik", "p@m.com");

// Pratik.city = "Mumbai";

console.log(Pratik);
