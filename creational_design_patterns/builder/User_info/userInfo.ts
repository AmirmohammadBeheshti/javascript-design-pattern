class User {
    private firstName: string;
    private lastName: string;
    private email: string;
    private age: number;
    private address: string;
  
    constructor(builder: UserBuilder) {
      this.firstName = builder.firstName;
      this.lastName = builder.lastName;
      this.email = builder.email;
      this.age = builder.age;
      this.address = builder.address;
    }
  
    public getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
    public toString(): string {
      return `User [Name: ${this.getFullName()}, Email: ${this.email}, Age: ${
        this.age
      }, Address: ${this.address}]`;
    }
  
  }
  
  class UserBuilder {
    public firstName: string = "";
    public lastName: string = "";
    public email: string = "";
    public age: number = 0;
    public address: string = "";
  
    public setFirstName(firstName: string): UserBuilder {
      this.firstName = firstName;
      return this;
    }
  
    public setLastName(lastName: string): UserBuilder {
      this.lastName = lastName;
      return this;
    }
  
    public setEmail(email: string): UserBuilder {
      this.email = email;
      return this;
    }
  
    public setAge(age: number): UserBuilder {
      this.age = age;
      return this;
    }
  
    public setAddress(address: string): UserBuilder {
      this.address = address;
      return this;
    }
  
    public build(): User {
      return new User(this);
    }
  }
  
  const user = new UserBuilder().setFirstName("John");
  
  user
    .setLastName("Doe")
    .setEmail("john.doe@example.com")
    .setAge(30)
    .setAddress("123 Elm Street");
  
  console.log(user.build());
  
  //  Director : This class will guide the UserBuilder in creating a User object with a specific set of steps.
  
  class UserDirector {
      private builder: UserBuilder;
  
      constructor(builder: UserBuilder) {
          this.builder = builder;
      }
  
      public constructStandardUser(): User {
          return this.builder
              .setFirstName('John')
              .setLastName('Doe')
              .setEmail('john.doe@example.com')
              .setAge(30)
              .setAddress('123 Elm Street')
              .build();
      }
  
      public constructAdminUser(): User {
          return this.builder
              .setFirstName('Admin')
              .setLastName('User')
              .setEmail('admin.user@example.com')
              .setAge(40)
              .setAddress('456 Admin Lane')
              .build();
      }
  }
  
  const userBuilder = new UserBuilder()
  const adminUser = new UserDirector(userBuilder)
  
  console.log(adminUser.constructAdminUser());
  