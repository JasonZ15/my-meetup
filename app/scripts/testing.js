'use strict';

  var MyFirebase = function(scope) {
    this.firstValue = 'hi';
    var secondValue = 'hey';
    this.thirdValue = scope;
    return secondValue;
  };
  MyFirebase.prototype.doSomething = 'Action!';

  var myObject = new MyFirebase('hello');
  var myArray = [23, 214, 432];

  MyFirebase.myService = [23, 123, 213];

  console.log(typeof myArray);
  console.log(myObject);
  console.log(myObject.myService); // undifined

  //console.log(MyFirebase()); you can't do this. can't run when it hits 'this' at line 4

  console.log(typeof MyFirebase);
  console.log(MyFirebase);
  console.log(MyFirebase[0]); // undifined

  console.log(typeof MyFirebase.myService);
  console.log(MyFirebase.myService);

  console.log(typeof MyFirebase.prototype);
  console.log(MyFirebase.prototype);

  var myObjectTwo = {
    name: 'jason',
    age: 29
  };
  myObjectTwo.student = true;
  console.log(myObjectTwo);
