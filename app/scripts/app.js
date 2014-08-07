'use strict';

angular.module('webUI', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
  $routeProvider
    .when('/', {
    templateUrl: 'views/main.html'
  })
    .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  })
    .when('/logout', {
    controller: 'LogoutController',
    templateUrl: 'views/logout.html'
  })
    .when('/admin', {
    templateUrl: 'views/admin.html',
    controller: 'AdminController'
  })
    .otherwise({
    redirectTo: '/'
  });
});
