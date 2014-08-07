'use strict';

angular.module('webUI').controller('LogoutController', function(auth, $location) {
  auth.logout();
});
