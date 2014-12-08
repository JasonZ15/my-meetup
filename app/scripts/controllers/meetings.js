'use strict';

/**
 * @ngdoc function
 * @name myMeetupApp.controller:MeetingsCtrl
 * @description
 * # MeetingsCtrl
 * Controller of the myMeetupApp
 */
angular.module('myMeetupApp').controller('MeetingsCtrl',
  function($scope, $rootScope, FIREBASE_URL, $firebase, $firebaseAuth) {

    //retrieve the logged in user's info first
    var ref = new Firebase(FIREBASE_URL);
    var authObj = $firebaseAuth(ref);
    authObj.$onAuth(function(authData) {
      if (authData) {

        //connect to a firebase database
        var ref = new Firebase(FIREBASE_URL + 'users/' + authData.uid + '/meetings');

        // create an AngularFire reference to the data. we have an object to use.
        var meetings = $firebase(ref);
        var meetingsObj = meetings.$asObject();
        var meetingsAry = meetings.$asArray();

        meetingsObj.$loaded().then(function() {
          $scope.meetings = meetingsObj;
        });
        meetingsAry.$loaded().then(function() {
          $rootScope.howManyMeetings = meetingsAry.length;
        });
        meetingsAry.$watch(function(event) {
          $rootScope.howManyMeetings = meetingsAry.length;
        });

        $scope.addMeeting = function() {
          meetings.$push({ // push will allow firebase to generate a random key where set will allow you to create the key
            name: $scope.meetingname,
            date: Firebase.ServerValue.TIMESTAMP
          }).then(function(){
            $scope.meetingname = '';
          });
        };
        $scope.deleteMeeting = function(key) {
          meetings.$remove(key);
        };

      } else {
        console.log('hey something went wrong.');
      }
    });


}); //MeetingsCtrl
