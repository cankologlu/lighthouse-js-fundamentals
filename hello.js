/* const sayHello = function () {                        ** First function call
  console.log("Hello, world")
}

sayHello();*/                    

/* const sayHello = function(name) {
  console.log("Hello, "+name);
}
sayHello("Caliban");                                    ** Second function call
sayHello("Miranda");
sayHello("Ferdinand");
sayHello("Hidalgo");*/

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}

sayHelloToConsole("John");

const returnSayHello = function (name) {
  return "Hello, "+ name;
}
const greeting = returnSayHello("John");
console.log(greeting);

