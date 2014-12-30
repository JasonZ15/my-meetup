'use strict';

/**
* @ngdoc function
* @name myMeetupApp.controller:CheckinsCtrl
* @description
* # CheckinsCtrl
* Controller of the myMeetupApp
*/
angular.module('myMeetupApp').controller('CheckinsCtrl',
function($scope, $location, $routeParams, FIREBASE_URL, $firebase) {

  $scope.whichMeeting = $routeParams.mId;
  $scope.whichUser = $routeParams.uId;
  var ref = new Firebase(FIREBASE_URL + 'users/' + $scope.whichUser + '/meetings/' + $scope.whichMeeting + '/checkins');
  var refMeeting = new Firebase(FIREBASE_URL + 'users/' + $scope.whichUser + '/meetings/' + $scope.whichMeeting);

  var meetingObj = $firebase(refMeeting).$asObject();
  meetingObj.$loaded().then(function() {
    $scope.meetingName = meetingObj.name;
  });


  $scope.addCheckin = function() {
    var checkinData = {
      firstname: $scope.user.firstname,
      lastname: $scope.user.lastname,
      fullname:  $scope.user.firstname + ' ' + $scope.user.lastname,
      email: $scope.user.email,
      date: Firebase.ServerValue.TIMESTAMP
    }
    $firebase(ref).$push(checkinData).then(function() {
      $location.path('/checkins/' + $scope.whichUser + '/' + $scope.whichMeeting + '/checkinsList')
    });
  };

  var checkinsList = $firebase(ref).$asArray();
  checkinsList.$loaded().then(function() {
    $scope.checkins = checkinsList;
  });

  $scope.deleteCheckin = function(id) {
    $firebase(ref).$remove(id);
  };

  $scope.order = 'firstname';
  $scope.selectValue = function(value) {
    $scope.order = value;
  };
  $scope.direction = '';
  $scope.directionValue = function(value) {
    $scope.direction = value;
  };

  $scope.pickRandom = function() {
    var whichRecord = Math.round(Math.random() * checkinsList.length);
    while (whichRecord === checkinsList.length) {
      whichRecord = Math.round(Math.random() * checkinsList.length);
    };
    $scope.recordId = checkinsList.$keyAt(whichRecord);
  }

  $scope.showLove = function(myCheckin) {
    myCheckin.show = !myCheckin.show;
  }
});
