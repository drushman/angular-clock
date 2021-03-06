'use strict';

describe('Controller: ClockCtrl', function () {

  // load the controller's module
  beforeEach(module('clockApp'));

  var ClockCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClockCtrl = $controller('ClockCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.type).toBe('flipclock');
  });
});
