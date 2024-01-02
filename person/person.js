class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
  
    setFirstName(firstName) {
      this.firstName = firstName;
    }
  
    setLastName(lastName) {
      this.lastName = lastName;
    }
  
    setAge(age) {
      this.age = age;
    }
  
    setEmail(email) {
      this.email = email;
    }
  
    getDetails() {
      return `Name: ${this.getFullName()}, Age: ${this.getAge()}, Email: ${this.getEmail()}`;
    }
  }
  
  const personClass = new Person("Rubika", "Kumar", 25, "rubi23434@gmail.com");
  console.log(personClass.getDetails()); 