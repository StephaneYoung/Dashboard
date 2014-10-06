'use strict';

angular.module('navbar').directive('navbarView', function(){
	return {
		controller: 'navbarCtrl',
		templateUrl: '/components/navbar/navbar-view.html',
		restrict: 'AE',		
	};
});