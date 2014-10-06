'use strict';

angular.module('widget').directive('widgetView', function(){
	return {
		cotroller: 'widgetCtrl',
		restrict: 'AE',
		templateUrl: 'components/widget/widget-view.html',
		scope: {},
		link: function(scope, element, attrs){
			scope.close = function(){
				element.remove();
			};
		}
	}
});