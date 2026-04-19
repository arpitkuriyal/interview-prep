/*****************************************************
 * JavaScript Last-Minute Revision (Top 30 Questions)
 * Focus: Output + Core Concept
 *****************************************************/

/******************** 1 ********************/
// typeof null
console.log(typeof null); // "object" (JS bug)

/******************** 2 ********************/
(function () {
  var a = (b = 3);
})();
console.log(typeof a); // "undefined"
console.log(typeof b); // "number"

/******************** 3 ********************/
console.log(0.1 + 0.2); // 0.30000000000000004

/******************** 4 ********************/
console.log(0.1 + 0.2 === 0.3); // false

/******************** 5 ********************/
console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // false

/******************** 6 ********************/
console.log(false == "0"); // true
console.log(false === "0"); // false

/******************** 7 ********************/
console.log(typeof typeof 1); // "string"

/******************** 8 ********************/
function foo1() {
  return { a: 1 };
}
function foo2() {
  return;
  { a: 1 };
}
console.log(foo1()); // {a:1}
console.log(foo2()); // undefined

/******************** 9 ********************/
var a = {},
  b = { key: "b" },
  c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]); // 456

/******************** 10 ********************/
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
} // 3 3 3

/******************** 11 ********************/
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
} // 0 1 2

/******************** 12 ********************/
var x = 21;
(function () {
  console.log(x); // undefined
  var x = 20;
})();

/******************** 13 ********************/
console.log([] == false); // true

/******************** 14 ********************/
console.log("" == 0); // true

/******************** 15 ********************/
console.log(null == undefined); // true

/******************** 16 ********************/
console.log(null === undefined); // false

/******************** 17 ********************/
console.log("5" - 3); // 2
console.log("5" + 3); // "53"

/******************** 18 ********************/
console.log(NaN === NaN); // false

/******************** 19 ********************/
console.log(typeof NaN); // "number"

/******************** 20 ********************/
console.log(!!"hello"); // true
console.log(!!0); // false

/******************** 21 ********************/
(function () {
  console.log(this); // global (non-strict)
})();

/******************** 22 ********************/
var obj = {
  a: 10,
  fn: function () {
    console.log(this.a);
  },
};
obj.fn(); // 10

/******************** 23 ********************/
var obj = {
  a: 10,
  fn: function () {
    function inner() {
      console.log(this.a);
    }
    inner();
  },
};
obj.fn(); // undefined

/******************** 24 ********************/
var obj = {
  a: 10,
  fn: function () {
    const inner = () => console.log(this.a);
    inner();
  },
};
obj.fn(); // 10

/******************** 25 ********************/
console.log(typeof undefined); // "undefined"

/******************** 26 ********************/
console.log(typeof null == typeof undefined); // false

/******************** 27 ********************/
var a = 10;
(function () {
  console.log(a); // undefined
  var a = 20;
})();

/******************** 28 ********************/
function sum(a, b) {
  return a + b;
}
console.log(sum(2, 3)); // 5

/******************** 29 ********************/
function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(2)(3)); // 5

/******************** 30 ********************/
(function () {
  try {
    throw new Error();
  } catch (x) {
    var x = 1,
      y = 2;
    console.log(x); // 1
  }
  console.log(x); // undefined
  console.log(y); // 2
})();

/******************** END ********************/

/*
🔥 FINAL REVISION CHEAT SHEET

- typeof null → "object"
- NaN !== NaN
- == does coercion, === doesn’t
- var → function scope, let → block scope
- return + newline → undefined (ASI)
- Objects as keys → string "[object Object]"
- this depends on call-site
- Arrow fn → inherits this
- Floating point precision issue
- Hoisting → variables declared but undefined

*/