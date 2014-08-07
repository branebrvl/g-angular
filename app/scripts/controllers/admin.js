'use strict';

angular.module('webUI').controller('AdminController', function($http) {
  $http.get('/api/users');
});
