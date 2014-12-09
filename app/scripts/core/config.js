(function () {
  'use strict';

  angular
    .module('app.core')
    .config(configure);

  angular.element(document).ready(function () {
    angular.bootstrap(document.getElementsByTagName('body')[0], ['app'], {
      'strictDi': false 
    });
  });

  configure.$inject = ['$routeProvider', '$provide', 'urlParametersProvider'];

  function configure($routeProvider, $provide, urlParametersProvider) {
    var parameters = urlParametersProvider.getParameters();

    $routeProvider
      .when('/', {
      templateUrl: 'scripts/core/main.html'
    })
      .when('/login', {
      templateUrl: 'scripts/admin/login.html',
      controller: 'LoginController'
    })
      .when('/logout', {
      templateUrl: 'scripts/admin/logout.html',
      controller: 'LogoutController'
    })
      .when('/admin', {
      templateUrl: 'scripts/admin/admin.html',
      controller: 'AdminController'
    })
      .otherwise({
      redirectTo: '/'
    });

    $provide.constant('CONFIG', {
      'someConfigObject': {}
    });
  }

})();
