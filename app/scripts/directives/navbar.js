'use strict';

angular.module('webUI').directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavigationController'
  };
});

