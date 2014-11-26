'use strict';

/**
* @ngdoc function
* @name myMeetupApp services:Authentication
* @description
* # Authentication
* service of the myMeetupApp
*/
angular.module('myMeetupApp').factory('Authentication',
function(FIREBASE_URL, $firebase, $firebaseAuth){

    var ref = new Firebase(FIREBASE_URL);
    var authObj = $firebaseAuth(ref);

    return {
      register : function(user) {
        return authObj.$createUser(user.email, user.password);
      }, //register
      login : function(user) {
        return authObj.$authWithPassword({
          email: user.email,
          password: user.password
        });
      }, //login
      logout: function() {
        authObj.$unauth();
      } //logout
    };

});
