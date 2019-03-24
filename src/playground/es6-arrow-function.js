const square = function (x) {
  return x * x;
};

//const squareArrow = (x) => {
//  return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

// Get first name

const firstName = (x) => x.split(" ")[0];
console.log(firstName('Conor Cunningham'));