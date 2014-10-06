'use strict';

angular.module('widget-canvas').directive('widgetCanvasView', function($compile, $document){
	return {
		controller: 'widgetCanvasCtrl',
		templateUrl: 'components/widget-canvas/widget-canvas-view.html',
		restrict: 'AE'
	}
}).directive('widgetSpace', function(widgetFactoryService, $compile){
	return{
		link:function(scope, element, attrs){
			scope.$on('CREATE_NEW_WIDGET', function(){
				var htmlTemplate = widgetFactoryService.generateWidgetHtml();
				element.append($compile(htmlTemplate)(scope));
			});
		}
	}
});	