'use strict';

angular.module('webUI').controller('LoginController', function($scope, auth, $location) {
  $scope.user = { email: "", password: "" };
  $scope.wrongCredentials = false;

  $scope.login = function() {
    if ($scope.loginForm.$valid) {
      var promise = auth.login($scope.user);
      promise.then(success, error);
    } else {
      $scope.loginForm.submitted = true;
    }
  };

  var success = function(response) {
    localStorage.setItem('auth_token', response.data.auth_token);
    $location.path('/admin');
  };

  var error = function(response) {
    $scope.wrongCredentials = true;
  };
});
