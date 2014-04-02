'use strict';

angular.module('apolloApp')
  .controller('UserNewCtrl', function ($scope, $http, $window, $location) {
    $scope.name = '';
    $scope.email = '';
    $scope.password = '';
    $scope.pwd = '';
    $scope.new = function(isValid){
      var data = {'name': $scope.name, 'email': $scope.email, 'password': $scope.password};
      if (isValid) {
        $http({method: 'POST', url: 'http://localhost:8000/users', data: data}).
          success(function(data, status, headers, config) {
            $location.path('/users/authenticate');
          }).
          error(function(data, status, headers, config) {
            $scope.message = data;
        });
      }
    };
  });
