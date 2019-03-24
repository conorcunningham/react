class Person {

  constructor(name = 'Anonymous', age = 0){
    this.name = name;
    this.age = age;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }

  getGreeting(){
    return `Hi, ich heisse ${this.name} amd am ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasHomeLocation()) {
      description += ` Location is ${this.homeLocation}`;
    }
    return description;
  }
  
}
const me = new Student('Toggle monster', 38, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const t1 = new Traveler('Toggle monster', 38, 'Orbital Space Station');
console.log(t1.getDescription());

const t2 = new Traveler();
console.log(t2.getDescription());