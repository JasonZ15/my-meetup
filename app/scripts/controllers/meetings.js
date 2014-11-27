'use strict';

/**
 * @ngdoc function
 * @name myMeetupApp.controller:MeetingsCtrl
 * @description
 * # MeetingsCtrl
 * Controller of the myMeetupApp
 */
angular.module('myMeetupApp').controller('MeetingsCtrl',
  function($scope, FIREBASE_URL, $firebase) {

    //connect to a firebase database
    var ref = new Firebase(FIREBASE_URL + 'meetings');

    // create an AngularFire reference to the data. we have an object to use.
    var meetings = $firebase(ref);
    $scope.meetings = meetings.$asObject();

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
}); //MeetingsCtrl
