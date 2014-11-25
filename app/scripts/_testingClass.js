'use strict';

function Dog () {
  var age, breed;
  console.log(this);
}

var firstDog = new Dog();
firstDog.age = 10;
firstDog.breed = 'Germen';

var secondDog = new Dog();
secondDog.age = 8;
secondDog.breed = 'Golden';

var thirdDog = {
  age: 11,
  breed: 'Pueade'
};
