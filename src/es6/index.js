// Parametros por defectos

function newFunction(name, age, country) {
  var name = name || "Jaime";
  var age = age || 36;
  var country = country || "MX";
  console.log(name, age, country);
}

// newFunction();

// es6

function newFunction2(name = "Jaime", age = 36, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Miriamno", 36, "CO");

// Let y Const
// Destructuracion

let person = {
  name: "Jaime",
  age: 36,
  country: "MX",
};

// Antes:
console.log(person.name, person.age);

// Con es6+

let { name, age, country } = person;

console.log(name, age, country);

//Arrglos

let team1 = ["Jaime", "Jose", "Abraham"];
let team2 = ["Emma", "Sara", "Miriam"];
let education = ["Padres", ...team1, ...team2];
console.log(education);

let nombre = "Jaime";
let edad = 36;
//es5
obj = { nombre: nombre, edad: edad };
console.log(obj);
//es6
obj2 = { nombre, edad };
console.log(obj2);

// Arrowfunction

const names = [
  { name: "Jaime", age: 36 },
  { name: "Miriam", age: 37 },
];

// es5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});

// es6
let listOfNames2 = names.map((item) => {
  console.log(item.name);
});

const names2 = names.map((item) => console.log(item.name));

const square = (num) => num * num;

// Promises

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve("Hey!!!");
    } else {
      reject("Ups!!!");
    }
  });
};

helloPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((reject) => console.log(reject));
