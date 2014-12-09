'use strict';

/**
* @ngdoc function
* @name myMeetupApp.controller:StatusCtrl
* @description
* # StatusCtrl: watch certain things over the whole application
* Controller of the myMeetupApp
*/

angular.module('myMeetupApp').controller('StatusCtrl',
  function($rootScope, $scope, $location, $firebase, $firebaseAuth, FIREBASE_URL, Authentication) {

    $scope.logout = function() {

      Authentication.logout();
      $location.path('/login');

    }; //logout

    var ref = new Firebase(FIREBASE_URL);
    var authObj = $firebaseAuth(ref);
    authObj.$onAuth(function(authData) { //onAuth does some kind of watch
      if (authData) {
        console.log('Logged in as:', authData.password.email);
        var ref = new Firebase(FIREBASE_URL + 'users/' + authData.uid);
        var user = $firebase(ref).$asObject();
        user.$loaded().then(function(){ //$loaded() is a angularfire function
          console.log(user);
          $rootScope.howManyMeetings = Object.keys(user.meetings).length;
          $rootScope.currentUser = user;
          $rootScope.noUser = null;
        });
      } else {
        console.log('Logged out');
        $rootScope.currentUser = null;
        $rootScope.noUser = true;
      }
    });//onAuth listening to login status
  });
