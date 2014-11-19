'use strict';

/**
 * @ngdoc function
 * @name myMeetupApp.controller:RegistrationCtrl
 * @description
 * # RegistratioinCtrl
 * Controller of the myMeetupApp
 */
angular.module('myMeetupApp').controller('RegistrationCtrl', function($scope, $location){ //scope can access the variables in the view from the controller

  $scope.login = function() {
    $location.path('/meetings');
  }; //login

  $scope.register = function() {
    $location.path('/meetings');
  }; //register

}); //RegistrationCtrl
