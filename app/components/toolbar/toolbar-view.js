'use strict';

angular.module('toolbar').directive('toolbarView', function(){
	return {
		controller: 'toolbarCtrl',
		templateUrl: '/components/toolbar/toolbar-view.html',
		restrict: 'AE'
	};
});