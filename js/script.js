// var message = "in global";
// console.log("global: message " + message);

// var a = function () {
//   var message = "inside a";
//   console.log("a: message = " + message);
//   b();
// };
// function b() {
//   console.log("b: message = " + message);
// }

// a();

// var x;
// console.log(x);
// x = 5;
// if (x == undefined) {
//   console.log("x is undefined");
// } else {
//   console.log("x has been defined");
//
// function a(x) {
//   x = x || "whatever";
//   console.log("chicken + " + x);
// }
// a();

// var x = 10;
// if (null || console.log("Hello") || x > 5) {
//   console.log("Hello");
// }

// var company = new Object();
// company.name = "facebook";
// company.ceo = new Object();
// company.ceo.favColor = "blue";
// company.ceo.firstName = "Mark";

// console.log("the name of this company CEO: " + company.ceo.firstName);
// company["stock of company"] = 110;
// console.log(company);

// function a(x) {
//   x = x || "whatever";
//   console.log("chicken +  " + x);
// }
// a();

// var company = new Object();
// company.name = "facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.lastName = "ZuckerBerg";
// company["stock of company"] = 110;
// console.log(company);
//--------------------------------------
// better way to declare (create) an object
// var facebook = {
//   name: "facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue",
//   },
//   "stock of company": 110,
// };
// console.log(facebook);
//----------------------------------------
// function multiply(x, y) {
//   return x * y;
// }
// console.log(multiply(15, 10));
// function makeMultiplier(multiplier) {
//   var myFunc = function (x) {
//     return multiplier * x;
//   };
//   return myFunc;
// }
// var multiplierBy3 = makeMultiplier(3);
// function doOperation(x, operation) {
//   return operation(x);
// }
// console.log(doOperation(5, multiplierBy3));
//-----------------------------

// function abc(x) {
//   console.log("before : " + x);
//   x = 7;
//   console.log("after : " + x);
// }
// x = 5;
// abc(x);
// console.log(x);

//------------------------------------
// by reference
// function abc(obj) {
//   console.log("before : ");
//   console.log(obj);
//   obj.x = 7;
//   console.log("after : ");
//   console.log(obj);
// }
// var obj = { x: 5 };
// abc(obj);
// console.log("original");
// console.log(obj);
// function Person(name, age, height) {
//   this.name = name;
//   this.age = age;
//   this.height = height;
// }
// var father = new Person("taieb", 63, 165);
// console.log(father);
// var char = "hello";
// for (var i = 0; i < char.length; i++) {
//   console.log(char[i]);
// }
//----------------------------------------------
// var array = new Array();
// array[0] = "seif";
// array[1] = "20";
// array[2] = function hello(name) {
//   console.log("hello " + name);
// };
// array[3] = { course: "html,css,js" };
// array[2]("yaakov");
//6-----------------------------------------------
// var array = [
//   "seif",
//   22,
//   function hello(name) {
//     console.log("hello " + name);
//   },
// ];
// for (a in array) {
//   console.log(array[a]);
// }
// console.log(array);
//---------------------------------------------------

// var facebook = {
//   name: "facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue",
//   },
//   "stock of company": 110,
// };
// for (var prop in facebook) {
//   console.log(prop + " " + facebook[prop]);
// }
//same thing for arrays

//-------------------------------------
// function makeMultiplier(m) {
//   return function (x) {
//     return x * m;
//   };
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(5));
//----------------------------------
// var fruit = "banana";
// String.prototype.changeAt = function (pos, c) {
//   let char = "";
//   for (let i = 0; i < this.length; i++) {
//     if (pos == i) {
//       char += c;
//     } else {
//       char += this[i];
//     }
//   }
//   return char;
// };
// fruit = fruit.changeAt(1, "x");
// console.log(fruit);
// let list = [6, 5, 4, 3, 2, 1, 0];
// for (let i = 0; i < list.length; i++) {
//   for (let j = i + 1; j < list.length; j++) {
//     if (list[j] < list[i]) {
//       let x = list[i];
//       list[i] = list[j];
//       list[j] = x;
//     }
//   }
// }
// console.log(list);
