class Customer {
   
  // parameter properties to reduce define a properties and then creating a constructor 
  // boilder plate code

  constructor(private _firstName: string, private _lastName: string) {
  }

  public get firstName(): string {
    return this._firstName;
  }


  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }


}

// lets create an instance
let myCustomer = new Customer("Martin", "Dixion");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

