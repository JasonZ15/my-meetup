'use strict';

  var kung = (function() {
    var son;
    return {
      son: 'hi',
      daughter: function () {
        console.log(this);
        return this;
      }
    }
  })();
