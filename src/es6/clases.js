// es6
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}
const calc = new calculator();
console.log(calc.sum(5, 6));

// import { hello } from "./module";

// hello();

//Generator

function* helloWold() {
  if (true) {
    yield "Hello ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWold();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
