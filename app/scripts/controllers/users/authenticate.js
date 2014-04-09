'use strict';

angular.module('apolloApp')
  .controller('UserAuthenticateCtrl', function ($scope, $http, $window, $location) {
    $scope.email = '';
    $scope.password = '';
    $scope.remember = false;
    $scope.message = '';
    $scope.authenticate = function(isValid) {
      var data = {'email': $scope.email, 'password': $scope.password};
      if (isValid) {
        $http({method: 'POST', url: 'http://127.0.0.1:8000/users/authenticate', data: data}).
          success(function(data, status, headers, config) {
            $window.localStorage.token = data.token;

            $http({method: 'GET', url: 'http://127.0.0.1:8000/users/' + $scope.email}).
              success(function(data, status, headers, config) {
                $window.localStorage.APIKey = data.apikey;
                $window.localStorage.name = data.name;
              }).
              error(function(data, status, headers, config) {
                delete $window.localStorage.token;
                $scope.message = data;
              });

            $location.path('/');
          }).
          error(function(data, status, headers, config) {
            delete $window.localStorage.token;
            $scope.message = data;
          });
      }
    };
  });
