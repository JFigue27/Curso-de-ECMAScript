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
