'use strict';

/**
* @ngdoc function
* @name myMeetupApp services:Authentication
* @description
* # Authentication
* service of the myMeetupApp
*/
angular.module('myMeetupApp').factory('Authentication', function(FIREBASE_URL, $firebase, $firebaseAuth){
    var ref = new Firebase(FIREBASE_URL);
    var authObj = $firebaseAuth(ref);

    var myObject = {
      login : function(user) {
        return authObj.$authWithPassword({
          email: user.email,
          password: user.password
        });
      }, //login
      logout: function() {
        authObj.$unauth();
      }
    };

    return myObject;
});
