'use strict';

describe('Controller: UserNewCtrl', function () {

  // load the controller's module
  beforeEach(module('apolloApp'));

  var UserNewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserNewCtrl = $controller('UserNewCtrl', {
      $scope: scope
    });
  }));

  it('should all fields default value be blank', function () {
    expect(scope.name).toBe('');
    expect(scope.email).toBe('');
    expect(scope.password).toBe('');
    expect(scope.pwd).toBe('');
    expect(scope.message).toBe('');
  });
});
