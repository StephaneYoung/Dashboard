'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'toolbar',
  'widget-canvas',
  'widget',
  'myApp.version',
  'ui.bootstrap',
  'ngDragDrop',
  'widgetServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

angular.module('widgetServices', []);
