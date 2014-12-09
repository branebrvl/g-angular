(function () {
  'use strict';

  angular
    .module('app.navigation')
    .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: 'scripts/navigation/navbar.html',
      controller: 'NavigationController'
    };
  });
})();
