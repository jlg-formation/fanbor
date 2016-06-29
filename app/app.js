(function() {
	'use strict';

	angular.module('templates', []);
	var app = angular.module('mainApp', [
		'ors-star',
		'ors-ws',
		'templates',
		'ngRoute',
		'angularSpinner']);
		
	app.config(['usSpinnerConfigProvider', function (usSpinnerConfigProvider) {
		usSpinnerConfigProvider.setDefaults({
  lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
});
	}]);

	app.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'tmpl/menu/home.html'
			})
			.when('/products', {
				templateUrl: 'tmpl/menu/products.html',
				controller: 'ors-ws.Ctrl',
				controllerAs: 'ctrl'
			})
			.when('/services', {
				templateUrl: 'tmpl/menu/services.html'
			})
			.when('/contact', {
				templateUrl: 'tmpl/menu/contact.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	
	app.run(['$injector', function($injector) {
		var $rootScope = $injector.get('$rootScope');
		var usSpinnerService = $injector.get('usSpinnerService');
		$rootScope.myNote = 2;
		$rootScope.s = {showSpinner: true};
	}]);

	app.directive('orsHeader', function() {
		return {
			restrict: 'CEA',
			templateUrl: 'tmpl/ors-header.html',
			transclude: true
		};
	});
	app.directive('orsBody', function() {
		return {
			restrict: 'CEA',
			templateUrl: 'tmpl/ors-body.html',
			transclude: true
		};
	});
	app.directive('orsFooter', function() {
		return {
			restrict: 'CEA',
			templateUrl: 'tmpl/ors-footer.html',
			transclude: true
		};
	});
})();
