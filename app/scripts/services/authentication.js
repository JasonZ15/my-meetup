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
        return authObj.$createUser(user.email, user.password)
        .then(function() {
          console.log('User Created!');
          return authObj.$authWithPassword({
            email: user.email,
            password: user.password
          }).then(function(regUser) {
            var ref = new Firebase(FIREBASE_URL + 'users');
            var firebaseUsers = $firebase(ref);

            var userInfo = {
              date: Firebase.ServerValue.TIMESTAMP,// Firebase is js. $firebase is angular
              regUser: regUser.uid,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email
            };

            firebaseUsers.$set(regUser.uid, userInfo);
          });
        });
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
