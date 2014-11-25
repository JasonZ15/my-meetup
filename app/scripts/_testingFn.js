'use strict';
var foo2 = function(age) {
  age = age + 200;
  return age;
};

var foo = function (one, two) {
  one = one + 100;
  one = foo2(one);
  two(one);
};

var foo1 = function() {

  var foo2 = function(age) {
    age = age + 10;
    return age;
  };
  foo2(5);

  foo(100, function(three) {
    three++;
    console.log(three);
  });

};

foo1();


function plus (a, b) {
  console.log(a + b);
  console.log(arguments);
  return console.log(arguments);
}

//var plus = 'hi';

var myPlus = function plusOne (a, b) {
  console.log(a + b);
};

console.log(plus(2,2));
console.log(myPlus(2,2));
