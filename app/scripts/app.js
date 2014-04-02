'use strict';

angular
  .module('apolloApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/users/new', {
        templateUrl: 'views/users/new.html',
        controller: 'UserNewCtrl'
      })
      .when('/users/authenticate', {
        templateUrl: 'views/users/authenticate.html',
        controller: 'UserAuthenticateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
