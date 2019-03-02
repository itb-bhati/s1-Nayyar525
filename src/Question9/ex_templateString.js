function upper(strings, ...values) {}

var name = "kyle",
  twitter = "getify",
  classname = "es6 workshop";

console.log(
  `Hello ${name.toUpperCase()} (@${twitter.toUpperCase()}), welcome to the ${classname.toUpperCase()}!` ===
    "Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);
