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

  $scope.meetingName = $firebase(refMeeting).$asObject().name;

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

  $scope.checkins = $firebase(ref).$asArray();

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

  $('.search-notification').hide();
  $('.checkin-user-list').bind('DOMSubtreeModified', function() {
    if($('.checkin-user').length > 0) {
      $('.search-notification').hide();
    } else {
      $('.search-notification').show();
    }
  });
});
