'use strict';

/**
 * @ngdoc overview
 * @name tooglesApp
 *
 * Main module of the application.
 */
var clockApp = angular.module('clockApp', ['ui.router']);

clockApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);

clockApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/clock');

    $stateProvider.state('clock', {
        url: '/clock',
        views: {
            main: {
                templateUrl: 'views/clock.html',
                controller: 'ClockCtrl'
            }
        }
    });
    $stateProvider.state('world-clock', {
        url: '/world-clock',
        views: {
            main: {
                templateUrl: 'views/world-clock.html',
                controller: 'WorldClockCtrl'
            }
        }
    });
    $stateProvider.state('alarm-clock', {
        url: '/alarm-clock',
        views: {
            main: {
                templateUrl: 'views/alarm-clock.html',
                controller: 'AlarmClockCtrl'
            }
        }
    });
    $stateProvider.state('countdown-timer', {
        url: '/countdown-timer',
        views: {
            main: {
                templateUrl: 'views/countdown-timer.html',
                controller: 'CountdownTimerCtrl'
            }
        }
    });

}]);
