const obj = {
  name: "Jaime",
  age: 36,
  country: "MX",
};

let { name, ...all } = obj;
console.log(name, all);

const obj1 = {
  lastName: "Figueroa",
  ...obj,
};

console.log(obj1);

const helloWorld1 = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World 1"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld1()
  .then((res) => console.log(res))
  .catch((erro) => console.log(err))
  .finally(() => console.log("Finalizo"));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
