'use strict';

angular.module('widgetServices').factory('widgetManagerService', function($rootScope){	

	var WidgetManagerService = function(){

		this.createNewWidget = function(){
			$rootScope.$broadcast('CREATE_NEW_WIDGET');
		};

	};

	return new WidgetManagerService();

});