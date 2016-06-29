(function() {
	'use strict';

	angular.module('templates', []);
	var app = angular.module('mainApp', ['ors-star', 'templates', 'ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'tmpl/menu/home.html'
			})
			.when('/products', {
				templateUrl: 'tmpl/menu/products.html'
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
	
	app.run(['$rootScope', function($rootScope) {
		$rootScope.myNote = 2;
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
