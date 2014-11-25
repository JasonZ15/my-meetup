'use strict';

/**
* @ngdoc function
* @name myMeetupApp.controller:StatusCtrl
* @description
* # StatusCtrl: watch certain things over the whole application
* Controller of the myMeetupApp
*/

angular.module('myMeetupApp').controller('StatusCtrl',
  function($scope, $firebaseAuth, FIREBASE_URL, Authentication) {

    $scope.logout = function() {

      Authentication.logout();

    };

    var ref = new Firebase(FIREBASE_URL);
    var authObj = $firebaseAuth(ref);
    authObj.$onAuth(function(authData) {
      if (authData) {
        console.log('Logged in as:', authData.password.email);
      } else {
        console.log('Logged out');
      }
    });
  });
