(function() {
	'use strict';

	var app = angular.module('mainApp', []);

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
