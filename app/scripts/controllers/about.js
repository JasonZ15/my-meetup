'use strict';

/**
 * @ngdoc function
 * @name myMeetupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myMeetupApp
 */
angular.module('myMeetupApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
