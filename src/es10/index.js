let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array1 = [1, 2, 3, 4, 5];

console.log(array1.flatMap((values) => [values, values * 2]));

let hello = "          Hello World";

console.log(hello);
console.log(hello.trimStart());

let hello1 = "hello world         ";

console.log(hello1);
console.log(hello1.trimEnd());

try {
} catch {
  error;
}

let entries = [
  ["name", "Jaime"],
  ["age", 36],
];

console.log(Object.fromEntries(entries));

let mySymbl = "My Symbol";

let symbol = Symbol(mySymbl);

console.log(symbol.description);
