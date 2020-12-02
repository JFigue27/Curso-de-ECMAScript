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
