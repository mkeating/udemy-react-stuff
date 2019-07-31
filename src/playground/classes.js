//create Traveler class, with homeLocation
//override getGreeting, if homelocation add "im visiting from"

class Person {
  constructor(name = 'anon', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I'm ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation(){
    return !!this.homeLocation;
  }

  getGreeting(){
    let greeting = super.getGreeting();

    if(this.hasHomeLocation()){
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }

    return greeting;
  }
}

const me = new Traveler('mike', 0, 'boston');

console.log(me.getGreeting());
