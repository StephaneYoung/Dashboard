'use strict';

angular.module('toolbar', []).controller('toolbarCtrl', function($scope, widgetManagerService){

	$scope.isCreateCollapsed = true;

	$scope.toggleCreateCollapse = function(){
		$scope.isCreateCollapsed = !$scope.isCreateCollapsed;
	};

	$scope.addWidget = function(){
		widgetManagerService.createNewWidget();
	};
	
});