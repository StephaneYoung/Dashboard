'use strict';

angular.module('navbar', []).controller('navbarCtrl', function($scope, $window){
	
	$scope.navWidth = 'width:' + (window.innerWidth - window.pageYOffset - 150) + 'px';

	$(window).resize(function(){
	    $scope.$apply(function(){
	    	$scope.navWidth = 'width:' + (window.innerWidth - window.pageYOffset - 150) + 'px';
	    });
	});
	
});