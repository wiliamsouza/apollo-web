'use strict';

describe('Controller: UserAuthenticateCtrl', function () {

  // load the controller's module
  beforeEach(module('apolloApp'));

  var UserAuthenticateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserAuthenticateCtrl = $controller('UserAuthenticateCtrl', {
      $scope: scope
    });
  }));

  it('should all fields default value be blank', function () {
    expect(scope.email).toBe('');
    expect(scope.password).toBe('');
    expect(scope.remember).toBe(false);
    expect(scope.message).toBe('');
  });
});
