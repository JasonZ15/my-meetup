'use strict';

angular.module('myMeetupApp').directive('confirmAction', function() {
  return {
    priority: 1,
    terminal: true,
    link: function(scope, element, attr) {
      var msg = attr.confirmAction || "Are you sure you want to delete?";
      var clickAction = attr.ngClick;
      element.bind('click', function() {
        $('#myModal').modal();
        $('#myModal .btn-primary').click(function() {
          scope.$eval(clickAction);
          $('#myModal').modal('hide');
        });
        $('.modal-body p').text(msg);
      });
    }
  }
});
