'use strict';

angular.module('widgetServices').factory('widgetFactoryService', function($rootScope, $templateCache){
	var WidgetFactoryService = function(){
		
		this.generateWidgetHtml = function(){
			return '<widget-view></widget-view>';
		};

	};

	return new WidgetFactoryService();
});