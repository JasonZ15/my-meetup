'use strict';

angular.module('myMeetupApp').directive('searchNotification', function() {
  return {
    link: function(scope, element, attr) {
      $('.search-notification').hide();
      element.bind('DOMSubtreeModified', function() {
        if($('.checkin-user').length > 0) {
          $('.search-notification').hide();
        } else {
          $('.search-notification').show();
        }
      });
    }
  }
});
