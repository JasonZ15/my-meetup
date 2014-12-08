'use strict';

/**
 * @ngdoc overview
 * @name myMeetupApp
 * @description
 * # myMeetupApp
 *
 * Main module of the application.
 */
angular
  .module('myMeetupApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .constant(
    'FIREBASE_URL', 'https://popping-heat-7297.firebaseio.com/'
  )
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'RegistrationCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationCtrl'
      })
      .when('/meetings', {
        templateUrl: 'views/meetings.html',
        controller: 'MeetingsCtrl'
      })
      .when('/checkins/:uId/:mId', {
        templateUrl: 'views/checkins.html',
        controller: 'CheckinsCtrl'
      })
      .when('/checkins/:uId/:mId/checkinsList', {
        templateUrl: 'views/checkinslist.html',
        controller: 'CheckinsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
