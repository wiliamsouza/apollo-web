'use strict';

angular
  .module('apolloApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .factory('authInterceptor', function ($rootScope, $q, $window, $location) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if ($window.localStorage.token) {
          config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
        }
        return config;
      },
      response: function (response) {
        if (response.status === 401) {
          $location.path('/users/authenticate');
        }
        return response || $q.when(response);
      }
    };
  })
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        access: {
          signInRequired: true
        }
      })
      .when('/users/new', {
        templateUrl: 'views/users/new.html',
        controller: 'UserNewCtrl',
        access: {
          signInRequired: false
        }
      })
      .when('/users/authenticate', {
        templateUrl: 'views/users/authenticate.html',
        controller: 'UserAuthenticateCtrl',
        access: {
          signInRequired: false
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $window, $route, $location) {
    $rootScope.$on('$routeChangeStart', function(event, targetRoute, currentRoute) {
      if (targetRoute.access.signInRequired && !$window.localStorage.token) {
        $route.reload();
        $location.path('/users/authenticate');
      }
    });
  });
