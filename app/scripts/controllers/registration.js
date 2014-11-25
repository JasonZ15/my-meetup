'use strict';

/**
 * @ngdoc function
 * @name myMeetupApp.controller:RegistrationCtrl
 * @description
 * # RegistratioinCtrl
 * Controller of the myMeetupApp
 */
angular.module('myMeetupApp').controller('RegistrationCtrl',
  function($scope, $location, Authentication){ //different service dependencies. scope can access the variables in the view from the controller


    $scope.login = function() {

      Authentication.login($scope.user).then(function(user) {
        $location.path('/meetings');
        console.log('welcome ' + user.uid);
      }, function(error) {
        $scope.message = error.toString();
      });

    }; //login

    $scope.register = function() {
      $location.path('/meetings');
    }; //register

}); //RegistrationCtrl
