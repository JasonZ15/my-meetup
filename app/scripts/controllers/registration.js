'use strict';

/**
 * @ngdoc function
 * @name myMeetupApp.controller:RegistrationCtrl
 * @description
 * # RegistratioinCtrl
 * Controller of the myMeetupApp
 */
angular.module('myMeetupApp').controller('RegistrationCtrl',
  function($scope, FIREBASE_URL, $location){ //different service dependencies. scope can access the variables in the view from the controller

    var ref = new Firebase(FIREBASE_URL);

    $scope.login = function() {
      ref.authWithPassword({
        email: $scope.user.email,
        password: $scope.user.password
      }, function(error, authData) {
        if(error === null) {
          $location.path('/meetings');
          $scope.$apply();
        } else {
          $scope.message = error.toString();
          $scope.$apply();
        }
      });
    }; //login

    $scope.register = function() {
      $location.path('/meetings');
    }; //register

}); //RegistrationCtrl
