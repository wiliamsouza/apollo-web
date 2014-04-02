'use strict';

angular.module('apolloApp')
  .controller('UserAuthenticateCtrl', function ($scope, $http, $window, $location) {
    $scope.email = '';
    $scope.password = '';
    $scope.remember = true;
    $scope.message = '';
    $scope.authenticate = function(isValid) {
      var data = {'email': $scope.email, 'password': $scope.password};
      if (isValid) {
        $http({method: 'POST', url: 'http://localhost:8000/users/authenticate', data: data}).
          success(function(data, status, headers, config) {
            $window.localStorage.token = data.token;
            $location.path('/');
          }).
          error(function(data, status, headers, config) {
            delete $window.localStorage.token;
            $scope.message = data;
        });
      }
    };
  });
