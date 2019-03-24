// arguments object = no longer bound with arrow functions
const add = (a,b) => {
  // the below is not supported in arrow functions
  // if you need access to arguments, use es5 function
  // console.log(arguments);
  return a + b;
};

console.log(add(5,10))

// this keyworkd - no longer bound.
// note const that = this. This is bound
/*
const user = {
  name: 'Conor',
  cities: ['Oslo', 'Brisbane','Dublin'],
  printPlacesLived: function () {
    const that = this;

    this.cities.forEach(function (city) {
      console.log(that.name + ' has lived in ' + city)
    });
  }
};
*/

// New ES6 Syntax
// Note PrintPlacesLived - no function definition required
// => arrow function can use 'this'

/*
const user = {
  name: 'Conor',
  cities: ['Oslo', 'Brisbane','Dublin'],
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city)
    });
  }
};
*/

const user = {
  name: 'Conor',
  cities: ['Oslo', 'Brisbane','Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  // numbers - array of numbers
  // multiplyBy - single number
  // multiply - return a new array
  numbers: [10,3,28],
  multiplyBy: 5,
  multiply(){
    return this.numbers.map((num) => num * this.multiplyBy)
  }
};

console.log(multiplier.multiply());